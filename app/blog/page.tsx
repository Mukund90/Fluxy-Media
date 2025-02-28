import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, Search } from 'lucide-react'

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt: "Discover the most effective SEO strategies that are driving results in today's digital landscape.",
    category: "SEO",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "/blog/seo-strategies-2025",
    author: {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  },
  {
    id: 2,
    title: "The Future of Social Media Marketing",
    excerpt: "How AI and automation are reshaping social media marketing strategies for businesses.",
    category: "Social Media",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "/blog/future-social-media-marketing",
    author: {
      name: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  },
  {
    id: 3,
    title: "Measuring ROI in Content Marketing",
    excerpt: "A comprehensive guide to tracking and measuring the ROI of your content marketing efforts.",
    category: "Content",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "/blog/measuring-content-marketing-roi",
    author: {
      name: "Emily Patel",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  },
  {
    id: 4,
    title: "Email Marketing Automation: A Complete Guide",
    excerpt: "Learn how to set up effective email marketing automation workflows that nurture leads and drive conversions.",
    category: "Email",
    date: "March 22, 2025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "/blog/email-marketing-automation",
    author: {
      name: "Alex Johnson",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  },
  {
    id: 5,
    title: "The Complete Guide to Google Analytics 4",
    excerpt: "Everything you need to know about Google Analytics 4 and how to use it to improve your marketing strategy.",
    category: "Analytics",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "/blog/google-analytics-4-guide",
    author: {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  },
  {
    id: 6,
    title: "7 PPC Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging trends in pay-per-click advertising.",
    category: "PPC",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "/blog/ppc-trends-2025",
    author: {
      name: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  }
];

// Featured post
const featuredPost = blogPosts[0];

// Categories
const categories = [
  "All",
  "SEO",
  "PPC",
  "Social Media",
  "Content",
  "Email",
  "Analytics"
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Our Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Marketing Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert tips, industry trends, and actionable advice to help you improve your digital marketing strategy.
          </p>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                width={800} 
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Badge>{featuredPost.category}</Badge>
                <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
              </div>
              <h2 className="text-3xl font-bold">
                <Link href={featuredPost.slug} className="hover:text-primary transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-muted-foreground text-lg">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image 
                    src={featuredPost.author.image} 
                    alt={featuredPost.author.name} 
                    width={40} 
                    height={40} 
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{featuredPost.author.name}</span>
              </div>
              <Button asChild>
                <Link href={featuredPost.slug} className="flex items-center gap-2">
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-muted/30 p-6 rounded-xl">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className="text-sm font-medium">Filter by:</span>
              <Select defaultValue="All">
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="latest">
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image 
                        src={post.author.image} 
                        alt={post.author.name} 
                        width={32} 
                        height={32} 
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm">{post.author.name}</span>
                  </div>
                  <Button variant="ghost" className="group-hover:text-primary" asChild>
                    <Link href={post.slug} className="flex items-center gap-2">
                      Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Newsletter</Badge>
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest digital marketing insights, trends, and tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Your email address" type="email" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Marketing?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our team can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}