/**
 * fill-missing-images.ts — collect a hero photo for every activity / blog post
 * that is missing one.
 *
 * Source: Pexels (free, commercial use, no attribution required, modification
 * allowed — see https://www.pexels.com/license/). The exact tour photo still
 * comes from the GetYourGuide widget on the page; this only fills the static
 * card / hero / OpenGraph image, which today is placed by hand.
 *
 * What it does, per target with no usable image:
 *   1. builds a search query from the title / name / category
 *   2. fetches a landscape photo from Pexels
 *   3. resizes + converts to .avif (sharp), matching the existing assets
 *   4. writes it to public/images/{activities,blog}/<slug>.avif
 *   5. inserts `image: '/images/.../<slug>.avif'` into the data file (unless the
 *      field already exists and only the file was missing — then it just
 *      re-creates the file at the existing path, no source edit)
 *
 * Usage:
 *   PEXELS_API_KEY=xxx npx tsx scripts/fill-missing-images.ts [--dry-run]
 *                                                             [--blog-only]
 *                                                             [--activities-only]
 *
 * Get a free key at https://www.pexels.com/api/ . --dry-run needs no key: it
 * only lists what is missing.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { activities } from '../src/data/activities';
import { blogPosts } from '../src/lib/blog/posts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const BLOG_ONLY = args.has('--blog-only');
const ACTIVITIES_ONLY = args.has('--activities-only');
const PEXELS_KEY = process.env.PEXELS_API_KEY;

const STOPWORDS = new Set([
  'the', 'a', 'an', 'to', 'in', 'on', 'of', 'for', 'and', 'or', 'your', 'you',
  'what', 'how', 'why', 'with', 'is', 'are', 'best', 'guide', 'tips', 'expect',
  'first', 'everything', 'ultimate', 'complete', 'things', 'do', 'at', 'from',
  'this', 'that', 'it', 'its', 'about', 'playing', 'play', 'our',
]);

interface Target {
  kind: 'activity' | 'blog';
  slug: string;
  /** Pexels search query. */
  query: string;
  /** Published path to write into the data file, e.g. /images/blog/foo.avif */
  imagePath: string;
  /** Absolute file path on disk. */
  diskPath: string;
  /** Whether the data object already has an `image:` field (file was just missing). */
  hasField: boolean;
  dataFile: string;
}

function clean(s: string): string {
  // strip emoji, then fold accents (ü→u, é→e…) so non-English titles don't mangle
  return s
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}]/gu, '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
}

/** Turn a long blog title into a short, image-search-friendly query. */
function blogQuery(title: string): string {
  const head = title.split(/[:–—|]/)[0]; // before a colon / dash
  const words = clean(head)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
  const keywords = words.slice(0, 4).join(' ').trim();
  if (!keywords) return 'Tenerife landscape';
  return /tenerife|canary|canarias|teneriffa|kanaren/.test(keywords)
    ? keywords
    : `${keywords} Tenerife`.trim();
}

function activityQuery(name: string, location: string): string {
  const base = clean(name).replace(/&/g, ' ').replace(/\s+/g, ' ').trim();
  const place = clean(location.split('·')[0]).trim(); // first location before "·"
  return `${base} ${place}`.trim();
}

