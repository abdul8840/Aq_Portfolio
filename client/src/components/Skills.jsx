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
  FaStar
} from 'react-icons/fa';
import { useState } from 'react';

const skills = [
  { name: 'Marketing Strategy', icon: <FaChartLine className="text-3xl text-blue-500" /> },
  { name: 'Competitor Analysis', icon: <FaSearch className="text-3xl text-green-500" /> },
  { name: 'Wordpress', icon: <FaWordpress className="text-3xl text-blue-600" /> },
  { name: 'Shopify', icon: <FaShopify className="text-3xl text-green-600" /> },
  { name: 'Content Writing', icon: <FaPenNib className="text-3xl text-purple-500" /> },
  { name: 'Keyword Research', icon: <FaSearch className="text-3xl text-yellow-500" /> },
  { name: 'Site Audit', icon: <FaClipboardCheck className="text-3xl text-red-500" /> },
  { name: 'Social Media Marketing', icon: <FaFacebook className="text-3xl text-blue-700" /> },
  { name: 'Google Analytics', icon: <FaGoogle className="text-3xl text-orange-500" /> },
  { name: 'Google My Business', icon: <FaStore className="text-3xl text-red-600" /> },
  { name: 'Google Search Console', icon: <FaGoogle className="text-3xl text-blue-400" /> },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Array for floating stars/icons in the background
  const floatingIcons = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 2,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 !py-12 !px-4 relative overflow-hidden">
      {/* Floating Stars/Icons Background */}
      {floatingIcons.map((icon) => (
        <FaStar
          key={icon.id}
          className="absolute text-yellow-300 opacity-30 animate-float"
          style={{
            fontSize: `${icon.size}px`,
            left: `${icon.left}%`,
            top: `${icon.top}%`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
          }}
        />
      ))}
      
      <h2 className="text-4xl font-bold text-white text-center !mb-12 relative z-10">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container !mx-auto relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 backdrop-blur-lg rounded-xl !p-6 shadow-xl overflow-hidden
                       transition-all duration-300 hover:shadow-2xl group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
          >
            {/* Gradient Border Animation */}
            <div className="absolute inset-0 border-2 border-transparent rounded-xl">
              <div
                className={`absolute inset-0 border-2 rounded-xl
                          transition-all duration-1000 ease-in-out
                          ${hoveredIndex === index ? 'animate-gradient-border' : 'border-blue-500'}`}
              ></div>
            </div>

            {/* Corner Animation */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-tl-xl
                           group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-tr-xl
                           group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-bl-xl
                           group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-br-xl
                           group-hover:scale-150 transition-transform duration-500"></div>

            {/* Skill Content */}
            <div className="relative flex flex-col items-center text-center !space-y-4">
              {skill.icon}
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;