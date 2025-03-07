import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, BarChart3, CheckCircle, Globe, LineChart, MessageSquare, Rocket, TrendingUp, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* <Badge variant="outline" className="px-3 py-1 text-sm">
                Trusted by 500+ businesses worldwide
              </Badge> */}
              <h1 className="text-4xl  text-purple-600 md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transform Your Digital <span className="text-primary text-purple-600">Presence</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Data-driven marketing strategies that deliver measurable results and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className='bg-purple-600' size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button className='bg-purple-600 text-white'  size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                      <Image 
                        src={`/images/${i}.png`}
                        alt={`Client ${i}`}
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-medium">4.9/5</span> from over 400 reviews
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/headers.jpg" 
                  alt="Digital Marketing Team" 
                  width={600} 
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-purple-600 font-bold text-muted-foreground">Trusted by Innovative Companies</h2>
          </div>
          <div className="hidden md:flex justify-between items-center px-4 gap-8"> {/* Desktop view */}
            {[
              { name: 'Acme Inc', src: '/images/1.png' },
              { name: 'Globex', src: '/images/2.png' },
              { name: 'Soylent Corp', src: '/images/3.png' },
              { name: 'Initech', src: '/images/4.png' },
              { name: 'Umbrella Corp', src: '/images/5.png' }
            ].map((company) => (
              <div 
                key={company.name} 
                className="overflow-hidden w-[250px] h-[150px] relative flex items-center justify-center hover:shadow-lg rounded-lg transition-shadow duration-300"
              >
                <Image 
                  src={company.src}
                  alt={`${company.name} logo`}
                  width={200}
                  height={100}
                  className="object-contain transition-transform duration-500 hover:scale-150"
                />
              </div>
            ))}
          </div>

          {/* Mobile view */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {[
              { name: 'Acme Inc', src: '/images/1.png' },
              { name: 'Globex', src: '/images/2.png' },
              { name: 'Soylent Corp', src: '/images/3.png' },
              { name: 'Initech', src: '/images/4.png' },
              { name: 'Umbrella Corp', src: '/images/5.png' }
            ].map((company) => (
              <div 
                key={company.name} 
                className="overflow-hidden h-[100px] relative flex items-center justify-center hover:shadow-lg rounded-lg transition-shadow duration-300"
              >
                <Image 
                  src={company.src}
                  alt={`${company.name} logo`}
                  width={150}
                  height={75}
                  className="object-contain transition-transform duration-500 hover:scale-125"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Button 
              className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20"
            >
              Our Services
            </Button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600">Comprehensive Digital Marketing Solutions</h2>
            <p className="text-lg text-muted-foreground">
              We offer a full range of digital marketing services to help your business grow and succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'SEO Optimization',
                description: 'Improve your search rankings and drive organic traffic to your website.',
                icon: <Globe className="h-10 w-10 text-primary" />,
                link: '/services/seo'
              },
              {
                title: 'Lead Generation Campaigns',
                description: 'Generating leads, booking appointments, and attracting clients through targeted marketing campaigns.',
                icon: <BarChart3 className="h-10 w-10 text-primary" />,
                link: '/services/ppc'
              },
              {
                title: 'Social Media Management',
                description: 'Build your brand presence and engage with your audience on social platforms.',
                icon: <Users className="h-10 w-10 text-primary" />,
                link: '/services/social-media'
              },
              {
                title: 'Content Creation',
                description: 'Create valuable content that resonates with your target audience.',
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                link: '/services/content'
              },
              {
                title: 'Website Design & Development',
                description: 'Creating modern, responsive websites that convert visitors into customers.',
                icon: <LineChart className="h-10 w-10 text-primary" />,
                link: '/services/web-design'
              },
              {
                title: 'Graphic Design',
                description: 'Creating stunning visuals that enhance your brand identity and marketing materials.',
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                link: '/services/graphic-design'
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className='text-purple-600'>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="group-hover:text-primary" asChild>
                    <Link href={service.link} className="flex items-center gap-2">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Case Studies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how we've helped businesses like yours achieve remarkable results.
            </p>
          </div>

          <Tabs defaultValue="ecommerce" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="saas">SaaS</TabsTrigger>
                <TabsTrigger value="local">Local Business</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="ecommerce">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="E-commerce Case Study" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Badge>E-commerce</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold">FashionHub: 215% Increase in Online Sales</h3>
                  <p className="text-muted-foreground">
                    We helped FashionHub optimize their online store and marketing strategy, resulting in a 215% increase in sales within 6 months.
                  </p>
                  <ul className="space-y-2">
                    {['SEO optimization', 'Social media advertising', 'Email marketing automation'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/case-studies/fashionhub">Read Case Study</Link>
                  </Button>
                </div>
              </div> */}
            {/* </TabsContent> */}
            
            {/* <TabsContent value="saas">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="SaaS Case Study" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Badge>SaaS</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold">CloudTech: 180% Increase in Qualified Leads</h3>
                  <p className="text-muted-foreground">
                    We developed a comprehensive digital strategy for CloudTech that resulted in a 180% increase in qualified leads and a 40% reduction in customer acquisition costs.
                  </p>
                  <ul className="space-y-2">
                    {['Content marketing', 'PPC optimization', 'Conversion rate optimization'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/case-studies/cloudtech">Read Case Study</Link>
                  </Button>
                </div>
              </div>
            </TabsContent> */}
{/*             
            <TabsContent value="local">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Local Business Case Study" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Badge>Local Business</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold">Metro Fitness: 320% Increase in Membership Sign-ups</h3>
                  <p className="text-muted-foreground">
                    We helped Metro Fitness dominate local search results and implement targeted social media campaigns, resulting in a 320% increase in new membership sign-ups.
                  </p>
                  <ul className="space-y-2">
                    {['Local SEO', 'Google Business Profile optimization', 'Targeted Facebook ads'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/case-studies/metro-fitness">Read Case Study</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Button 
              className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20"
            >
              Our Process
            </Button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600">How We Drive Results</h2>
            <p className="text-lg text-muted-foreground">
              Our proven methodology ensures we deliver consistent results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business, goals, target audience, and competitive landscape.',
                icon: <Users className="h-8 w-8" />
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a customized digital marketing strategy tailored to your specific needs and objectives.',
                icon: <LineChart className="h-8 w-8" />
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Our team executes the strategy with precision, focusing on quality and attention to detail.',
                icon: <Rocket className="h-8 w-8" />
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor, analyze, and optimize campaigns to maximize ROI and performance.',
                icon: <TrendingUp className="h-8 w-8" />
              }
            ].map((process, index) => (
              <Card key={index} className="relative overflow-hidden border-none bg-muted/50 hover:bg-muted transition-colors">
                <div className="absolute top-4 right-4 text-4xl font-bold text-primary/10">{process.step}</div>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    {process.icon}
                  </div>
                  <CardTitle className="text-purple-600">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Button 
              className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20"
            >
              Testimonials
            </Button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Fluxy Media transformed our online presence. Their SEO strategy increased our organic traffic by 200% in just 4 months.",
                name: "Sarah Johnson",
                title: "Marketing Director, TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "The ROI we've seen from our campaigns with Fluxy Media has been incredible. They truly understand our business and our customers.",
                name: "Michael Chen",
                title: "CEO, GrowthLabs",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "Working with Fluxy Media has been a game-changer for our e-commerce business. Our conversion rate has doubled since implementing their strategies.",
                name: "Emily Rodriguez",
                title: "Founder, StyleHouse",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={48} 
                        height={48} 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Ready to Grow?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Digital Marketing Today</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create a customized digital marketing strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blog Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <Badge className="mb-2">Latest Insights</Badge>
              <h2 className="text-3xl font-bold">From Our Blog</h2>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0" asChild>
              <Link href="/blog" className="flex items-center gap-2">
                View all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "10 SEO Strategies That Actually Work in 2025",
                excerpt: "Discover the most effective SEO strategies that are driving results in today's digital landscape.",
                category: "SEO",
                date: "May 15, 2025",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                slug: "/blog/seo-strategies-2025"
              },
              {
                title: "The Future of Social Media Marketing",
                excerpt: "How AI and automation are reshaping social media marketing strategies for businesses.",
                category: "Social Media",
                date: "April 28, 2025",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                slug: "/blog/future-social-media-marketing"
              },
              {
                title: "Measuring ROI in Content Marketing",
                excerpt: "A comprehensive guide to tracking and measuring the ROI of your content marketing efforts.",
                category: "Content",
                date: "April 10, 2025",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                slug: "/blog/measuring-content-marketing-roi"
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden group">
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
                <CardFooter>
                  <Button variant="ghost" className="group-hover:text-primary" asChild>
                    <Link href={post.slug} className="flex items-center gap-2">
                      Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}