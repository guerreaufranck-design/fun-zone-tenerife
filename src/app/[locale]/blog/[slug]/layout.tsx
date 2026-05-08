import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog/posts';
import { getAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Blog | Fun Zone Tenerife' };
  }

  const alternates = getAlternates('/blog/[slug]', slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://funzonetenerife.com/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: 'https://funzonetenerife.com/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
