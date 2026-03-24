import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    slug: 'top-10-tips-axe-throwing-beginners',
    title: 'Top 10 Tips for Axe Throwing Beginners',
    excerpt: 'New to axe throwing? Master the basics with our expert tips on grip, stance, and release technique. From choosing the right throw to reading the target, these tips will have you hitting bullseyes in no time.',
    date: '2025-12-15',
    category: 'Tips & Tricks',
    gradient: 'from-[#00d4ff]/20 via-[#1a1a2e] to-[#0a0a0f]',
    readTime: '5 min read',
  },
  {
    slug: 'axe-throwing-perfect-team-building',
    title: 'Why Axe Throwing is the Perfect Team Building Activity',
    excerpt: 'Looking for a team building activity that actually brings people together? Discover why companies are choosing axe throwing over escape rooms and paintball for their next corporate outing.',
    date: '2025-11-28',
    category: 'Team Building',
    gradient: 'from-[#8b5cf6]/20 via-[#1a1a2e] to-[#0a0a0f]',
    readTime: '4 min read',
  },
  {
    slug: 'history-axe-throwing-vikings-modern-sport',
    title: 'The History of Axe Throwing: From Vikings to Modern Sport',
    excerpt: 'Trace the fascinating journey of axe throwing from its origins as a Viking battle technique to one of the fastest-growing recreational sports in the world. A tale of warriors, lumberjacks, and modern athletes.',
    date: '2025-11-10',
    category: 'History',
    gradient: 'from-[#ff6b00]/20 via-[#1a1a2e] to-[#0a0a0f]',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Tips & Tricks', 'Team Building', 'History', 'Events'];

export default function BlogPage() {
  const t = useTranslations('blog');

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Blog Posts */}
            <div className="space-y-8 lg:col-span-2">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={{ pathname: '/blog/[slug]' as const, params: { slug: post.slug } }}
                  className="group block"
                >
                  <Card className="overflow-hidden border-border/50 bg-[#111118] transition-all duration-300 hover:border-[#00d4ff]/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]">
                    {/* Cover image placeholder */}
                    <div className={`relative aspect-[21/9] bg-gradient-to-br ${post.gradient}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm text-white/10">Cover Image</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#111118] to-transparent" />
                      <div className="absolute left-4 top-4">
                        <Badge variant="neonBlue">{post.category}</Badge>
                      </div>
                    </div>

                    <CardContent className="pt-4">
                      <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#00d4ff] sm:text-2xl">
                        {post.title}
                      </h2>

                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00d4ff] transition-all group-hover:gap-2.5">
                        {t('readMore')}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Categories */}
              <Card className="border-border/50 bg-[#111118]">
                <CardContent className="pt-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
                    <Tag className="h-5 w-5 text-[#00d4ff]" />
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="rounded-full border border-border/50 bg-[#0a0a0f] px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-[#00d4ff]/30 hover:text-[#00d4ff]"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-border/50 bg-[#111118]">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-lg font-bold text-white">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={{ pathname: '/blog/[slug]' as const, params: { slug: post.slug } }}
                        className="group block"
                      >
                        <div className="flex gap-3">
                          <div className={`h-16 w-16 flex-shrink-0 rounded-lg bg-gradient-to-br ${post.gradient}`} />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white transition-colors group-hover:text-[#00d4ff] line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-[#00d4ff]/20 bg-gradient-to-br from-[#00d4ff]/5 to-[#111118]">
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-2 text-lg font-bold text-white">Ready to throw?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Book your axe throwing experience today.
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00d4ff] px-4 py-2 text-sm font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
