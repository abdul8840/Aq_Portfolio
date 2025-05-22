import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FiExternalLink } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import LorenzImg from '../assets/lorenz.png';
import EaglenestImg from '../assets/eglenest.png';
import CakedaddyImg from '../assets/cakedaddy.png';
import KalasheelImg from '../assets/kalasheel.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const modalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Lorenz',
      image: LorenzImg,
      shortDesc: 'Boosted e-commerce organic traffic to 8,708/month with 745 organic keywords.',
      fullDesc: 'Achieved 8,708 monthly organic traffic by April 2025, with 745 organic keywords (848 in top 3, 636 in 4–10). Conversion rate improved to 2.45% (+54%) by optimizing the checkout process. Organic revenue grew by 52%, and traffic increased by 82%. Previously, only a few keywords ranked on the first page with low sales and conversion rates.',
      technologies: ['SEMrush', 'Google Analytics', 'Ahrefs', 'Shopify SEO', 'Screaming Frog'],
      liveUrl: 'https://lorenzindia.com/',
      category: 'seo',
      metrics: {
        organicTraffic: 8708,
        organicKeywords: 745,
        conversionRate: '2.45% (+54%)',
        revenueGrowth: '52%',
        trafficGrowth: '82%'
      }
    },
    {
      id: 2,
      title: 'Eagles Nest',
      image: EaglenestImg,
      shortDesc: 'Increased organic traffic to 1,298/month with 30+ first-page keywords.',
      fullDesc: 'Grew organic traffic to 1,298/month by April 2025, with over 30 keywords ranking on Google’s first page. Organic revenue increased by 45%, and traffic grew by 60%. Conversion rates improved by 25% through UX enhancements. Previously, the site had low keyword rankings and minimal organic sales.',
      technologies: ['Google Search Console', 'SEMrush', 'Yoast SEO', 'Moz', 'Screaming Frog'],
      liveUrl: 'https://hoteleaglesnest.com/',
      category: 'seo',
      metrics: {
        organicTraffic: 1298,
        organicKeywords: '30+',
        conversionRate: '+25%',
        revenueGrowth: '45%',
        trafficGrowth: '60%'
      }
    },
    {
      id: 3,
      title: 'The Cake Daddy',
      image: CakedaddyImg,
      shortDesc: 'Achieved 15,000+ monthly organic traffic and 60% sales growth.',
      fullDesc: 'Scaled organic traffic to over 15,000/month by April 2025, with 50+ keywords on the first page. Sales grew by 60%, and organic traffic increased by 75%. Conversion rates rose by 30% through optimized product pages and checkout. Previously, the site had limited keyword visibility and low sales.',
      technologies: ['Ahrefs', 'Google Analytics', 'Shopify SEO', 'SEMrush', 'Hotjar'],
      liveUrl: 'https://thecakedaddy.co.uk/',
      category: 'seo',
      metrics: {
        organicTraffic: 15000,
        organicKeywords: '50+',
        conversionRate: '+30%',
        revenueGrowth: '60%',
        trafficGrowth: '75%'
      }
    },
    {
      id: 4,
      title: 'Kalasheel',
      image: KalasheelImg,
      shortDesc: 'Grew organic traffic to 2,500/month with 35+ first-page keywords.',
      fullDesc: 'Increased organic traffic to 2,500/month by April 2025, with 35+ keywords ranking on the first page. Organic revenue grew by 50%, and traffic increased by 70%. Conversion rates improved by 28% through better UX and content optimization. Previously, the site had low traffic and poor keyword rankings.',
      technologies: ['SEMrush', 'Google Search Console', 'Yoast SEO', 'Screaming Frog', 'Google Analytics'],
      liveUrl: 'https://kalasheel.com/',
      category: 'seo',
      metrics: {
        organicTraffic: 2500,
        organicKeywords: '35+',
        conversionRate: '+28%',
        revenueGrowth: '50%',
        trafficGrowth: '70%'
      }
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

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
    <section id='projects' className="min-h-screen bg-gray-900 !py-16 !px-4 relative overflow-hidden">
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
          className="text-gray-300 text-center max-w-2xl !mx-auto !mb-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my projects by category. Click on any project to view detailed results.
        </motion.p>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center !mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-4 bg-gray-800/50 backdrop-blur-md rounded-xl !p-2 border border-gray-700/50">
            {['all', 'seo', 'website'].map((tab) => (
              <motion.button
                key={tab}
                className={`!px-6 !py-2 rounded-lg text-white capitalize transition-all duration-300 cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-gray-700/50 hover:bg-gray-600/50'
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === 'all' ? 'All Projects' : tab === 'seo' ? 'SEO Projects' : 'Website Projects'}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    </div>
                    
                    <div className="!p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-white !mb-3">{project.title}</h3>
                      <p className="text-gray-300 !mb-6 flex-grow">{project.shortDesc}</p>
                      <div className="flex items-center text-blue-300 !mb-4">
                        <FaChartLine className="w-5 h-5 !mr-2" />
                        <span>Organic Traffic: {project.metrics.organicTraffic.toLocaleString()}/month</span>
                      </div>
                      
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
              ))
            ) : (
              <motion.p
                className="text-gray-300 text-center col-span-full text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                No projects available in this category.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
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
                    className="w-full h-full object-fit max-h-96 md:max-h-none"
                  />
                </div>
                
                <div className="!p-8">
                  <div className="flex items-center !mb-4">
                    <HiCheckCircle className="h-8 w-8 text-green-500 !mr-2" />
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 !mb-6 text-lg">{selectedProject.fullDesc}</p>
                  
                  <div className="!mb-8">
                    <h4 className="text-xl font-semibold text-white !mb-4">Key Metrics:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center">
                        <FaChartLine className="w-5 h-5 text-blue-300 !mr-2" />
                        Organic Traffic: {selectedProject.metrics.organicTraffic.toLocaleString()}/month
                      </li>
                      <li className="flex items-center">
                        <FaChartLine className="w-5 h-5 text-blue-300 !mr-2" />
                        Organic Keywords: {selectedProject.metrics.organicKeywords}
                      </li>
                      <li className="flex items-center">
                        <FaChartLine className="w-5 h-5 text-blue-300 !mr-2" />
                        Conversion Rate: {selectedProject.metrics.conversionRate}
                      </li>
                      <li className="flex items-center">
                        <FaChartLine className="w-5 h-5 text-blue-300 !mr-2" />
                        Revenue Growth: {selectedProject.metrics.revenueGrowth}
                      </li>
                      <li className="flex items-center">
                        <FaChartLine className="w-5 h-5 text-blue-300 !mr-2" />
                        Traffic Growth: {selectedProject.metrics.trafficGrowth}
                      </li>
                    </ul>
                  </div>
                  
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
                        Live Website
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