import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const clients = [
  "Gruhaseema Interiors",
  "Shree Interior Designs",
  "Studio Core Design",
  "Platinum Design",
  "Bombay Engineers",
  "Interior Vibes",
];

const stats = [
  { value: 100, suffix: "+", label: "Leads Generated" },
  { value: 11, suffix: "", label: "Deals Closed" },
  { value: 45, prefix: "₹", suffix: "L+", label: "Revenue Generated" },
  { value: 15, suffix: "+", label: "Happy Clients" },
];

const features = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach homeowners actively looking for interior design services in your city.",
  },
  {
    icon: Zap,
    title: "Done-For-You System",
    description: "Ads + Landing Pages + Lead Tracking. We handle everything.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Our clients see 3-5X ROI within the first 90 days of working with us.",
  },
  {
    icon: Users,
    title: "Industry Experts",
    description: "We exclusively work with interior designers. We know your market.",
  },
];

const testimonials = [
  {
    quote: "Fluxy Media transformed our lead generation. We closed 4 projects worth ₹12L in the first month!",
    author: "Shree Interior Designs",
    role: "Mumbai",
  },
  {
    quote: "Finally, an agency that understands interior designers. The quality of leads is exceptional.",
    author: "Gruhaseema Interiors",
    role: "Pune",
  },
  {
    quote: "Professional team, transparent reporting, and real results. Highly recommended!",
    author: "Studio Core Design",
    role: "Bangalore",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark/20 via-background to-background" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Exclusively for Interior Designers
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Interior Design Business with{" "}
              <span className="gradient-text">Meta Ads</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop wasting money on generic marketing. Get high-quality leads from 
              homeowners actively looking for interior design services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-6">
                  Get Free Saturday Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/results">
                <Button variant="outline" className="text-lg px-8 py-6 border-border hover:bg-secondary">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container-custom">
          <p className="text-center text-muted-foreground mb-8">
            Trusted by leading interior design studios
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map((client) => (
              <span
                key={client}
                className="text-lg font-semibold text-muted-foreground/70 hover:text-foreground transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Interior Designers <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another marketing agency. We specialize exclusively 
              in growing interior design businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-glass p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="gradient-border rounded-xl p-6 bg-card"
              >
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="gradient-bg rounded-2xl p-8 md:p-16 text-center glow-purple">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Ready to Grow Your Interior Design Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book your free Saturday audit call and discover how we can help you 
              attract more high-quality clients.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-purple-dark hover:bg-white/90 text-lg px-8 py-6 font-semibold">
                Book Free Audit Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
