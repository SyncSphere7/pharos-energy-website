import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src="/PHAROS_ENERGY_PLC_LOGO-transparent.png" 
                alt="Pharos Energy PLC Logo" 
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              A leading international energy company specializing in petroleum products and water materials.
              Delivering excellence in global trade and supply chain solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/operations" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                  Global Operations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>27/28 Eastcastle Street, London, W1W 8DH, United Kingdom</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="break-all">info@pharousenergy-plc.uk</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>+447377469494</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Pharos Energy PLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
