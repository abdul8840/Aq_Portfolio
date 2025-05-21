import { motion } from 'framer-motion';
import {
  FaWordpress,
  FaShopify,
  FaPenNib,
  FaSearch,
  FaChartLine,
  FaGoogle,
  FaStore,
  FaFacebook,
  FaClipboardCheck,
  FaStar,
  FaBullhorn
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'Marketing Strategy', icon: <FaChartLine className="!text-3xl !text-blue-500" /> },
  { name: 'Competitor Analysis', icon: <FaSearch className="!text-3xl !text-green-500" /> },
  { name: 'Wordpress', icon: <FaWordpress className="!text-3xl !text-blue-600" /> },
  { name: 'Shopify', icon: <FaShopify className="!text-3xl !text-green-600" /> },
  { name: 'Content Writing', icon: <FaPenNib className="!text-3xl !text-purple-500" /> },
  { name: 'Keyword Research', icon: <FaSearch className="!text-3xl !text-yellow-500" /> },
  { name: 'Site Audit', icon: <FaClipboardCheck className="!text-3xl !text-red-500" /> },
  { name: 'Social Media Marketing', icon: <FaFacebook className="!text-3xl !text-blue-700" /> },
  { name: 'Google Analytics', icon: <FaGoogle className="!text-3xl !text-orange-500" /> },
  { name: 'Google My Business', icon: <FaStore className="!text-3xl !text-red-600" /> },
  { name: 'Google Search Console', icon: <FaGoogle className="!text-3xl !text-blue-400" /> },
];

const proficiencies = [
  { name: 'Search Engine Optimization', icon: <FaSearch className="!text-3xl !text-teal-500" /> },
  { name: 'Content Writing', icon: <FaPenNib className="!text-3xl !text-purple-500" /> },
  { name: 'Google Ads', icon: <FaBullhorn className="!text-3xl !text-red-500" /> },
  { name: 'Google Analytics', icon: <FaGoogle className="!text-3xl !text-orange-500" /> },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [proficiencyHoveredIndex, setProficiencyHoveredIndex] = useState(null);
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    // Generate floating icons with more controlled positioning
    const icons = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 12 + 8,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.2,
      color: `rgb(253, 224, 71, ${Math.random() * 0.5 + 0.3})`
    }));
    setFloatingIcons(icons);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 !py-16 !px-4 relative overflow-hidden">
      {/* Floating Stars/Icons Background - More controlled positioning */}
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-yellow-300"
          style={{
            fontSize: `${icon.size}px`,
            left: `${icon.left}%`,
            top: `${icon.top}%`,
            opacity: icon.opacity,
            color: icon.color,
          }}
          animate={{
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 40 - 20],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <FaStar />
        </motion.div>
      ))}
      
      <div className="container !mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center !mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl !p-8 shadow-lg overflow-hidden border border-gray-700/50
                         transition-all duration-500 hover:shadow-xl group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0
                                group-hover:opacity-100 transition-opacity duration-500 ${hoveredIndex === index ? '!opacity-100' : ''}`}></div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                <div className={`absolute inset-0 border-2 border-transparent rounded-2xl
                              transition-all duration-700 ease-in-out
                              ${hoveredIndex === index ? 'border-blue-500/50' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-2 h-2 bg-blue-400 rounded-full
                             group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full
                             group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-400 rounded-full
                             group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-3 right-3 w-2 h-2 bg-purple-400 rounded-full
                             group-hover:scale-150 transition-transform duration-500"></div>

              {/* Skill Content */}
              <div className="relative flex flex-col items-center text-center !space-y-5 z-10">
                <div className="bg-gray-700/50 rounded-full !p-5 group-hover:bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all duration-500">
                  {skill.icon}
                </div>
                <motion.h3
                  className="text-xl font-semibold text-white"
                  whileHover={{ color: '#60a5fa' }}
                >
                  {skill.name}
                </motion.h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center !mt-20 !mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Proficiencies</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {proficiencies.map((proficiency, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl !p-8 shadow-lg overflow-hidden border border-gray-700/50
                         transition-all duration-500 hover:shadow-xl group"
              onMouseEnter={() => setProficiencyHoveredIndex(index)}
              onMouseLeave={() => setProficiencyHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0
                                group-hover:opacity-100 transition-opacity duration-500 ${proficiencyHoveredIndex === index ? '!opacity-100' : ''}`}></div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                <div className={`absolute inset-0 border-2 border-transparent rounded-2xl
                              transition-all duration-700 ease-in-out
                              ${proficiencyHoveredIndex === index ? 'border-blue-500/50' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-2 h-2 bg-blue-400 rounded-full
                             group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full
                             group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-400 rounded-full
                             group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-3 right-3 w-2 h-2 bg-purple-400 rounded-full
                             group-hover:scale-150 transition-transform duration-500"></div>

              {/* Proficiency Content */}
              <div className="relative flex flex-col items-center text-center !space-y-5 z-10">
                <div className="bg-gray-700/50 rounded-full !p-5 group-hover:bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all duration-500">
                  {proficiency.icon}
                </div>
                <motion.h3
                  className="text-xl font-semibold text-white"
                  whileHover={{ color: '#60a5fa' }}
                >
                  {proficiency.name}
                </motion.h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(calc(var(--move-x) * 1px), calc(var(--move-y) * 1px)) rotate(10deg);
          }
        }
        
        .animate-gradient-border {
          background: linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #F59E0B);
          background-size: 300% 300%;
          animation: gradient 4s ease infinite;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;