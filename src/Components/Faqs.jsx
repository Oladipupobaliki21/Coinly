import { motion } from 'framer-motion'; 
import faqillus from '../assets/question.svg';
import Navbar from './Navbar';

const Faqs = () => {
  return (
    <div className="bg-[#F7FBFE] min-h-screen items-center px-4 sm:px-8 md:px-16 lg:px-[80px]">
      <Navbar />
      {/* Animated Content */}
      <motion.div
        className="flex items-center justify-center flex-col"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
        viewport={{ once: true }} // Only animate once
      >
        {/* Animated Illustration */}
        <motion.div
          className="mt-8 sm:mt-12 md:mt-[80px]"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden)
          whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
          transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
          viewport={{ once: true }} // Only animate once
        >
          <img src={faqillus} alt="FAQ Illustration" className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]" />
        </motion.div>

        {/* Animated Heading */}
        <motion.div
          className="mt-8 sm:mt-12 md:mt-[64px]"
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.8, delay: 0.6 }} // Animation duration and delay
          viewport={{ once: true }} // Only animate once
        >
          <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-[60px] text-[#002245] text-center">
            Frequently Asked Questions
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Faqs;