function fileMissing(publishedPath: string | undefined): boolean {
  if (!publishedPath) return true;
  return !existsSync(join(PUBLIC, publishedPath.replace(/^\//, '')));
}

function collectTargets(): Target[] {
  const targets: Target[] = [];

  if (!BLOG_ONLY) {
    for (const a of activities) {
      if (a.isFunZone) continue; // Fun Zone's own product keeps its branded asset
      if (!fileMissing(a.image)) continue;
      const imagePath = a.image ?? `/images/activities/${a.slug}.avif`;
      targets.push({
        kind: 'activity',
        slug: a.slug,
        query: activityQuery(a.name, a.location),
        imagePath,
        diskPath: join(PUBLIC, imagePath.replace(/^\//, '')),
        hasField: Boolean(a.image),
        dataFile: join(ROOT, 'src/data/activities.ts'),
      });
    }
  }

  if (!ACTIVITIES_ONLY) {
    for (const p of blogPosts) {
      if (!fileMissing(p.image)) continue;
      const imagePath = p.image ?? `/images/blog/${p.slug}.avif`;
      targets.push({
        kind: 'blog',
        slug: p.slug,
        query: blogQuery(p.title),
        imagePath,
        diskPath: join(PUBLIC, imagePath.replace(/^\//, '')),
        hasField: Boolean(p.image),
        dataFile: join(ROOT, 'src/lib/blog/posts.ts'),
      });
    }
  }

  return targets;
}

interface PexelsPhoto {
  src: { original: string; large2x: string; large: string };
  alt: string;
  photographer: string;
}

async function searchPexels(query: string): Promise<PexelsPhoto | null> {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=3`;
  const res = await fetch(url, { headers: { Authorization: PEXELS_KEY as string } });
  if (!res.ok) {
    console.warn(`  ! Pexels ${res.status} for "${query}"`);
    return null;
  }
  const data = (await res.json()) as { photos?: PexelsPhoto[] };
  return data.photos?.[0] ?? null;
}

async function toAvif(sourceUrl: string, dest: string): Promise<void> {
  const res = await fetch(sourceUrl);
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const out = await sharp(buf)
    .resize({ width: 1600, height: 1000, fit: 'cover', position: 'attention', withoutEnlargement: true })
    .avif({ quality: 55 })
    .toBuffer();
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, out);
}

/** Insert `image: '<path>',` right after the entry's `slug: '<slug>',` line. */
function insertImageField(t: Target): boolean {
  const src = readFileSync(t.dataFile, 'utf8');
  const slugRe = new RegExp(`(^(\\s*)slug:\\s*['"]${t.slug.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}['"],\\s*$)`, 'm');
  const m = src.match(slugRe);
  if (!m) {
    console.warn(`  ! could not locate slug anchor for ${t.slug} in ${t.dataFile}`);
    return false;
  }
  const indent = m[2];
  const injected = `${m[1]}\n${indent}image: '${t.imagePath}',`;
  writeFileSync(t.dataFile, src.replace(slugRe, injected), 'utf8');
  return true;
}

async function main() {
  const targets = collectTargets();
  console.log(`\nMissing images: ${targets.length}`);
  for (const t of targets) {
    console.log(`  [${t.kind}] ${t.slug}  ->  "${t.query}"  (${t.hasField ? 'file missing' : 'no field'})`);
  }

  if (DRY_RUN) {
    console.log('\n--dry-run: nothing fetched or written.\n');
    return;
  }
  if (!targets.length) {
    console.log('\nNothing to do.\n');
    return;
  }
  if (!PEXELS_KEY) {
    console.error('\nPEXELS_API_KEY is not set. Get a free key at https://www.pexels.com/api/ and re-run.\n');
    process.exit(1);
  }

  let ok = 0;
  let failed = 0;
  for (const t of targets) {
    try {
      process.stdout.write(`\n• ${t.slug} … `);
      const photo =
        (await searchPexels(t.query)) ??
        (await searchPexels(t.kind === 'blog' ? 'Tenerife landscape' : `${t.query.split(' ').slice(-1)[0]} Tenerife`));
      if (!photo) {
        console.log('no photo found, skipped');
        failed++;
        continue;
      }
      await toAvif(photo.src.original, t.diskPath);
      process.stdout.write('image saved');
      if (!t.hasField) {
        const inserted = insertImageField(t);
        process.stdout.write(inserted ? ', field inserted' : ', FIELD NOT INSERTED (add manually)');
      }
      console.log(`  [credit: ${photo.photographer}]`);
      ok++;
    } catch (err) {
      console.log(`failed: ${(err as Error).message}`);
      failed++;
    }
  }

  console.log(`\nDone. ${ok} filled, ${failed} failed. Review with: git diff --stat\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
