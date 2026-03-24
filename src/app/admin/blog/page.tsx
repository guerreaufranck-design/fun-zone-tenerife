'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Edit, Eye } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  status: 'draft' | 'published';
  date: string;
  excerpt: string;
}

const placeholderPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Tips for Your First Axe Throwing Session',
    status: 'published',
    date: '2026-03-10',
    excerpt: 'New to axe throwing? Here are our top tips to help you hit the bullseye on your first visit.',
  },
  {
    id: '2',
    title: 'Why Axe Throwing is the Perfect Team Building Activity',
    status: 'published',
    date: '2026-03-05',
    excerpt: 'Discover why companies are choosing axe throwing for their next team event.',
  },
  {
    id: '3',
    title: 'The History of Axe Throwing as a Sport',
    status: 'draft',
    date: '2026-03-15',
    excerpt: 'From ancient warfare to modern sport, explore the fascinating history of competitive axe throwing.',
  },
  {
    id: '4',
    title: 'Best Things to Do in Tenerife South',
    status: 'draft',
    date: '2026-03-14',
    excerpt: 'Looking for activities in the south of Tenerife? Check out our guide to the best experiences.',
  },
];

export default function BlogPage() {
  const [posts] = useState(placeholderPosts);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Blog</h1>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Link>
        </Button>
      </div>

      <Card className="bg-[#111118] border-border/30">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Title</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden md:table-cell">Excerpt</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-3 px-3 text-muted-foreground font-medium hidden sm:table-cell">Date</th>
                  <th className="text-right py-3 px-3 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-border/10 hover:bg-secondary/20 transition-colors"
                  >
                    <td className="py-3 px-3 font-medium">{post.title}</td>
                    <td className="py-3 px-3 hidden md:table-cell text-muted-foreground max-w-xs truncate">
                      {post.excerpt}
                    </td>
                    <td className="py-3 px-3">
                      <Badge variant={post.status === 'published' ? 'neonGreen' : 'secondary'}>
                        {post.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-3 hidden sm:table-cell text-muted-foreground">
                      {post.date}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                          <Link href={`/admin/blog/${post.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {posts.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
                      No blog posts yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
