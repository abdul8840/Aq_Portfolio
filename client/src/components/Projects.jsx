import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      shortDesc: 'Full-featured online store with payment integration.',
      fullDesc: 'Developed a complete e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, user authentication, and Stripe payment integration. The platform is fully responsive and optimized for performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      shortDesc: 'Modern portfolio with interactive elements.',
      fullDesc: 'Created a visually stunning portfolio website using Next.js and Framer Motion. The site features smooth animations, dark/light mode toggle, and a contact form. Optimized for SEO and performance with perfect Lighthouse scores.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Formik', 'Vercel'],
      liveUrl: 'https://my-portfolio-site.vercel.app',
      githubUrl: 'https://github.com/username/portfolio'
    },
    {
      id: 3,
      title: 'Task Management App',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      shortDesc: 'Productivity app with drag-and-drop functionality.',
      fullDesc: 'Built a task management application with React and Firebase. Features include real-time updates, drag-and-drop interface, user authentication, and offline capabilities. The app uses Firestore for data persistence and React Beautiful DND for the interactive interface.',
      technologies: ['React', 'Firebase', 'React Beautiful DND', 'Material UI', 'PWA'],
      liveUrl: 'https://task-manager-app.netlify.app',
      githubUrl: 'https://github.com/username/task-manager'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      shortDesc: 'Real-time weather information with forecasts.',
      fullDesc: 'Developed a weather dashboard that fetches data from the OpenWeather API. The app displays current weather conditions, 5-day forecast, and historical data. Features include location search, temperature unit toggle, and animated weather icons.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Geolocation API', 'CSS3'],
      liveUrl: 'https://weather-dashboard-example.com',
      githubUrl: 'https://github.com/username/weather-app'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      shortDesc: 'Analytics dashboard for social media metrics.',
      fullDesc: 'Created a comprehensive social media analytics dashboard that aggregates data from multiple platforms. The dashboard provides insights into engagement, follower growth, and content performance. Built with React, D3.js, and a custom Node.js backend.',
      technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://social-analytics-dashboard.com',
      githubUrl: 'https://github.com/username/social-dashboard'
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      shortDesc: 'Discover recipes based on ingredients.',
      fullDesc: 'Built a recipe finder application that allows users to search for recipes based on ingredients they have. The app uses the Spoonacular API to fetch recipes and includes features like filtering by diet, saving favorites, and creating shopping lists.',
      technologies: ['Vue.js', 'Spoonacular API', 'Vuex', 'Vuetify', 'Firebase'],
      liveUrl: 'https://recipe-finder-app.com',
      githubUrl: 'https://github.com/username/recipe-finder'
    }
  ];

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id='projects' className="min-h-screen bg-900 !py-16 !px-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400 opacity-10"
            style={{
              fontSize: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="container !mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white text-center !mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 text-center max-w-2xl !mx-auto !mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects. Click on any project to learn more details.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
              
              {/* Project card */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col relative"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                
                <div className="!p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white !mb-3">{project.title}</h3>
                  <p className="text-gray-300 !mb-6 flex-grow">{project.shortDesc}</p>
                  
                  <motion.button
                    className="!mt-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white !px-6 !py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center !p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-gray-700/50 rounded-full cursor-pointer !p-2"
                onClick={() => setSelectedProject(null)}
              >
                <IoClose className="text-2xl" />
              </button>
              
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover max-h-96 md:max-h-none"
                  />
                </div>
                
                <div className="!p-8">
                  <h3 className="text-3xl font-bold text-white !mb-4">{selectedProject.title}</h3>
                  
                  <p className="text-gray-300 !mb-6 text-lg">{selectedProject.fullDesc}</p>
                  
                  <div className="!mb-8">
                    <h4 className="text-xl font-semibold text-white !mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="bg-gray-700/50 text-blue-300 !px-4 !py-2 rounded-full text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 !mt-8">
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white !px-6 !py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="!mr-2 cursor-pointer" />
                        Live Demo
                      </motion.a>
                    )}
                    
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gray-700 text-white !px-6 !py-3 rounded-lg hover:bg-gray-600 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="!mr-2 cursor-pointer" />
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;