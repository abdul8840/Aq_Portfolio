import { motion, useAnimation } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Image from '../assets/aqib.png';

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

  // Parallax effect for glowing particles
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

  // Array for glowing particles in the background
  const glowingParticles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 3,
    color: ['bg-blue-400', 'bg-purple-400', 'bg-pink-400'][Math.floor(Math.random() * 3)],
  }));

  return (
    <div id='about' className="min-h-screen bg-gray-900 !py-16 !px-4 relative overflow-hidden">
      {/* Glowing Particles Background with Parallax */}
      {glowingParticles.map(({ id, size, left, top, duration, delay, color }) => (
        <motion.div
          key={id}
          className={`absolute ${color} rounded-full opacity-20 blur-sm`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `calc(${left}% + ${mousePosition.x}px)`,
            top: `calc(${top}% + ${mousePosition.y}px)`,
          }}
          animate={{
            y: [0, Math.random() * 50 - 25],
            x: [0, Math.random() * 50 - 25],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}

      <div className="container !mx-auto relative z-10">
        {/* Main Content: Image and Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 !mb-12">
          {/* Profile Image */}
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
                src={Image}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/20 z-10"
              />
            </div>

            <motion.div
              className="!mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Aqib Khan
              </h3>
              <p className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500">
                Digital Marketing | SEO Specialist
              </p>
            </motion.div>
          </motion.div>

          {/* Bio, Name, and Profession */}
          <motion.div
            className="flex flex-col justify-center text-white !space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Bio Heading */}
            <motion.div
              className="relative !mb-4"
              animate={headingControls}
            >
              <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                About Me
              </h2>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '30%' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
              />
            </motion.div>

            {/* Bio Content */}
            <motion.div
              className="text-lg leading-relaxed text-gray-300"
              animate={bioControls}
              initial={{ opacity: 0 }}
            >
              <p className="!mb-4">
                I am a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">passionate and results-driven Digital Marketing Expert</span> with over 3 years of experience in the industry. Specializing in <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500 font-semibold">SEO</span>, I have successfully worked on numerous projects, helping businesses improve their online visibility, drive traffic, and achieve higher rankings on search engines.
              </p>
              <p className="!mb-4">
                My expertise goes beyond SEO—I have hands-on experience in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">on-page optimization</span>, website designing, and content management systems like WordPress and Shopify. I have designed and optimized multiple websites that are not only visually appealing but also SEO-friendly and user-centric.
              </p>
              <p className="!mb-4">
                In addition, I manage <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500 font-semibold">social media accounts</span> for clients across various industries, creating engaging content and strategies that build brand awareness and foster online communities.
              </p>
              <p>
                Whether you're a small business or a growing brand, I bring a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">strategic and creative approach</span> to every project, ensuring impactful results and long-term success in the digital landscape.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Certificates Section */}
        <motion.div
          className="!space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500 text-center">
            Certificates
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.li
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-md rounded-lg !p-4 flex items-center !space-x-3 border border-gray-700/50 hover:bg-gray-700/70 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)' }}
              >
                <FaCertificate className="text-green-500 text-xl group-hover:animate-pulse" />
                <span className="text-white">{cert}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;