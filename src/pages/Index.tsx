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
  { value: 10000, suffix: "+", label: "Leads Generated" },
  // { value: 11, suffix: "", label: "Deals Closed" },
  { value: 10, prefix: "₹", suffix: "Cr+", label: "Revenue Generated" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "x", label: "Avg. ROI" },
];

const features = [
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Reach homeowners actively looking for interior design services in your city.",
  },
  {
    icon: Zap,
    title: "Done-For-You System",
    description:
      "Brand Building + Social Media Marketing + Lead Generation. We handle everything.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Our clients see 3-5X ROI within the first 90 days of working with us.",
  },
  {
    icon: Users,
    title: "Industry Experts",
    description:
      "We exclusively work with interior designers. We know your market.",
  },
];

const testimonials = [
  {
    quote:
      "The experience of collaborating with Fluxy Media has been truly remarkable. As a Mumbai-based interior designer, I initially faced challenges in acquiring high-quality social media leads. However, with the support of their dedicated team, my meta ad campaigns were expertly developed and managed, resulting in over 100 leads within just one month. The team's transparency and encouragement throughout the process have been invaluable, making this partnership one of the most rewarding aspects of my professional journey.",
    author: "Shree Interior Designs",
    // role: "Mumbai",
  },
  {
    quote:
      "I faced significant challenges with slow growth and unpredictable client flow in my interior design business. However, after collaborating with Fluxy Media, everything transformed for the better. I am now consistently generating leads and successfully closing projects, which has brought a newfound sense of security to my business. The expertise provided by Fluxy Media has made a remarkable difference, and I highly recommend their services.",
    author: "Gruhaseema Interiors",
    // role: "Pune",
  },
  {
    quote:
      "I invested a significant amount of time and resources attempting to attract clients, but most inquiries I received were not serious. Many individuals would request quotes without any intention of following through, merely exploring their options. However, after collaborating with Fluxy Media, everything changed. They not only provided leads but also connected me with genuine prospects who were eager to begin working together. In the past three months, I have successfully closed eleven deals and am currently in discussions with two additional clients.",
    author: "Studio Core Design",
    // role: "Bangalore",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark/20 via-background to-background" />

        {/* Interior design motion video */}
        <div className="absolute inset-0 opacity-30">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/interior.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Exclusively for Interior Designers
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Interior Design Business with{" "}
              <span className="gradient-text">Fluxy Media</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop wasting money on generic marketing. Get high-quality leads
              from homeowners actively looking for interior design services &
              grow your brand with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-6">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/results">
                <Button
                  variant="outline"
                  className="text-lg px-8 py-6 border-border hover:bg-secondary"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-border bg-card/50 overflow-hidden">
        <div className="container-custom">
          <p className="text-center text-muted-foreground mb-8">
            Trusted by leading Interior Design firms
          </p>

          <div className="relative">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />
            <div className="flex w-max animate-scroll gap-28 items-center">
              {[
                "client1.png",
                "client2.png",
                "client3.png",
                "client4.png",
                "client5.png",
                "client6.png",
                "client7.png",
                "client8.png",
                "client9.png",
                "client10.png",
                // repeat for seamless loop
                "client1.png",
                "client2.png",
                "client3.png",
                "client4.png",
                "client5.png",
                "client6.png",
                "client7.png",
                "client8.png",
                "client9.png",
                "client10.png",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="w-40 h-24 md:w-48 md:h-28 flex items-center justify-center"
                >
                  <img
                    src={`/clients/${logo}`}
                    alt="Client logo"
                    className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
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
              Why Interior Designers{" "}
              <span className="gradient-text">Choose Us</span>
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
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {/* {testimonial.role} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="rounded-2xl p-8 md:p-16 text-center glow-purple
bg-gradient-to-br from-purple-800 via-purple-900 to-[#12001f]"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Ready to Grow Your Interior Design Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book your free audit call and discover how we can help you attract
              more high-quality clients & grow your brand.
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
