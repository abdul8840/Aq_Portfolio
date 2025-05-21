import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const EducationAndExperience = () => {
  const [activeTab, setActiveTab] = useState('education');
  const controls = useAnimation();
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);

  const educationData = [
    {
      id: 1,
      year: '2024',
      degree: 'Bachelor of Commerce',
      institution: 'Allahabad State University',
      description: 'Specialized in Web Development and Artificial Intelligence. Graduated with honors.'
    },
    {
      id: 2,
      year: '2022',
      degree: 'Digital Marketing',
      institution: 'National Digital Marketing Institute & Training ( NDMIT )',
      description: 'Focus on Mathematics and Computer Science. Achieved top 5% in final exams.'
    },
    // {
    //   id: 3,
    //   year: '2011 - 2013',
    //   degree: 'Secondary Education',
    //   institution: 'Metro High School',
    //   description: 'Participated in multiple coding competitions and science fairs.'
    // }
  ];

  const experienceData = [
    {
      id: 1,
      year: 'June 2023 - Present',
      position: 'SEO SPECIALIST',
      company: 'DIGI MARQUEE',
      description: 'Performed keyword research and analyzed SEO performance of webpages, Created high-quality content that was optimized for SEO purposes.'
    },
    {
      id: 2,
      year: 'Mar 2023 - May 2023',
      position: 'SEO EXECUTIVE',
      company: 'PITCHWORX',
      description: 'Conducted keyword research to identify high-value search terms and optimized website content accordingly. Develop and executed link-building strategies to increase domain authority and improve search engine rankings.'
    },
    {
      id: 3,
      year: 'June 2022 - Feb 2023',
      position: 'SEO EXECUTIVE',
      company: 'IWAY DIGITAL',
      description: 'Keyword Research - Tools used to research and select keywords were LSI Graph, Google Suggest, UberSuggest, Google Keyword Planner, SEMrush, Keyword Explorer, and Google Trends'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && sectionRef.current) {
        const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Calculate progress through the section (0 to 1)
        const progress = Math.min(1, Math.max(0, (scrollPosition - sectionTop + window.innerHeight / 2) / sectionHeight));
        
        // Animate the timeline fill based on scroll progress
        controls.start({
          height: `${progress * 100}%`
        });

        // Animate each timeline item when it comes into view
        timelineItems.forEach((item, index) => {
          const itemTop = item.offsetTop;
          const itemProgress = Math.min(1, Math.max(0, (scrollPosition - itemTop + window.innerHeight * 0.7) / (window.innerHeight * 0.3)));
          
          if (itemProgress > 0.3) {
            item.classList.add('animate-fade-in');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-900 !py-16 !px-4 relative overflow-hidden"
      id="portfolio"
    >
      <div className="container !mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center !mb-16">
          My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center !mb-12">
          <div className="bg-gray-800 rounded-full !p-1 flex">
            <button
              className={`flex items-center !px-6 !py-3 rounded-full transition-all duration-300 cursor-pointer ${
                activeTab === 'education' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap className="!mr-2" />
              Education
            </button>
            <button
              className={`flex items-center !px-6 !py-3 rounded-full transition-all duration-300 cursor-pointer ${
                activeTab === 'experience' 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              <FaBriefcase className="!mr-2" />
              Experience
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative container !mx-auto" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"
              initial={{ height: '0%' }}
              animate={controls}
              transition={{ type: 'spring', damping: 25 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'education' ? (
              <motion.div
                key="education"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="!space-y-12"
              >
                {educationData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`timeline-item relative !pl-8 md:!pl-0 ${
                      index % 2 === 0 ? 'md:!pr-8 md:!text-right' : 'md:!pl-8'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute top-5 -left-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 z-10 ${
                      index % 2 === 0 ? 'md:left-auto md:-right-1' : ''
                    }`} />

                    {/* Content Card */}
                    <div className={`bg-gray-800/50 backdrop-blur-md rounded-xl !p-6 !ml-5 !mr-5 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl ${
                      index % 2 === 0 ? 'md:hover:-translate-x-2' : 'md:hover:translate-x-2'
                    }`}>
                      <div className={`flex items-center !mb-2 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <span className="text-blue-400 font-semibold !mr-2">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white !mb-1">{item.degree || item.position}</h3>
                      <h4 className="text-purple-300 !mb-3">{item.institution || item.company}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="!space-y-12"
              >
                {experienceData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className={`timeline-item relative !pl-8 md:!pl-0 ${
                      index % 2 === 0 ? 'md:!pr-8 md:!text-right' : 'md:!pl-8'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute top-5 -left-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 z-10 ${
                      index % 2 === 0 ? 'md:left-auto md:-right-1' : ''
                    }`} />

                    {/* Content Card */}
                    <div className={`bg-gray-800/50 backdrop-blur-md rounded-xl !p-6 !ml-5 !mr-5 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl ${
                      index % 2 === 0 ? 'md:hover:-translate-x-2' : 'md:hover:translate-x-2'
                    }`}>
                      <div className={`flex items-center !mb-2 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <span className="text-blue-400 font-semibold !mr-2">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white !mb-1">{item.degree || item.position}</h3>
                      <h4 className="text-purple-300 !mb-3">{item.institution || item.company}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .timeline-item {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .timeline-item.animate-fade-in {
          opacity: 1;
        }
        
        @media (min-width: 768px) {
          .timeline-item:nth-child(odd) {
            left: 50%;
            width: 50%;
            padding-right: 2rem;
            text-align: right;
          }
          
          .timeline-item:nth-child(even) {
            width: 50%;
            padding-left: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EducationAndExperience;