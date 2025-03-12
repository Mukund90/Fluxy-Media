import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  BarChart3, 
  CheckCircle, 
  Clock, 
  Globe, 
  LineChart, 
  MessageSquare, 
  Rocket, 
  Target, 
  Users 
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-10 md:pt-20 lg:pt-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Button 
            className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20 rounded-full"
          >
            About Us
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">We're a Team of Digital Marketing Experts</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Helping businesses grow through innovative digital marketing strategies since 2023.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 md:py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="images/about1.jpg" 
                  alt="Our Team" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
            
            <div className="space-y-6">
              <Button 
                className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20 rounded-full"
              >
                Our Story
              </Button>
              <h2 className="text-3xl font-bold text-purple-600">From Static to Dynamic</h2>
              <p className="text-muted-foreground text-justify">
                Founded in 2023, Fluxy Media set out to revolutionize the digital marketing landscape. Our mission: empower businesses to thrive in the ever-evolving online world. From humble beginnings with a trio of passionate marketers, we've grown into a powerhouse agency boasting over 10 specialists in SEO, content, social media, and analytics. Today, we drive real results for our clients, harnessing the full potential of digital marketing to propel their success.
              </p>
              <p className="text-muted-foreground text-justify">
                We empower businesses to thrive in the digital age. We've transformed the digital presence of multiple companies, driving remarkable growth through data-driven insights and innovative execution.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>3,000+ Leads Generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>476+ Sales Conversions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>50+ Campaigns Executed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>275+ Reels Created</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Button 
              className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20 rounded-full"
            >
              Our Values
            </Button>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">What Drives Us</h2>
            <p className="text-lg text-muted-foreground">
              Our core values shape everything we do, from how we work with clients to how we develop our strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data-Driven Decisions",
                description: "We believe in making decisions based on data, not assumptions. Every strategy we develop is backed by thorough research and analysis.",
                icon: <LineChart className="h-10 w-10 text-primary" />
              },
              {
                title: "Client Partnership",
                description: "We view ourselves as an extension of your team, working collaboratively to achieve your business goals and drive sustainable growth.",
                icon: <Users className="h-10 w-10 text-primary" />
              },
              {
                title: "Continuous Innovation",
                description: "The digital landscape is constantly evolving, and so are we. We stay ahead of industry trends to deliver cutting-edge strategies.",
                icon: <Rocket className="h-10 w-10 text-primary" />
              },
              {
                title: "Transparency",
                description: "We believe in complete transparency in our processes, reporting, and communication. You'll always know exactly what we're doing and why.",
                icon: <Globe className="h-10 w-10 text-primary" />
              },
              {
                title: "Results-Focused",
                description: "We're not interested in vanity metrics. Our success is measured by the tangible business results we deliver for our clients.",
                icon: <Target className="h-10 w-10 text-primary" />
              },
              {
                title: "Adaptability",
                description: "We quickly adapt to changes in the market, algorithms, and consumer behavior to ensure your strategy remains effective.",
                icon: <BarChart3 className="h-10 w-10 text-primary" />
              }
            ].map((value, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Button 
              className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20 rounded-full"
            >
              Our Team
            </Button>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Meet the Experts</h2>
            <p className="text-lg text-muted-foreground">
              Our diverse team of specialists brings together expertise from across the digital marketing landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "With 15+ years of experience in digital marketing, Alex leads our strategic vision and client relationships.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Sarah Chen",
                role: "Head of SEO",
                bio: "Sarah specializes in technical SEO and has helped clients achieve top rankings in highly competitive industries.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Rodriguez",
                role: "PPC Director",
                bio: "Michael's data-driven approach to paid advertising has generated millions in revenue for our e-commerce clients.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Emily Patel",
                role: "Content Strategist",
                bio: "Emily crafts compelling content strategies that engage audiences and drive conversions across all channels.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={300} 
                    height={300}
                    className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className='bg-purple-600' asChild>
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Clients Served",
                icon: <Users className="h-8 w-8 text-primary" />
              },
              {
                number: "15M+",
                label: "Leads Generated",
                icon: <Target className="h-8 w-8 text-primary" />
              },
              {
                number: "$250M+",
                label: "Revenue Generated",
                icon: <LineChart className="h-8 w-8 text-primary" />
              },
              {
                number: "10+",
                label: "Years of Experience",
                icon: <Clock className="h-8 w-8 text-primary" />
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Button 
              className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20 rounded-full"
            >
              Testimonials
            </Button>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-8 rounded-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src="images/1.png" 
                    alt="David Wilson" 
                    width={64} 
                    height={64} 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Gruhaseema Interiors</h3>
                </div>
              </div>
              <p className="text-lg italic mb-6">
              I struggled with slow growth and unpredictable client flow in my interior design business. But after partnering with Fluxy Media, everything changed for the better. Now my business is more stable and successful. I'm getting consistent leads and closing projects. My business finally feels secure. I'm grateful for the transformation. Fluxy Media's expertise made all the difference. They understood my challenges and provided effective solutions. I'm thrilled with the results. My business is thriving. I highly recommend Fluxy Media.

              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/30 p-8 rounded-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src="images/4.png" 
                    alt="Jennifer Lee" 
                    width={64} 
                    height={64} 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bombay Constructor</h3>
                </div>
              </div>
              <p className="text-lg italic mb-6">
              I listed my business on multiple platforms hoping to attract customers but the leads I received were always fake converting them was a continual battle and the majority of inquiries went unanswered. That's when I started working with Apex Beast Media. In just two months I closed four deals. They set up a system that qualifie low-quality inquiries and sent me real high-intent appointments instead of random leads.I could now finally concentrate on real clients rather than squandering time on pointless follow-ups. If you're tired of chasing false leads these are the right people to help you.
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 mb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Button 
              className="mb-4 bg-purple-600 hover:bg-purple-600/90 transform hover:scale-105 transition-all duration-300 text-lg px-5 py-6 shadow-lg hover:shadow-purple-500/20 rounded-full"
            >
              Our Partners
            </Button>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Trusted Technology Partners</h2>
            <p className="text-lg text-muted-foreground">
              We work with leading technology platforms to deliver the best results for our clients.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-8 cursor-pointer">
            {[
              'Meblevo', 
              'DivineHomes', 
              'HubSpot', 
              'Shopify', 
              'HavenCraftInteriors', 
              "Bombay",
              "GrowPluse"
            ].map((partner) => (
              <div key={partner} className="text-2xl font-bold text-purple-600  transition-colors duration-300">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Ready to Work With Us Section - Commented Out
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help you achieve your digital marketing goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>
  )
}