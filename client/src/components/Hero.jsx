import { useEffect } from 'react';
import { FaDownload, FaPaperPlane } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiTwitter, FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import CV from '../assets/aqib_cv.pdf'

const Hero = () => {
  // Animate floating elements
  useEffect(() => {
    // Animate tech icons
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
      const startX = Math.random() * 80;
      const startY = Math.random() * 80;
      const duration = 10 + Math.random() * 10;
      const delay = Math.random() * 5;
      const moveX = (Math.random() - 0.5) * 40;
      const moveY = (Math.random() - 0.5) * 40;
      
      icon.style.left = `${startX}%`;
      icon.style.top = `${startY}%`;
      icon.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      icon.style.setProperty('--move-x', `${moveX}px`);
      icon.style.setProperty('--move-y', `${moveY}px`);
    });

    // Animate stars
    const stars = document.querySelectorAll('.floating-star');
    stars.forEach((star, index) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const duration = 8 + Math.random() * 12;
      const delay = Math.random() * 5;
      const moveX = (Math.random() - 0.5) * 30;
      const moveY = (Math.random() - 0.5) * 30;
      const scale = 0.5 + Math.random() * 0.5;
      const opacity = 0.2 + Math.random() * 0.5;
      
      star.style.left = `${startX}%`;
      star.style.top = `${startY}%`;
      star.style.transform = `scale(${scale})`;
      star.style.opacity = opacity;
      star.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      star.style.setProperty('--move-x', `${moveX}px`);
      star.style.setProperty('--move-y', `${moveY}px`);
    });

    // Animate SVG morphing
    const svgs = document.querySelectorAll('.morphing-svg path');
    svgs.forEach((path, index) => {
      path.style.animation = `morph ${10 + index * 2}s ease-in-out infinite alternate`;
    });
  }, []);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center !pt-40 md:!pt-20 !pb-16 bg-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating tech icons */}
        <FiCode className="floating-icon absolute text-blue-400 text-2xl opacity-60" />
        <FiDatabase className="floating-icon absolute text-purple-400 text-2xl opacity-60" />
        <FiCpu className="floating-icon absolute text-green-400 text-2xl opacity-60" />
        <FiLayers className="floating-icon absolute text-yellow-400 text-2xl opacity-60" />
        <FiGithub className="floating-icon absolute text-red-400 text-2xl opacity-60" />
        <FiLinkedin className="floating-icon absolute text-indigo-400 text-2xl opacity-60" />
        <FiTwitter className="floating-icon absolute text-pink-400 text-2xl opacity-60" />
        
        {/* Floating stars */}
        {[...Array(20)].map((_, i) => (
          <FaStar 
            key={i}
            className="floating-star absolute text-yellow-300 text-xs opacity-60"
          />
        ))}
        
        {/* Multiple SVG background patterns with morphing animation */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full morphing-svg">
            <path
              fill="#6366F1"
              d="M45.6,-59.3C58.8,-49.3,68.8,-33.5,72.2,-16.2C75.6,1.1,72.4,19.9,61.3,34.8C50.2,49.7,31.2,60.7,10.8,67.3C-9.7,73.9,-31.6,76.1,-47.8,66.5C-64,56.9,-74.5,35.5,-75.8,14.4C-77.1,-6.7,-69.3,-27.4,-55.3,-38.8C-41.3,-50.2,-21.1,-52.2,-1.5,-51.1C18.1,-50,36.2,-45.7,45.6,-59.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 opacity-15">
          <svg viewBox="0 0 200 200" className="w-full h-full morphing-svg">
            <path
              fill="#10B981"
              d="M39.2,-53.6C52.8,-44.9,67.3,-37.2,73.3,-24.8C79.3,-12.3,76.9,4.9,69.6,19.3C62.3,33.7,50.2,45.4,36.1,54.1C22,62.8,5.9,68.5,-8.5,66.8C-22.9,65.1,-35.8,56,-47.2,45.3C-58.6,34.6,-68.5,22.3,-71.4,8.1C-74.3,-6.1,-70.2,-22.2,-60.2,-34.5C-50.2,-46.8,-34.3,-55.3,-19.9,-63.5C-5.5,-71.7,7.5,-79.6,19.4,-76.3C31.3,-73,42.1,-58.5,39.2,-53.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        
        <div className="absolute right-1/4 top-1/4 w-1/3 h-1/3 opacity-25">
          <svg viewBox="0 0 200 200" className="w-full h-full morphing-svg">
            <path
              fill="#EC4899"
              d="M52.8,-59.1C66.1,-49.3,73.1,-30.7,72.8,-13.5C72.5,3.7,64.9,19.5,53.1,30.9C41.3,42.3,25.3,49.3,8.1,55.9C-9.2,62.5,-27.7,68.7,-40.7,61.9C-53.7,55.1,-61.1,35.3,-64.9,14.8C-68.7,-5.7,-68.9,-26.9,-58.2,-41.1C-47.5,-55.3,-25.9,-62.5,-3.8,-60.2C18.3,-57.9,36.6,-46.1,52.8,-59.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Additional animated circle */}
        <div className="absolute left-1/4 top-3/4 w-1/4 h-1/4 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full morphing-svg">
            <path
              fill="#F59E0B"
              d="M31.9,-42.8C43.3,-34.1,55.8,-26.3,59.2,-15.3C62.6,-4.3,56.9,9.9,48.2,22.3C39.5,34.7,27.8,45.4,14.2,54.2C0.6,63,-14.9,69.9,-26.8,64.5C-38.7,59.1,-47,41.4,-53.2,24.9C-59.4,8.4,-63.5,-6.9,-58.9,-19.9C-54.3,-32.9,-41,-43.6,-27.8,-51.8C-14.6,-60,-1.5,-65.7,10.3,-63.6C22.1,-61.5,20.5,-51.5,31.9,-42.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="container !mx-auto !px-4 z-10">
        <div className="flex flex-col md:flex-row  items-center">
          {/* Left side - Content */}
          <div className="md:w-1/2 text-center md:text-left !mb-12 md:!mb-0 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white !mb-4">
              Hi, I'm <span className="text-blue-400">Aqib Khan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 !mb-6">
              <span className="text-gradient">DIGITAL  MARKETER</span>
            </h2>
            <p className="text-gray-300 !mb-8 max-w-lg !mx-auto md:!mx-0">
              Performed keyword research and analyzed SEO performance of webpages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={CV}
                download
                className="bg-blue-600 hover:bg-blue-700 text-white !px-6 !py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                <FaDownload /> Download CV
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 !px-6 !py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/20"
              >
                <FaPaperPlane /> Message Me
              </a>
            </div>
          </div>

          {/* Right side - Image with animated border */}
          <div className="md:w-1/2 relative flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated borders */}
              <div className="absolute inset-0 border-4 border-blue-400 rounded-full animate-spin-slow opacity-60"></div>
              <div className="absolute inset-4 border-4 border-purple-400 rounded-full animate-spin-slow-reverse opacity-60"></div>
              <div className="absolute inset-8 border-4 border-pink-400 rounded-full animate-spin-medium opacity-60"></div>
              
              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-gray-100 border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(var(--move-x), var(--move-y)) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes morph {
          0% {
            d: path("M45.6,-59.3C58.8,-49.3,68.8,-33.5,72.2,-16.2C75.6,1.1,72.4,19.9,61.3,34.8C50.2,49.7,31.2,60.7,10.8,67.3C-9.7,73.9,-31.6,76.1,-47.8,66.5C-64,56.9,-74.5,35.5,-75.8,14.4C-77.1,-6.7,-69.3,-27.4,-55.3,-38.8C-41.3,-50.2,-21.1,-52.2,-1.5,-51.1C18.1,-50,36.2,-45.7,45.6,-59.3Z");
          }
          50% {
            d: path("M39.2,-53.6C52.8,-44.9,67.3,-37.2,73.3,-24.8C79.3,-12.3,76.9,4.9,69.6,19.3C62.3,33.7,50.2,45.4,36.1,54.1C22,62.8,5.9,68.5,-8.5,66.8C-22.9,65.1,-35.8,56,-47.2,45.3C-58.6,34.6,-68.5,22.3,-71.4,8.1C-74.3,-6.1,-70.2,-22.2,-60.2,-34.5C-50.2,-46.8,-34.3,-55.3,-19.9,-63.5C-5.5,-71.7,7.5,-79.6,19.4,-76.3C31.3,-73,42.1,-58.5,39.2,-53.6Z");
          }
          100% {
            d: path("M52.8,-59.1C66.1,-49.3,73.1,-30.7,72.8,-13.5C72.5,3.7,64.9,19.5,53.1,30.9C41.3,42.3,25.3,49.3,8.1,55.9C-9.2,62.5,-27.7,68.7,-40.7,61.9C-53.7,55.1,-61.1,35.3,-64.9,14.8C-68.7,-5.7,-68.9,-26.9,-58.2,-41.1C-47.5,-55.3,-25.9,-62.5,-3.8,-60.2C18.3,-57.9,36.6,-46.1,52.8,-59.1Z");
          }
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin 25s linear infinite reverse;
        }
        
        .animate-spin-medium {
          animation: spin 15s linear infinite;
        }
        
        .text-gradient {
          background: linear-gradient(90deg, #3B82F6, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
        }
      `}</style>
    </section>
  );
};

export default Hero;