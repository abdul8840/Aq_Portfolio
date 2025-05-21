import { motion, useAnimation } from 'framer-motion';
import { FaStar, FaCertificate, FaGoogle, FaEnvelope, FaPenNib, FaChartLine, FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const certificates = [
  'NDMCC By NDMIT',
  'Fundamentals Of Digital Marketing',
  'Google Ads By Google',
  'SEO By HubSpot',
  'Google Analytics',
  'Google Ads',
  'Content Writing',
  'E-mail Marketing',
];

const AboutMe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bioControls = useAnimation();
  const headingControls = useAnimation();

  // Typing effect for bio
  useEffect(() => {
    bioControls.start({
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    });
  }, [bioControls]);

  // Heading animation
  useEffect(() => {
    headingControls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' },
    });
  }, [headingControls]);

  // Parallax effect for floating icons
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Array for floating icons in the background
  const floatingIcons = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    icon: [FaStar, FaCertificate, FaGoogle, FaEnvelope, FaPenNib, FaChartLine, FaSearch][Math.floor(Math.random() * 7)],
    size: Math.random() * 20 + 15,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
    color: ['text-yellow-300', 'text-blue-300', 'text-green-300', 'text-purple-300', 'text-pink-300'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="min-h-screen bg-gray-900 animate-gradient-bg !py-12 !px-4 relative overflow-hidden">
      {/* Floating Icons Background with Parallax */}
      {floatingIcons.map(({ id, icon: Icon, size, left, top, duration, delay, color }) => (
        <motion.div
          key={id}
          className={`absolute ${color} opacity-20 animate-float`}
          style={{
            fontSize: `${size}px`,
            left: `calc(${left}% + ${mousePosition.x}px)`,
            top: `calc(${top}% + ${mousePosition.y}px)`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="container !mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Left Side: Image with SVG Background, Name, and Profession */}
        <motion.div
          className="relative flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ rotateY: 10, rotateX: -10 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated SVG Background */}
            <motion.svg
              className="absolute inset-0 w-full h-full z-0"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            >
              <path
                fill="url(#gradient)"
                d="M50,-80C65,-70,78,-55,85,-38C92,-21,93,-10,90,0C87,10,80,20,70,30C60,40,47,50,33,60C19,70,4,80,-11,85C-26,90,-41,90,-55,80C-69,70,-82,55,-88,38C-94,21,-93,5,-88,-10C-83,-25,-74,-40,-62,-53C-50,-66,-35,-76,-20,-83C-5,-90,10,-94,25,-92C40,-90,55,-83,50,-80Z"
                transform="translate(100 100)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.9 }} />
                  <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.9 }} />
                </linearGradient>
              </defs>
            </motion.svg>
            {/* Image */}
            <img
              src="https://via.placeholder.com/300"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/20 z-10"
            />
          </div>
          {/* Name and Profession */}
          <motion.div
            className="!mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Aqib Khan
            </h3>
            <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500">
              SEO Specialist & Digital Marketer
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: Bio and Certificates */}
        <motion.div
          className="flex flex-col justify-center text-white !space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={headingControls}
          >
            <h2 className="text-5xl !mb-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
              About Me
            </h2>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '40%' }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            />
          </motion.div>
          <motion.p
            className="text-lg leading-relaxed max-w-xl font-light"
            animate={bioControls}
            initial={{ opacity: 0 }}
          >
            Dynamic SEO Specialist with proven success at DigiMarquee, leveraging on-page SEO and content optimization to enhance website visibility. Expert in WordPress development and link building, I excel in creating impactful digital marketing strategies while collaborating effectively with teams to drive results. Committed to staying ahead of industry trends and best practices.
          </motion.p>
          <div className="!space-y-6">
            <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500">
              Certificates
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <motion.li
                  key={index}
                  className="relative bg-white/10 backdrop-blur-lg rounded-lg !p-4 flex items-center !space-x-3 hover:bg-white/20 transition-all duration-300 group border-2 border-transparent hover:border-gradient animate-gradient-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                >
                  <FaCertificate className="text-yellow-300 text-xl group-hover:animate-spin" />
                  <span className="text-white">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;