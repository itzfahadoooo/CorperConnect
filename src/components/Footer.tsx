import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "@/assets/logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#228B22] text-white">
      <div className="container mx-auto px-4 pt-10 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-16">
                <img src={logo} alt="" />
              </div>

              <span className="font-bold text-2xl">CorperConnect</span>
            </div>
            <p className="text-emerald-100 text-sm mb-4">
              Connecting corps members to safe housing and supportive
              communities across Nigeria.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/nysc-guidelines"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  NYSC Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/housing-guide"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Housing Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/safety-tips"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/community-rules"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Community Rules
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-emerald-100">
                <Mail size={16} />
                <span>foyindolapo@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-100">
                <Phone size={16} />
                <span>+234 708 6416 510</span>
              </li>
              <li className="flex items-start gap-2 text-emerald-100">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>NYSC Headquarters, Maitama, Abuja, Nigeria</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2 text-sm">
                Subscribe to our newsletter
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded text-black bg-white text-sm flex-1 outline-none focus:ring-2 focus:ring-emerald-800 transition-colors"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-white text-emerald-800 hover:bg-emerald-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-emerald-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-emerald-100 mb-4 md:mb-0">
            &copy; {currentYear} CorperConnect. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs text-emerald-100 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-xs text-emerald-100 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              className="text-xs text-emerald-100 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
