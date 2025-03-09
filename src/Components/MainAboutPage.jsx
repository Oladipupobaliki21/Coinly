import { motion } from 'framer-motion';
import forward from '../assets/forward.svg';
import Navbar from './Navbar';

const MainAboutPage = () => {
  return (
    <div className="bg-[#F7FBFE] min-h-screen items-center px-4 sm:px-8 md:px-16 lg:px-[80px]">
      <Navbar />

      {/* Animated Hero Section */}
      <motion.section
        className="w-full text-center pt-8 sm:pt-12 md:pt-[5rem]"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
        viewport={{ once: true }} // Only animate once
      >
        <div className="max-w-4xl mx-auto">
          <motion.h5
            className="font-medium text-lg sm:text-xl md:text-[20px] text-black"
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            WHAT WE DO
          </motion.h5>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-medium text-[#002245] leading-tight sm:leading-[1.2] mt-4"
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.6 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            Providing smart, <br className="hidden sm:block" /> simple investment
          </motion.h1>
          <motion.p
            className="mt-4 text-base sm:text-lg md:text-[20px] text-ash leading-relaxed sm:leading-[1.6]"
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.8 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            We started by providing smart, simple investing, without the high fees and account{' '}
            <br className="hidden sm:block" /> minimums associated with traditional investment management.
          </motion.p>
        </div>
        <motion.div
          className="w-full flex justify-center items-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.8, delay: 1.0 }} // Animation duration and delay
          viewport={{ once: true }} // Only animate once
        >
          <button className="text-white bg-blue py-2 sm:py-4 px-6 sm:px-12 rounded-[30px] flex items-center gap-1 hover:gap-2 transition duration-300">
            Get Started <img src={forward} alt="Forward" />
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MainAboutPage;