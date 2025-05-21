import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const socialLinks = [
  { name: 'Twitter', icon: <FaTwitter className="!text-2xl !text-cyan-400" />, url: 'https://twitter.com' },
  { name: 'LinkedIn', icon: <FaLinkedin className="!text-2xl !text-blue-400" />, url: 'https://linkedin.com' },
  { name: 'GitHub', icon: <FaGithub className="!text-2xl !text-gray-200" />, url: 'https://github.com' },
  { name: 'Instagram', icon: <FaInstagram className="!text-2xl !text-pink-400" />, url: 'https://instagram.com' },
];

const Footer = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate animated background particles
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 5,
      opacity: Math.random() * 0.4 + 0.2,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <footer className="relative bg-gray-950 !py-12 !px-6 overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            fontSize: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            color: particle.color,
          }}
          animate={{
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 40 - 20],
            opacity: [particle.opacity, particle.opacity * 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <FaCircle />
        </motion.div>
      ))}

      <div className="container !mx-auto relative z-10 text-center">
        {/* Name and Profession */}
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-white !mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Aqib Khan
        </motion.h3>
        <motion.p
          className="text-lg text-gray-300 !mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Digital Marketing & SEO Specialist
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center !space-x-6 !mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-transparent
                         transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)',
              }}
            >
              <div className="absolute inset-0 rounded-full neon-glow"></div>
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright Message */}
        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Aqib Khan. All rights reserved.
        </motion.p>
      </div>

      {/* CSS for Neon Glow Effect */}
      <style jsx>{`
        .neon-glow {
          border-image: linear-gradient(45deg, #22d3ee, #ec4899, #f59e0b) 1;
          animation: neonPulse 2s infinite alternate;
        }

        @keyframes neonPulse {
          0% {
            box-shadow: 0 0 8px rgba(34, 211, 238, 0.4), 0 0 12px rgba(236, 72, 153, 0.3);
          }
          100% {
            box-shadow: 0 0 12px rgba(34, 211, 238, 0.7), 0 0 18px rgba(236, 72, 153, 0.5);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;