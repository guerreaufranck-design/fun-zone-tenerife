'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, ArrowRight, User, Clock, Share2, Link2 } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  gradient: string;
  readTime: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: 'top-10-tips-axe-throwing-beginners',
    title: 'Top 10 Tips for Axe Throwing Beginners',
    excerpt: 'New to axe throwing? Master the basics with our expert tips.',
    date: '2025-12-15',
    author: 'Axe Throwing Tenerife',
    category: 'Tips & Tricks',
    gradient: 'from-[#00d4ff]/20 via-[#1a1a2e] to-[#0a0a0f]',
    readTime: '5 min read',
    content: [
      'Axe throwing has exploded in popularity over the past few years, and for good reason. It is one of the most exhilarating, satisfying, and surprisingly accessible recreational activities you can try. Whether you are planning a night out with friends, a unique date, or just want to channel your inner Viking, here are our top tips to get you started.',
      'First and foremost: focus on your grip. Many beginners make the mistake of gripping the axe too tightly. Think of it like holding a golf club or a tennis racket. You want a firm but relaxed grip that allows the axe to naturally rotate when released. Our coaches always say: "Hold it like a bird, firm enough it does not fly away, gentle enough you do not crush it."',
      'Your stance matters more than you think. Stand facing the target with your feet shoulder-width apart. Step forward with your dominant foot (right foot for right-handers). This gives you a stable base and natural follow-through. Keep your body square to the target throughout the throw.',
      'The throw itself should come from above your head, not from the side. Bring the axe straight back over your head with both hands (for double-handed throws) and release as your arms come forward, roughly when the axe is at forehead height. The key is consistency. Every throw should follow the same motion.',
      'Distance from the target is crucial. If your axe is over-rotating (hitting the target with the handle), step back. If it is under-rotating (bouncing off), step forward. Our digital targets provide instant feedback, so you can quickly find your sweet spot. Most people find their groove within the first 10-15 throws.',
      'Do not aim for the bullseye right away. Focus on getting a consistent, straight throw first. Once you are reliably sticking the axe in the target, then start refining your aim. Accuracy comes naturally once your technique is solid.',
      'Relax and have fun. Tension in your shoulders and arms will actually make your throws worse. Take a deep breath, enjoy the satisfying "thunk" when the axe sticks, and do not worry about perfect scores right away. Our coaches are there to help you improve with every throw.',
      'Try different game modes. Our interactive digital targets feature 17+ games, from classic bullseye scoring to zombie apocalypse and tic-tac-toe. Switching between games keeps things fresh and challenges you in different ways. You might find you are naturally better at some games than others.',
      'Wear the right gear. Closed-toe shoes are mandatory in our venue. Beyond that, wear something comfortable that allows you to move your arms freely. Avoid loose jewelry or scarves that could interfere with your throw. We provide all the equipment you need.',
      'Finally, book with friends. Axe throwing is infinitely more fun as a group activity. The friendly competition, the cheering, the trash talk, that is what makes it truly memorable. Whether it is a group of two or twenty, the shared experience is what people remember most.',
    ],
  },
  {
    slug: 'axe-throwing-perfect-team-building',
    title: 'Why Axe Throwing is the Perfect Team Building Activity',
    excerpt: 'Discover why companies are choosing axe throwing for corporate events.',
    date: '2025-11-28',
    author: 'Axe Throwing Tenerife',
    category: 'Team Building',
    gradient: 'from-[#8b5cf6]/20 via-[#1a1a2e] to-[#0a0a0f]',
    readTime: '4 min read',
    content: [
      'Team building activities can make or break workplace morale. The best ones create shared experiences that bring colleagues together in ways that go beyond the office. Axe throwing has emerged as one of the most popular and effective team building choices, and here is why.',
      'It is a great equalizer. Unlike many activities where experienced participants dominate, axe throwing puts everyone on a level playing field. The CEO is just as likely to miss the target as the intern. This levels the playing field and creates genuine, organic interactions between team members who might not normally connect.',
      'The learning curve is fast and rewarding. Within minutes, complete beginners are sticking axes in the target. The rapid improvement keeps everyone engaged and motivated. There is something deeply satisfying about mastering a new skill, and sharing that journey with colleagues creates lasting bonds.',
      'Competition drives engagement. Our tournament formats are designed specifically for groups. Teams compete in round-robin formats, bracket-style eliminations, and special challenge rounds. The competitive element keeps energy levels high and creates memorable moments that teams talk about for months afterward.',
      'It is genuinely fun. Let us be honest, many team building activities feel forced. Trust falls, ice-breaker games, and group puzzles can feel awkward. Axe throwing is different. It is inherently exciting, slightly adrenaline-pumping, and produces genuine reactions. When someone hits a bullseye, the celebration is real.',
      'Our venue provides the perfect environment. With space for up to 30 participants, dedicated event coordinators, and included catering (drinks and snacks), we handle all the logistics. Your team can focus on having a great time while we manage the experience from start to finish.',
      'The results speak for themselves. Companies report improved team communication, stronger interpersonal relationships, and higher morale after axe throwing events. It is not just fun, it is an investment in your team culture.',
    ],
  },
  {
    slug: 'history-axe-throwing-vikings-modern-sport',
    title: 'The History of Axe Throwing: From Vikings to Modern Sport',
    excerpt: 'Trace the fascinating journey of axe throwing through history.',
    date: '2025-11-10',
    author: 'Axe Throwing Tenerife',
    category: 'History',
    gradient: 'from-[#ff6b00]/20 via-[#1a1a2e] to-[#0a0a0f]',
    readTime: '6 min read',
    content: [
      'The satisfying thud of an axe hitting its target is a sound that has echoed through human history for thousands of years. From ancient battlefields to modern recreational venues, axe throwing has undergone a remarkable transformation. Let us trace its journey from tool of survival to one of the world\'s fastest-growing sports.',
      'The earliest axes date back to the Stone Age, roughly 1.6 million years ago. These primitive tools were essential for survival, used for cutting, hunting, and building. As civilizations developed, axes evolved from stone to bronze to iron, becoming more refined and specialized with each era.',
      'The Vikings, perhaps the most famous axe-wielders in history, elevated the axe from a simple tool to a weapon of war. Norse warriors trained extensively in axe combat, and throwing axes at targets was a common form of both training and entertainment. The Viking throwing axe, or "Francisca," was designed specifically for throwing, with a distinctive curved head that provided aerodynamic stability in flight.',
      'Throughout medieval Europe, axes remained essential tools for both combat and daily life. Lumberjacks and woodsmen were particularly skilled at throwing axes, and competitions naturally arose. Logging camps in North America during the 18th and 19th centuries formalized these competitions, with lumberjacks competing in axe throwing, log rolling, and wood chopping events.',
      'The modern axe throwing movement began in the early 2000s in Canada, where a backyard activity among friends evolved into a structured sport. The first commercial axe throwing venue opened in Toronto in 2006, and the concept quickly spread across North America and then worldwide.',
      'Today, axe throwing is a global phenomenon with professional leagues, standardized rules, and dedicated venues on every continent. The World Axe Throwing League (WATL) and the International Axe Throwing Federation (IATF) govern competitive play, with thousands of registered athletes.',
      'Technology has added a new dimension to the sport. At Axe Throwing Tenerife, we combine traditional throwing technique with cutting-edge interactive digital targets. These targets offer 17+ game modes, automatic scoring, and an immersive experience that connects the ancient art of axe throwing with modern entertainment.',
      'From Viking warriors to weekend throwers, the essence of axe throwing remains unchanged: the focus, the release, and the incredible satisfaction of a perfect throw. Come experience thousands of years of history at our venue in Playa Las Americas.',
    ],
  },
];

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
      name: 'Axe Throwing Tenerife',
    },
    description: post.excerpt,
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
              <p key={index} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
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
