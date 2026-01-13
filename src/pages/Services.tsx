import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Target,
  Palette,
  BarChart3,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const problems = [
  {
    icon: AlertCircle,
    title: "Irrelevant Inquiries",
    description:
      "Getting leads who can't afford your services or aren't serious buyers.",
  },
  {
    icon: AlertCircle,
    title: "Wasted Ad Budgets",
    description:
      "Spending money on ads that don't generate any meaningful results.",
  },
  {
    icon: AlertCircle,
    title: "No Brand Building",
    description:
      "Lack of a clear brand strategy and consistent brand identity.",
  },
  {
    icon: AlertCircle,
    title: "Missing Lead Nurturing",
    description: "Leads go cold because there's no follow-up system in place.",
  },
];

const process = [
  {
    step: "01",
    title: "Strategy & Digital Foundation",
    description:
      "We analyze your ideal client profile and create hyper-targeted audience segments. We identify homeowners in your service area who are actively looking for interior design services. Plus we build or optimize your website to showcase your Portfolio and convert visitors into Leads",
    icon: Target,
  },
  {
    step: "02",
    title: "Content Creation & Ad Campaigns",
    description:
      "Our team creates stunning Site Shoot Photography of your Projects and scroll-stopping ad creatives and compelling copy that resonates with your target audience. We launch targeted Meta Ads campaign and Manage your Social Media to consistently showcase your best work to attract quality leads.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Lead Optimization & Nuturing",
    description:
      "We continuously optimize your campaigns for lower cost-per-lead while maintaining quality. Plus, we set up automated follow-up sequences to nurture leads, and provide ongoing social media management to keep your Brand top-of-mind with potential Clients.",
    icon: BarChart3,
  },
];

const included = [
  "Meta Ads Campaign Management",
  "Custom Website Design & Development",
  "Lead Tracking Dashboard",
  "Weekly Performance Reports",
  "Audience Research & Targeting",
  "Ad Creative Design & Copywriting",
  "A/B Testing & Optimization",
  "WhatsApp/Email Follow-up Setup",
  "Professional Site Shoots & Photography",
  "Portfolio Showcase Optimization",
  "Social Media Management (Instagram/Facebook)",
  "Content Calendar & Posting",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete done-for-you system designed specifically for interior
              designers who want more high-quality clients.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Problems We <span className="gradient-text">Solve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sound familiar? These are the challenges interior designers face
              with traditional marketing approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="card-glass p-6 border-destructive/30"
              >
                <problem.icon className="w-8 h-8 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">3-Step Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven system that consistently delivers high-quality leads for
              interior designers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
                )}
                <div className="gradient-border rounded-2xl p-8 bg-card relative z-10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Everything you need to attract premium clients and build a
                powerful online presence. No hidden fees, no surprises. Just
                results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl p-8 md:p-16 text-center glow-purple
bg-gradient-to-br from-purple-800 via-purple-900 to-[#12001f]"
            >
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Done-For-You System
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Ads + Brand Building + Website + Photography
              </p>
              <div className="text-5xl font-bold text-primary-foreground mb-2">
                All-in-One
              </div>
              <p className="text-primary-foreground/60 text-sm">
                No need to hire multiple agencies, photographers or freelancers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Interior Designers{" "}
                <span className="gradient-text">Choose Fluxy Media</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="card-glass p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Industry Specialization
                    </h3>
                    <p className="text-muted-foreground">
                      We only work with interior designers. This means we
                      understand your market, your clients, and what messaging
                      works best.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-glass p-6">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Transparent Reporting
                    </h3>
                    <p className="text-muted-foreground">
                      Weekly reports with clear metrics. You'll always know
                      exactly how your campaigns are performing and where your
                      money is going.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-glass p-6">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Performance-Focused
                    </h3>
                    <p className="text-muted-foreground">
                      We optimize for qualified leads, not vanity metrics. Our
                      goal is to help you close more projects and grow your
                      revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free audit call. We'll analyze your current marketing
              and show you exactly how we can help you grow.
            </p>
            <Link to="/contact">
              <Button className="btn-primary text-lg px-8 py-6">
                Book Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
