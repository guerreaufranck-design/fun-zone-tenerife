'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, ArrowRight, User, Clock, Share2, Link2 } from 'lucide-react';
import { blogPosts } from '@/lib/blog/posts';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations('blog');

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-white">Post not found</h1>
          <Button variant="outline" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fun Zone Tenerife',
      url: 'https://funzonetenerife.com',
    },
    description: post.excerpt,
    image: 'https://funzonetenerife.com/images/og-image.jpg',
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Cover image */}
      <section className="relative overflow-hidden">
        <div className={`relative aspect-[21/9] w-full bg-gradient-to-br ${post.gradient} sm:aspect-[3/1]`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg text-white/10">Cover Image</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Button variant="ghost" size="sm" asChild className="mb-4">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <Badge variant="neonBlue" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="neon-glow mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <article className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted-foreground [&_a]:text-[#00d4ff] [&_a]:underline [&_a:hover]:text-white" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </article>

          {/* Share */}
          <div className="mt-12 flex items-center justify-between border-t border-border/50 pt-6">
            <span className="flex items-center gap-2 text-sm font-medium text-white">
              <Share2 className="h-4 w-4" />
              Share this article
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (typeof navigator !== 'undefined') {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
            >
              <Link2 className="mr-2 h-4 w-4" />
              Copy Link
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold text-white">Related Articles</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={{ pathname: '/blog/[slug]' as const, params: { slug: related.slug } }}
                    className="group block"
                  >
                    <Card className="overflow-hidden border-border/50 bg-[#111118] transition-all duration-300 hover:border-[#00d4ff]/20 hover:shadow-[0_0_15px_rgba(0,212,255,0.08)]">
                      <div className={`relative aspect-video bg-gradient-to-br ${related.gradient}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs text-white/10">Cover Image</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#111118] to-transparent" />
                      </div>
                      <CardContent className="pt-4">
                        <p className="mb-2 text-xs text-muted-foreground">
                          {new Date(related.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                        <h3 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-[#00d4ff]">
                          {related.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-sm text-[#00d4ff]">
                          {t('readMore')}
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
