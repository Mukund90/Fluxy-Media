import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MapPin, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    title: "Specialization",
    description:
      "We only work with interior designers. This focus allows us to deeply understand your market and deliver better results.",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no confusing reports. You'll always know exactly where your money is going and what results it's generating.",
  },
  {
    title: "Results-Driven",
    description:
      "We measure success by one thing: qualified leads that convert into paying clients for your business.",
  },
  {
    title: "Partnership",
    description:
      "We're not just a vendor. We become an extension of your team, invested in your long-term growth.",
  },
];

const milestones = [
  { number: "2022", label: "Founded in Mumbai" },
  { number: "30+", label: "Interior Design Clients" },
  { number: "₹10Cr+", label: "Revenue Generated for Clients" },
  { number: "2", label: "Countries Served (India & UAE)" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="gradient-text">Marketing Agency</span> Built
              for Interior Designers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a Mumbai-based digital marketing agency that exclusively
              helps interior designers attract high-quality clients.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fluxy Media was born from a simple observation: interior
                  designers were struggling to find quality leads online.
                  Traditional marketing agencies didn't understand the interior
                  design industry, and generic approaches weren't working.
                </p>
                <p>
                  We decided to change that. By focusing exclusively on interior
                  designers, we've developed a deep understanding of what makes
                  homeowners choose one designer over another, and how to reach
                  them at the perfect moment.
                </p>
                <p>
                  Today, we've helped over 30+ interior design studios across
                  India and UAE generate consistent, high-quality leads that
                  convert into profitable projects.
                </p>
              </div>
            </div>
            <div className="gradient-border rounded-2xl p-8 bg-card">
              <div className="grid grid-cols-2 gap-6">
                {milestones.map((milestone) => (
                  <div key={milestone.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {milestone.number}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {milestone.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              To become the growth partner of choice for interior designers
              across India and UAE, helping them build thriving businesses
              through strategic digital advertising.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-glass p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold">Based in Mumbai</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Local Expertise,{" "}
                <span className="gradient-text">Global Reach</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                While we're headquartered in Mumbai's Santacruz East, we serve
                interior designers across India and the UAE. Our remote-first
                approach means we can work with you regardless of your location.
              </p>
              <div className="flex items-center gap-4">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  Serving: India & UAE
                </span>
              </div>
            </div>
            <div className="card-glass p-8 text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img
                  src="/fluxy_logo.png"
                  alt="Fluxy Media Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">Fluxy Media</h3>
              <p className="text-muted-foreground mb-4">
                Santacruz(E), Mumbai 400055
              </p>
              <p className="text-sm text-muted-foreground">
                business@fluxymedia.com
              </p>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Let's Grow Your Interior Design Business Together
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation to see how we can help you attract more
              high-quality clients.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-purple-dark hover:bg-white/90 text-lg px-8 py-6 font-semibold">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
