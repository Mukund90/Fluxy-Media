import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9833427316",
    href: "tel:+919833427316",
    description: "Call us directly",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 9833427316",
    href: "https://wa.me/919833427316?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20your%20Meta%20Ads%20services%20for%20interior%20designers.",
    description: "Quick chat on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "business@fluxymedia.com",
    href: "mailto:business@fluxymedia.com",
    description: "Send us an email",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Santacruz(E), Mumbai 400055",
    href: null,
    description: "Our office location",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to grow your interior design business? Get in touch with us
              for a free audit call.
            </p>
          </div>
        </div>
      </section>

      {/* Free Audit Banner */}
      <section className="py-8">
        <div className="container-custom">
          <div className="gradient-bg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 glow-purple">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-foreground">
                  Free Audit
                </h2>
                <p className="text-primary-foreground/80">
                  Book your complimentary audit session
                </p>
              </div>
            </div>
            <a href="tel:+919833427316">
              <Button className="bg-white text-purple-dark hover:bg-white/90 font-semibold px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9833427316
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Choose your preferred way to reach us. We typically respond
                within 24 hours on weekdays.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="card-glass p-4 flex items-center gap-4 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Emails */}
              <div className="mt-8 card-glass p-6">
                <h3 className="font-semibold mb-4">Our Team</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                      A
                    </div>
                    <div>
                      <p className="font-medium">Aditya</p>
                      <a
                        href="mailto:aditya@fluxymedia.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        aditya@fluxymedia.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                      R
                    </div>
                    <div>
                      <p className="font-medium">Ravi</p>
                      <a
                        href="mailto:ravi@fluxymedia.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        ravi@fluxymedia.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="gradient-border rounded-2xl p-6 md:p-8 bg-card">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 block"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium mb-2 block"
                    >
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98XXX XXXXX"
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium mb-2 block"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium mb-2 block"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your interior design studio"
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium mb-2 block"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your business and goals..."
                    rows={4}
                    className="bg-muted border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4">
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2">What is the Free Audit?</h3>
                <p className="text-muted-foreground">
                  It's a complimentary 30-minute call where we analyze your
                  current marketing efforts and show you opportunities for
                  improvement. No obligations, just value.
                </p>
              </div>
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2">
                  How quickly can I see results?
                </h3>
                <p className="text-muted-foreground">
                  Most of our clients start seeing leads within the first 2
                  weeks. Meaningful results (closed deals) typically come within
                  60-90 days.
                </p>
              </div>
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2">
                  Do you work with designers outside India?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We currently work with interior designers in India and
                  UAE. Our remote-first approach allows us to serve clients
                  anywhere.
                </p>
              </div>
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2">
                  What's included in your service?
                </h3>
                <p className="text-muted-foreground">
                  Everything: ad campaign management, landing page design, lead
                  tracking dashboard, weekly reports, and ongoing optimization.
                  It's a complete done-for-you system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
