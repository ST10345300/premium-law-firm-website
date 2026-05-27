import { Link } from "react-router";
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Scale className="size-8 text-bronze" strokeWidth={1.5} />
              <span className="text-2xl font-serif text-white tracking-tight">BLACKWELL ATTORNEYS</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Transforming legal complexities into strategic opportunities. Exceptional, personalized legal services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-bronze transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bronze transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bronze transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bronze transition-colors">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-bronze transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-bronze transition-colors">Our Team</Link></li>
              <li><Link to="/services" className="hover:text-bronze transition-colors">Our Services</Link></li>
              <li><Link to="/practice" className="hover:text-bronze transition-colors">Practice Areas</Link></li>
              <li><Link to="/cases" className="hover:text-bronze transition-colors">Cases</Link></li>
              <li><Link to="/clients" className="hover:text-bronze transition-colors">Our Clients</Link></li>
              <li><Link to="/contact" className="hover:text-bronze transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/practice" className="hover:text-bronze transition-colors">Corporate Law</Link></li>
              <li><Link to="/practice" className="hover:text-bronze transition-colors">Family Law</Link></li>
              <li><Link to="/practice" className="hover:text-bronze transition-colors">Intellectual Property</Link></li>
              <li><Link to="/practice" className="hover:text-bronze transition-colors">Criminal Defense</Link></li>
              <li><Link to="/practice" className="hover:text-bronze transition-colors">View All Areas</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-5 text-bronze flex-shrink-0 mt-0.5" />
                <span>123 Legal Street, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-5 text-bronze flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-bronze transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-5 text-bronze flex-shrink-0" />
                <a href="mailto:contact@blackwellattorneys.com" className="hover:text-bronze transition-colors">
                  contact@blackwellattorneys.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Blackwell Attorneys. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-bronze transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-bronze transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
