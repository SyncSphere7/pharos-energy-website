import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Global Operations', path: '/operations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A2540]/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8952E] p-1.5 sm:p-2 rounded">
              <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A2540]" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-white font-bold text-lg sm:text-xl tracking-tight">PHAROS ENERGY</div>
              <div className="text-[#D4AF37] text-xs tracking-widest">PLC</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'bg-[#D4AF37] text-[#0A2540]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'bg-[#D4AF37] text-[#0A2540]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
