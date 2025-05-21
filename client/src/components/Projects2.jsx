import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaCode, FaDatabase, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    icon: <FaRocket className="!text-4xl !text-cyan-400" />,
    shortDescription: 'A full-stack e-commerce solution with payment integration.',
    fullDescription: 'Developed a scalable e-commerce platform using React, Node.js, and Stripe for payments. Features include user authentication, product filtering, and a responsive design optimized for mobile and desktop.',
  },
  {
    title: 'Task Management App',
    icon: <FaCode className="!text-4xl !text-purple-400" />,
    shortDescription: 'A productivity app for task organization and collaboration.',
    fullDescription: 'Built a task management application with real-time collaboration using Firebase. Includes drag-and-drop task boards, user roles, and notifications. Deployed with a clean, intuitive UI using Tailwind CSS.',
  },
  {
    title: 'Data Analytics Dashboard',
    icon: <FaDatabase className="!text-4xl !text-green-400" />,
    shortDescription: 'Interactive dashboard for data visualization.',
    fullDescription: 'Created a data analytics dashboard using D3.js and React for visualizing complex datasets. Integrated with a REST API to fetch real-time data, with interactive charts and customizable filters.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate orbiting particles for background
    const particleCount = 40;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 3,
      orbitRadius: Math.random() * 150 + 50,
      angle: Math.random() * 360,
      duration: Math.random() * 20 + 10,
      opacity: Math.random() * 0.5 + 0.3,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    }));
    setParticles(newParticles);
  }, []);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-gray-900 !py-20 !px-6 relative overflow-hidden">
      {/* Animated Orbiting Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            fontSize: `${particle.size}px`,
            left: '50%',
            top: '50%',
            opacity: particle.opacity,
            color: particle.color,
          }}
          animate={{
            x: Math.cos((particle.angle * Math.PI) / 180) * particle.orbitRadius,
            y: Math.sin((particle.angle * Math.PI) / 180) * particle.orbitRadius,
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <FaRocket />
        </motion.div>
      ))}

      <div className="container !mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 !mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative w-72 h-80 mx-auto bg-gray-800/70 border-2 border-transparent rounded-[20px] clip-hexagon shadow-xl
                         transition-all duration-500 hover:shadow-2xl group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 25px rgba(34, 211, 238, 0.6)',
              }}
            >
              {/* Glowing Border */}
              <div className={`absolute inset-0 rounded-[20px] clip-hexagon border-2 border-transparent
                              group-hover:border-neon transition-all duration-500`}></div>

              {/* Card Content */}
              <div className="relative flex flex-col items-center justify-between !p-8 h-full z-10">
                <div className="bg-gray-900/50 rounded-full !p-6 group-hover:bg-gradient-to-br from-cyan-500/30 to-purple-500/30
                                transition-all duration-500">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white text-center">{project.title}</h3>
                <p className="text-sm text-gray-300 text-center">{project.shortDescription}</p>
                <motion.button
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold !py-2 !px-6 rounded-full
                             hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-800/90 rounded-2xl !p-8 max-w-lg w-full mx-4 relative border border-cyan-500/50 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
                onClick={closeModal}
              >
                <FaTimes className="!text-2xl" />
              </button>
              <div className="flex items-center justify-center !mb-6">
                {selectedProject.icon}
              </div>
              <h3 className="text-2xl font-bold text-white text-center !mb-4">{selectedProject.title}</h3>
              <p className="text-gray-200 text-center">{selectedProject.fullDescription}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for Hexagon Shape and Neon Effect */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }

        .border-neon {
          border-image: linear-gradient(45deg, #22d3ee, #a855f7, #ec4899) 1;
          animation: neonGlow 2.5s infinite alternate;
        }

        @keyframes neonGlow {
          0% {
            box-shadow: 0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(168, 85, 247, 0.4);
          }
          100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 30px rgba(168, 85, 247, 0.6);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;