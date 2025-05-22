import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Match transition duration
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
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialIcons = [ 
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/mohdaqibseo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/profile.php?id=100009049126856' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/aqib.khan_7?igsh=MTd2dTRmY3puYzVzNg==' },
    { icon: <FaGithub />, href: 'https://github.com/mohdaqibkhan7' },
  ];

  return (
    <motion.header
      className="fixed w-full z-50 bg-gray-800 shadow-xl !py-6 border-b-2 border-transparent neon-glow"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container !mx-auto !px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              Aqib<span className="text-blue-600">Khan</span>
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
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-white !p-2 rounded-full hover:text-blue-600 transition-colors text-xl"
                whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(37, 99, 235, 0.6)' }}
                transition={{ duration: 0.3 }}
              >
                {social.icon}
              </motion.a>
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
          <motion.div
            className="md:hidden !mt-4 !pb-4"
            initial={{ x: '100%' }}
            animate={{ x: isMobileMenuOpen && !isAnimating ? '0%' : '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col !space-y-4 !mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-blue-600 transition-colors font-medium !py-2 border-b-2 border-gray-700"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAnimating(true);
                    setTimeout(() => setIsAnimating(false), 300); // Match transition duration
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex !space-x-6 !mt-4 justify-center">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-2 border-white !p-2 rounded-full hover:text-blue-600 transition-colors text-xl"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(37, 99, 235, 0.6)' }}
                  transition={{ duration: 0.3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* CSS for Neon Glowing Border */}
      <style jsx>{`
        .neon-glow {
          border-image: linear-gradient(90deg, #22d3ee, #ec4899, #2563eb) 1;
          animation: neonPulse 3s infinite alternate;
        }

        @keyframes neonPulse {
          0% {
            box-shadow: 0 4px 8px rgba(34, 211, 238, 0.4), 0 4px 12px rgba(236, 72, 153, 0.3);
          }
          100% {
            box-shadow: 0 4px 12px rgba(34, 211, 238, 0.7), 0 4px 18px rgba(236, 72, 153, 0.5);
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;