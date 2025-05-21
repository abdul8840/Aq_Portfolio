import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaSearch, FaChartLine, FaMobile, FaPaintBrush, FaServer } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: <FaCode className="text-4xl" />,
      shortDesc: 'Custom websites built with modern technologies for optimal performance.',
      fullDesc: 'We specialize in creating responsive, high-performance websites using React, Next.js, and modern CSS frameworks. Our development process focuses on clean code, accessibility, and SEO best practices to ensure your site reaches its full potential.',
      features: [
        'Responsive Design',
        'React/Next.js Development',
        'Performance Optimization',
        'SEO Friendly'
      ]
    },
    {
      id: 2,
      title: 'SEO Optimization',
      icon: <FaSearch className="text-4xl" />,
      shortDesc: 'Boost your visibility and rankings on search engines.',
      fullDesc: 'Our comprehensive SEO services include technical audits, keyword research, on-page optimization, and content strategy. We use data-driven approaches to improve your search rankings and organic traffic.',
      features: [
        'Keyword Research',
        'Technical SEO',
        'Content Optimization',
        'Analytics & Reporting'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: <FaChartLine className="text-4xl" />,
      shortDesc: 'Data-driven marketing strategies to grow your business.',
      fullDesc: 'From social media campaigns to email marketing, we create tailored digital marketing strategies that align with your business goals and deliver measurable results.',
      features: [
        'Social Media Marketing',
        'PPC Advertising',
        'Email Campaigns',
        'Conversion Optimization'
      ]
    },
    {
      id: 4,
      title: 'Mobile Development',
      icon: <FaMobile className="text-4xl" />,
      shortDesc: 'Native and cross-platform mobile app solutions.',
      fullDesc: 'We build high-quality mobile applications for iOS and Android using React Native and Flutter, delivering native performance with cross-platform efficiency.',
      features: [
        'React Native Development',
        'Flutter Apps',
        'UI/UX Design',
        'App Store Optimization'
      ]
    },
    {
      id: 5,
      title: 'UI/UX Design',
      icon: <FaPaintBrush className="text-4xl" />,
      shortDesc: 'Beautiful, intuitive interfaces that delight users.',
      fullDesc: 'Our design process focuses on creating user-centered interfaces that are both aesthetically pleasing and highly functional. We conduct user research and testing to ensure optimal usability.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing'
      ]
    },
    {
      id: 6,
      title: 'Backend Services',
      icon: <FaServer className="text-4xl" />,
      shortDesc: 'Robust backend solutions for your applications.',
      fullDesc: 'We develop secure, scalable backend systems using Node.js, Python, and cloud technologies. Our solutions include API development, database design, and server management.',
      features: [
        'API Development',
        'Database Design',
        'Cloud Integration',
        'Server Management'
      ]
    }
  ];

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [selectedService]);

  return (
    <section className="min-h-screen bg-900 !py-16 !px-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            <FaCode />
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
          My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 text-center max-w-2xl !mx-auto !mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are the services I offer to help grow your business and bring your ideas to life.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl !p-6 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <div className="!mb-6 flex justify-center">
                  <div className="!p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white !mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 !mb-6 text-center flex-grow">{service.shortDesc}</p>
                
                <motion.button
                  className="!mt-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white !px-6 !py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 self-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(service)}
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
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center !p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
                onClick={() => setSelectedService(null)}
              >
                <IoClose className="text-3xl" />
              </button>
              
              <div className="!p-8">
                <div className="flex items-center !mb-6">
                  <div className="!p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white !mr-4">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 !mb-6 text-lg">{selectedService.fullDesc}</p>
                  
                  <h4 className="text-xl font-semibold text-white !mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 !mb-8">
                    {selectedService.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center bg-gray-700/50 rounded-lg !px-4 !py-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full !mr-3"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;