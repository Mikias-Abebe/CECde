import Link from 'next/link';
import { MapPin, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#182736] text-slate-100 pt-12 pb-8 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Church Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide">
              Christ's Evangelical Church in Munich
            </h3>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                <span>Rudolf-Diesel-Straße 985221 Dachau-Ost (München)</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a 
                  href="mailto:info@cecmunich.de" 
                  className="hover:text-amber-400 transition-colors"
                >
                  info@cecmunich.de
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/youth" className="hover:text-amber-400 transition-colors">
                  CEC Youth
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-amber-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/rediet" className="hover:text-amber-400 transition-colors">
                  Rediet
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide">
              Connect With Us
            </h3>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-1">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@christsevangelicalchurchin4519" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-slate-300 pt-2 font-medium">
              Join us for worship every Sunday at 11:00 AM
            </p>
          </div>

        </div>

        {/* Horizontal Divider & Copyright */}
        <div className="border-t border-slate-700/60 pt-6 text-center text-xs text-slate-400 space-y-1">
          <p>© {currentYear} Christ's Evangelical Church in Munich. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}