import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Match this with the transition duration
    } else {
      // Opening
      setIsMobileMenuOpen(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 10);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialIcons = [
    { icon: <FaGithub />, href: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter />, href: 'https://twitter.com/yourusername' },
    { icon: <FaInstagram />, href: 'https://instagram.com/yourusername' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 shadow-xl !py-6' : 'bg-transparent !py-4'
      }`}
    >
      <div className="container !mx-auto !px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              Aqib<span className='text-blue-600'>Khan</span>
            </a>
          </div>

          {/* Navigation Links - Center (Desktop) */}
          <nav className="hidden md:flex items-center !space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons - Right Side (Desktop) */}
          <div className="hidden md:flex items-center !space-x-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-white !p-2 rounded-full  hover:text-blue-600 transition-colors text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FiX size={24} className="transition-transform duration-300" />
            ) : (
              <FiMenu size={24} className="transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {(isMobileMenuOpen || isAnimating) && (
          <div className={`
            md:hidden !mt-4 !pb-4
            transform transition-all duration-300 ease-in-out
            ${isMobileMenuOpen && !isAnimating ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <nav className="flex flex-col !space-y-4 !mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-blue-600 transition-colors font-medium !py-2 border-b-2 border-gray-700 "
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAnimating(true);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex !space-x-6 !mt-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-2 border-white !p-2 rounded-full hover:text-blue-600 transition-colors text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;