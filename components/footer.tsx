import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Linkedin, Twitter, Zap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              {/* <Zap className="h-6 w-6 text-primary" /> */}
              <span className="font-bold text-lg text-purple-600">FLUXY MEDIA</span>
            </Link>
            <p className="text-muted-foreground">
              Transforming businesses with data-driven digital marketing strategies that deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/fluxy_media?igsh=MXJuODJxd2ZhZjl1bQ==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-purple-600">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/seo" className="text-muted-foreground hover:text-foreground transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services/ppc" className="text-muted-foreground hover:text-foreground transition-colors">Lead Generation Campaigns</Link></li>
              <li><Link href="/services/social-media" className="text-muted-foreground hover:text-foreground transition-colors">Social Media Managemnt</Link></li>
              <li><Link href="/services/content" className="text-muted-foreground hover:text-foreground transition-colors">Content Creation</Link></li>
              <li><Link href="/services/web-design" className="text-muted-foreground hover:text-foreground transition-colors">Website Design & Development</Link></li>
              <li><Link href="/services/graphic-design" className="text-muted-foreground hover:text-foreground transition-colors">Graphic Design</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-purple-600">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services/seo" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Career</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-purple-600">Subscribe</h3>
            <p className="text-muted-foreground mb-4">Stay updated with our latest insights and news.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" className="max-w-[220px]" />
              <Button className='bg-purple-600'>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fluxy Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer