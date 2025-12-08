import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Quality', path: '/quality' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-skh-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm h-20">
        <div className="max-w-[1200px] mx-auto px-4 h-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <div className="text-2xl font-black text-skh-blue tracking-tighter border-2 border-skh-blue p-1">
              SKH
              <span className="text-skh-red ml-1">AUTO</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 
                      ${location.pathname === item.path ? 'text-skh-blue border-b-2 border-skh-red pb-1' : 'text-skh-dark hover:text-skh-blue'}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-skh-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 shadow-xl' : 'max-h-0'}`}>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-6 py-4 text-center font-bold uppercase text-sm border-b border-gray-100 
                    ${location.pathname === item.path ? 'bg-gray-50 text-skh-blue' : 'text-skh-dark'}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-skh-dark text-white pt-12 pb-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-700 pb-8">
            {/* Brand Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-xl font-black text-white tracking-tighter mb-4 border-2 border-white p-1 inline-block">
                SKH<span className="text-skh-red ml-1">AUTO</span>
              </div>
              <p className="text-sm text-gray-400">
                Global excellence in automotive manufacturing. Engineering the future of mobility with precision and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-skh-red font-bold mb-4 uppercase">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-skh-blue transition-colors">About Us</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-skh-blue transition-colors">Products</Link></li>
                <li><Link to="/quality" className="text-gray-300 hover:text-skh-blue transition-colors">Quality</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-skh-blue transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h4 className="text-skh-red font-bold mb-4 uppercase">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-center md:justify-start gap-2">
                    <Mail size={16} className="text-skh-blue"/>
                    <a href="mailto:info@skhautomotive.in" className="text-gray-300 hover:text-white">info@skhautomotive.in</a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                    <Phone size={16} className="text-skh-blue"/>
                    <a href="tel:+911234567890" className="text-gray-300 hover:text-white">+91 123 456 7890</a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-4 mt-4">
                    <a href="#" className="hover:text-skh-blue"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-skh-blue"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-skh-blue"><Linkedin size={20} /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} SKH Automotive Pvt. Ltd. | All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;