"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      })
      setFormState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to start your next project? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-600">Let's Discuss Your Project</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below, and our team will get back to you within 24 hours to discuss how we can help you achieve your digital marketing goals.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Founder Card */}
                <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-5 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-600 bg-purple-100">
                      {/* Image commented for now */}
                      {/* <Image 
                        src="/images/founder.jpg" 
                        alt="Founder" 
                        fill
                        className="object-cover"
                      /> */}
                      <div className="h-full w-full flex items-center justify-center text-purple-600 font-bold text-lg">
                        AN
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-purple-600">Aditya Nishad</h3>
                      <p className="font-medium text-black">Founder</p>
                      <div className="mt-1 space-y-0.5">
                        <p className="flex items-center text-black text-sm">
                          <Phone className="h-3 w-3 mr-2" />
                          +91 8104982073
                        </p>
                        <p className="flex items-center text-black text-sm">
                          <Mail className="h-3 w-3 mr-2" />
                          aditya@fluxymedia.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Co-founder Card */}
                <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-5 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-600 bg-purple-100">
                      {/* Image commented for now */}
                      {/* <Image 
                        src="/images/cofounder.jpg" 
                        alt="Co-founder" 
                        fill
                        className="object-cover"
                      /> */}
                      <div className="h-full w-full flex items-center justify-center text-purple-600 font-bold text-lg">
                        RJ
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-purple-600">Ravi Jaiswal</h3>
                      <p className="font-medium text-black">Co-Founder</p>
                      <div className="mt-1 space-y-0.5">
                        <p className="flex items-center text-black text-sm">
                          <Phone className="h-3 w-3 mr-2" />
                          +91 9136850102
                        </p>
                        <p className="flex items-center text-black text-sm">
                          <Mail className="h-3 w-3 mr-2" />
                          ravi@fluxymedia.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Business Email Card */}
                <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-5 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-600 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-purple-600">Business Inquiries</h3>
                      <p className="text-black">business@fluxymedia.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className='text-purple-600'>Contact Us</CardTitle>
                  <CardDescription>
                    Fill out the form below to get started.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company Name
                        </label>
                        <Input 
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formState.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Interested In
                        </label>
                        <Select value={formState.service} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="seo">SEO Optimization</SelectItem>
                            <SelectItem value="ppc">Lead Generation Campaigns</SelectItem>
                            <SelectItem value="social">Social Media Management</SelectItem>
                            <SelectItem value="content">Content Creation</SelectItem>
                            <SelectItem value="email">Website Desigen & Development</SelectItem>
                            <SelectItem value="analytics">Graphic Design</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us about your project and goals..."
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to see results from digital marketing?",
                answer: "Results vary depending on the strategy and your industry. SEO typically takes 3-6 months to show significant results, while PPC can drive immediate traffic. We'll provide realistic timelines based on your specific goals."
              },
              {
                question: "How much should I budget for digital marketing?",
                answer: "Your budget depends on your goals, industry, and competition. We offer customized packages and we'll work with you to develop a strategy that maximizes ROI within your budget constraints."
              },
              {
                question: "Do you offer one-time projects or only ongoing services?",
                answer: "We offer both one-time projects and ongoing services. However, digital marketing typically delivers the best results with consistent, ongoing efforts. We'll recommend the approach that best suits your needs."
              },
              {
                question: "How do you measure the success of your campaigns?",
                answer: "We track key performance indicators (KPIs) aligned with your business goals, such as traffic, conversions, leads, and ROI. You'll receive regular reports with transparent data and insights on campaign performance."
              },
              {
                question: "Do you work with businesses in specific industries?",
                answer: "We work with businesses across various industries, including e-commerce, SaaS, healthcare, finance, education, and more. Our team has specialized experience in multiple sectors."
              },
              {
                question: "What makes Fluxy Media different from other agencies?",
                answer: "We combine data-driven strategies with creative execution, focusing on measurable results rather than vanity metrics. Our transparent approach, personalized service, and continuous optimization set us apart."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4  text-purple-600">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a free 30-minute consultation to discuss your goals and how we can help you achieve them.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className='bg-purple-600' size="lg" asChild>
                  <Link href="tel:+919136850102">Call Us Now</Link>
                </Button>
                <Button className="bg-purple-600 text-black" size="lg" variant="outline" asChild>
                  <Link href="mailto:aditya@fluxymedia.com?subject=Consultation Request&body=I would like to schedule a consultation for discussing my project.">
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}