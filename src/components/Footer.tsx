import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Warehouse } from 'lucide-react';
import { generateWhatsAppLink } from '@/data/products';
import logo from '../images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-30 h-30 rounded-full flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <span className="font-bold text-xl">N-Square Enterprises</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Bringing <span style={{ color: "Green" }}>Authentic Karaikudi</span> village taste to Chennai homes since over a decade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'BigShopper', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <Warehouse className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>RedHills, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Office: +91 9841324010</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Phone: +91 9444711147</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>nsquareenterprises07@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Order Now</h4>
            <p className="text-background/70 text-sm mb-4">
              Quick & easy ordering via WhatsApp. Just one click away!
            </p>
            <a
              href={generateWhatsAppLink("Hi! I'm interested in ordering groceries from N-Square Enterprises.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} N-Square Enterprises. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Made with 💚 in Chennai
          </p>
          <p className="text-background/50 text-sm">
            Designed By 💚 Surya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
