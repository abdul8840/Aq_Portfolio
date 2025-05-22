import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaLanguage, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import CV from '../assets/aqib_cv.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ type: 'success', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log environment variables and form data for debugging
    console.log('Service ID:', import.meta.env.VITE_CONTACT_SERVICE_KEY);
    console.log('Template ID:', import.meta.env.VITE_CONTACT_TEMPLATE_KEY);
    console.log('Public Key:', import.meta.env.VITE_CONTACT_PUBLIC_KEY);
    console.log('Form Data:', formData);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_CONTACT_SERVICE_KEY,
        import.meta.env.VITE_CONTACT_TEMPLATE_KEY,
        formData,
        import.meta.env.VITE_CONTACT_PUBLIC_KEY
      );
      console.log('Email sent successfully:', result.text, result.status);
      setModalMessage({
        type: 'success',
        text: 'Thanks for submitting the form! We have received your message and will contact you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email submission failed:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      setModalMessage({
        type: 'error',
        text: error.text 
          ? `Failed to send message: ${error.text} Please check your EmailJS Gmail integration.`
          : 'Failed to send your message. Please check your EmailJS configuration or try again later.'
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage({ type: 'success', text: '' }); // Reset modal message
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 !py-16 !px-4 relative overflow-hidden">
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
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
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
          Get In <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-center max-w-2xl !mx-auto !mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-lg animate-pulse"></div>

            <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl !p-8 border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white !mb-8">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="!space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 !mb-2">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg !px-4 !py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg border border-blue-400 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 !mb-2">Your Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg !px-4 !py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg border border-blue-400 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 !mb-2">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg !px-4 !py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg border border-blue-400 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 !mb-2">Your Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg !px-4 !py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    ></textarea>
                    <div className="absolute inset-0 rounded-lg border border-blue-400 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white !px-6 !py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Details */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-20 blur-lg animate-pulse"></div>

            <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl !p-8 border border-gray-700/50 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-white !mb-8">Contact Information</h3>

              <div className="!space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-blue-500/10 !p-3 rounded-full !mr-4">
                    <FaEnvelope className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 text-sm uppercase tracking-wider !mb-1">Email</h4>
                    <a href="mailto:aqibkhan8799@gmail.com" className="text-white hover:text-blue-400 transition-colors text-lg">aqibkhan8799@gmail.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-purple-500/10 !p-3 rounded-full !mr-4">
                    <FaPhone className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 text-sm uppercase tracking-wider !mb-1">Phone</h4>
                    <a href="tel:+918931938411" className="text-white hover:text-purple-400 transition-colors text-lg">+91 8931938411</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-pink-500/10 !p-3 rounded-full !mr-4">
                    <FaMapMarkerAlt className="text-pink-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 text-sm uppercase tracking-wider !mb-1">Address</h4>
                    <p className="text-white text-lg">Kareli, Allahabad</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start">
                  <div className="bg-green-500/10 !p-3 rounded-full !mr-4">
                    <FaLanguage className="text-green-400 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-300 text-sm uppercase tracking-wider !mb-3">Languages</h4>
                    <div className="!space-y-3">
                      <div>
                        <div className="flex justify-between text-white !mb-1">
                          <span>Hindi/Urdu</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-green-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '90%' }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-white !mb-1">
                          <span>English</span>
                          <span>60%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-blue-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '60%' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download CV Button */}
                <div className="!pt-6">
                  <motion.button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = CV;
                      link.download = 'aqib_cv.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white !px-6 !py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="!mr-2" />
                    Download CV
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-800/90 rounded-2xl !p-8 max-w-md w-full mx-4 relative border border-blue-500/50 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors cursor-pointer"
                onClick={closeModal}
              >
                <FaTimes className="!text-2xl" />
              </button>
              <h3 className="text-2xl font-bold text-white text-center !mb-4">
                {modalMessage.type === 'success' ? 'Thank You!' : 'Error'}
              </h3>
              <p className={`text-center ${modalMessage.type === 'success' ? 'text-gray-200' : 'text-red-400'}`}>
                {modalMessage.text}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;