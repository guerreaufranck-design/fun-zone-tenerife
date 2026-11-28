/**
 * IndexNow — instant indexing ping for Bing (and the engines that share its
 * index: ChatGPT search, Copilot, DuckDuckGo). Submitting a URL tells Bing to
 * crawl it within minutes instead of waiting for the next scheduled crawl.
 *
 * The key is published as a static file at https://funzonetenerife.com/<key>.txt
 * (public/<key>.txt); Bing fetches it to prove we own the key. Everything here
 * uses the apex canonical host so the submitted URLs match the sitemap.
 */

export const INDEXNOW_KEY = '6aed8a24ab6ecf24a8cc63d38ebd7332';
export const INDEXNOW_HOST = 'funzonetenerife.com';
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

/**
 * Submit up to 10,000 apex URLs to IndexNow in one call. URLs on another host
 * are dropped (IndexNow rejects a batch whose URLs don't match `host`).
 */
export async function submitToIndexNow(
  urls: string[],
): Promise<{ ok: boolean; status: number; submitted: number }> {
  const clean = Array.from(
    new Set(urls.filter((u) => u.startsWith(`https://${INDEXNOW_HOST}/`))),
  ).slice(0, 10000);

  if (clean.length === 0) return { ok: false, status: 0, submitted: 0 };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: clean,
    }),
  });

  return { ok: res.ok, status: res.status, submitted: clean.length };
}
