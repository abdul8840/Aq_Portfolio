import { motion } from 'framer-motion';
import {
  FaGoogle,
  FaChartLine,
  FaSearch,
  FaPaintBrush,
  FaCircle,
  FaChartBar,
  FaGlobe
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const tools = [
  { 
    name: 'Google Search Console', 
    icon: <FaGoogle className="!text-4xl !text-cyan-400" />, 
    description: 'Monitor and optimize website performance in Google search results.' 
  },
  { 
    name: 'Google Analytics', 
    icon: <FaChartLine className="!text-4xl !text-orange-400" />, 
    description: 'Track and analyze website traffic and user behavior.' 
  },
  { 
    name: 'Uber Suggest', 
    icon: <FaSearch className="!text-4xl !text-teal-400" />, 
    description: 'Keyword research and SEO insights for content optimization.' 
  },
  { 
    name: 'Sem Rush', 
    icon: <FaChartBar className="!text-4xl !text-purple-400" />, 
    description: 'Comprehensive SEO and competitor analysis tool.' 
  },
  { 
    name: 'Moz', 
    icon: <FaGlobe className="!text-4xl !text-blue-400" />, 
    description: 'SEO tools for link building and site audits.' 
  },
  { 
    name: 'Keyword Planner Tool', 
    icon: <FaSearch className="!text-4xl !text-yellow-400" />, 
    description: 'Plan and optimize keyword strategies for ads.' 
  },
  { 
    name: 'Ahref', 
    icon: <FaChartLine className="!text-4xl !text-green-400" />, 
    description: 'Backlink analysis and SEO performance tracking.' 
  },
  { 
    name: 'Canva', 
    icon: <FaPaintBrush className="!text-4xl !text-pink-400" />, 
    description: 'Create stunning visuals and designs effortlessly.' 
  },
  { 
    name: 'SEO Quake', 
    icon: <FaGlobe className="!text-4xl !text-red-400" />, 
    description: 'Browser extension for quick SEO metrics.' 
  },
  { 
    name: 'Small SEO Tool', 
    icon: <FaSearch className="!text-4xl !text-cyan-300" />, 
    description: 'Suite of free SEO tools for optimization.' 
  },
];

const Tools = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate animated background particles
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 15 + 5,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.4 + 0.2,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 !py-20 !px-6 relative overflow-hidden">
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
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() * 1.5 + 0.5],
            opacity: [particle.opacity, particle.opacity * 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <FaCircle />
        </motion.div>
      ))}

      <div className="container !mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center text-white !mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Tools <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">I Use</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="relative w-64 h-64 mx-auto perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, rotateX: -20 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="relative w-full h-full rounded-full bg-gray-900/80 border-2 border-transparent shadow-2xl
                           transition-all duration-500"
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                  boxShadow:
                    hoveredIndex === index
                      ? '0 0 20px 5px rgba(34, 211, 238, 0.5)'
                      : '0 0 10px 2px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Face */}
                <div className="absolute w-full h-full rounded-full flex flex-col items-center justify-center !p-6 backface-hidden">
                  <div className="bg-gray-800/50 rounded-full !p-6 neon-glow">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white !mt-4 text-center">{tool.name}</h3>
                </div>

                {/* Back Face */}
                <div className="absolute w-full h-full rounded-full flex flex-col items-center justify-center !p-6 backface-hidden bg-gradient-to-br from-cyan-500/20 to-pink-500/20"
                     style={{ transform: 'rotateY(180deg)' }}>
                  <p className="text-sm text-white text-center">{tool.description}</p>
                </div>

                {/* Neon Border Effect */}
                <div className={`absolute inset-0 rounded-full border-2 border-transparent
                                ${hoveredIndex === index ? 'border-neon' : ''}`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for animations and neon effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .neon-glow {
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(236, 72, 153, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .border-neon {
          border-image: linear-gradient(45deg, #22d3ee, #ec4899, #f59e0b) 1;
          animation: neonPulse 2s infinite;
        }

        @keyframes neonPulse {
          0% {
            border-image: linear-gradient(45deg, #22d3ee, #ec4899, #f59e0b) 1;
          }
          50% {
            border-image: linear-gradient(45deg, #ec4899, #f59e0b, #22d3ee) 1;
          }
          100% {
            border-image: linear-gradient(45deg, #22d3ee, #ec4899, #f59e0b) 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Tools;