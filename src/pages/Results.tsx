import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const caseStudies = [
  {
    client: "Platinum Design",
    // location: "Mumbai",
    results: {
      leads: 162,
      costPerLead: 84,
      totalSpend: 8100,
      dealsWon: 36,
      revenueGenerated: 450000,
    },
    testimonial:
      "The quality of leads we received was exceptional. These were serious homeowners ready to invest in their interiors.",
    duration: "1 month",
  },
  {
    client: "Gruhaseema Interiors",
    // location: "Pune",
    results: {
      leads: 163,
      costPerLead: 80,
      totalSpend: 10050,
      dealsWon: 33,
      revenueGenerated: 680000,
    },
    testimonial:
      "Fluxy Media helped us expand our reach beyond our local area. We're now getting clients from across Maharashtra.",
    duration: "1 month",
  },
  {
    client: "Shree Interior Designs",
    // location: "Mumbai",
    results: {
      leads: 105,
      costPerLead: 96.25,
      totalSpend: 8580,
      dealsWon: 28,
      revenueGenerated: 520000,
    },
    testimonial:
      "Within the first month, we closed 2 projects. The ROI has been incredible.",
    duration: "1 month",
  },
  {
    client: "Studio Core Design",
    // location: "Bangalore",
    results: {
      leads: 112,
      costPerLead: 90,
      totalSpend: 7980,
      dealsWon: 26,
      revenueGenerated: 350000,
    },
    testimonial:
      "Professional team, transparent reporting. They really understand the interior design market.",
    duration: "1 month",
  },
];

const overallStats = [
  { label: "Total Leads Generated", value: 12000, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Revenue Generated", value: 10, prefix: "₹", suffix: "Cr+" },
  { label: "Avg. ROI", value: 10, suffix: "X" },
];

const Results = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real <span className="gradient-text">Results</span> for our
              Clients
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what we've achieved for
              interior designers just like you.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {overallStats.map((stat) => (
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

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Case <span className="gradient-text">Studies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdowns of our client campaigns with real numbers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.client}
                className="gradient-border rounded-2xl bg-card overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{study.client}</h3>
                      {/* <p className="text-muted-foreground">{study.location}</p> */}
                    </div>
                    <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {study.duration}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">
                        <AnimatedCounter end={study.results.leads} />
                      </div>
                      <p className="text-xs text-muted-foreground">Leads</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <IndianRupee className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">
                        ₹<AnimatedCounter end={study.results.costPerLead} />
                      </div>
                      <p className="text-xs text-muted-foreground">Cost/Lead</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">
                        <AnimatedCounter end={study.results.dealsWon} />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Number of Site Visits
                      </p>
                    </div>
                  </div>

                  <blockquote className="italic text-muted-foreground border-l-2 border-primary pl-4">
                    "{study.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Guarantee Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results You Can <span className="gradient-text">Count On</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every campaign we run is designed with one goal: generating
              qualified leads that convert into paying clients. We're
              transparent about our process and results because we're confident
              in what we deliver.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2">Weekly Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed performance metrics delivered to your inbox every
                  week.
                </p>
              </div>
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2">Real-Time Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Access to a live dashboard showing leads, costs, and
                  conversions.
                </p>
              </div>
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2">Monthly Strategy Calls</h3>
                <p className="text-sm text-muted-foreground">
                  Regular calls to discuss performance and optimize campaigns.
                </p>
              </div>
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
              Want Results Like These?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book your free audit call. We'll analyze your current marketing
              and show you exactly what's possible for your business.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-purple-dark hover:bg-white/90 text-lg px-8 py-6 font-semibold">
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Results;
