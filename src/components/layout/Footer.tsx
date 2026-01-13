import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center font-bold text-xl text-primary-foreground">
                F
              </div>
              <span className="text-xl font-bold">
                Fluxy<span className="gradient-text">Media</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              India's leading Meta Ads agency exclusively for interior designers. 
              We help you attract high-quality leads and grow your business.
            </p>
            <p className="text-sm text-muted-foreground">
              Serving Interior Designers in India & UAE
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919833427316" className="hover:text-primary transition-colors">
                  +91 9833427316
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:aditya@fluxymedia.com" className="hover:text-primary transition-colors">
                  aditya@fluxymedia.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Santacruz(E), Mumbai 400055</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fluxy Media. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Exclusively for Interior Designers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
