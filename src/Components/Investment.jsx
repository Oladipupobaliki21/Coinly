// import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Investment = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-[80px] mt-8 sm:mt-16 md:mt-[100px] w-full max-w-[1280px] mx-auto">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-[48px] font-sans font-medium text-navyBlue mb-6 sm:mb-[30px]"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8 }} // Animation duration
        viewport={{ once: true }} // Only animate once
      >
        Diversified investment
      </motion.h2>

      {/* Animated Cards */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center items-center gap-6"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
        viewport={{ once: true }} // Only animate once
      >
        {/* First Card */}
        <motion.div
          className="w-full lg:w-1/2 h-auto sm:h-[255px] bg-[#E6FAFF] rounded-3xl sm:rounded-[65px] p-6 sm:p-8 md:px-[30px] md:py-[50px]"
          initial={{ opacity: 0, x: -50 }} // Initial state (hidden)
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
          viewport={{ once: true }} // Only animate once
        >
          <p className="font-normal text-base sm:text-lg md:text-[20px] leading-relaxed sm:leading-[31px] text-[#5D5D5D]">
            We invest your money in a globally diversified portfolio of low-cost index funds, and our cutting-edge
            technology helps you earn the best possible return, while optimizing your tax bill.
          </p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="w-full lg:w-1/2 h-auto sm:h-[255px] bg-[#EBF5FF] rounded-3xl sm:rounded-[65px] p-6 sm:p-8 md:px-[30px] md:py-[50px]"
          initial={{ opacity: 0, x: 50 }} // Initial state (hidden)
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          transition={{ duration: 0.8, delay: 0.6 }} // Animation duration and delay
          viewport={{ once: true }} // Only animate once
        >
          <p className="font-normal text-base sm:text-lg md:text-[20px] leading-relaxed sm:leading-[31px] text-[#5D5D5D]">
            This means we do things like automatic rebalancing, dividend reinvesting, and tax loss harvesting —
            services that were only available to the ultra-rich until now or that most people found too time-consuming
            and tedious to do on their own.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Investment;