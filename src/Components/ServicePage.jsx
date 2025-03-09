import { motion } from 'framer-motion'; // Import framer-motion
import phone1 from '../assets/Images/phone1.png';
import forward from '../assets/forward.svg';

const ServicePage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[80px] mt-8 sm:mt-16 md:mt-[100px] w-full max-w-[1280px] mx-auto">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-[48px] font-sans font-medium text-navyBlue mb-4 sm:mb-[30px]"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8 }} // Animation duration
        viewport={{ once: true }} // Only animate once
      >
        Our services
      </motion.h2>

      {/* Animated Container */}
      <motion.div
        className="bg-[#E6F1FC] rounded-3xl sm:rounded-[65px] pt-6 sm:pt-12 md:pt-[50px] px-6 sm:px-8 md:px-16 lg:px-[100px]"
        initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden)
        whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
        viewport={{ once: true }} // Only animate once
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Animated Phone Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            <img src={phone1} alt="Phone" className="w-full max-w-[400px] lg:max-w-none" />
          </motion.div>

          {/* Animated Text Content */}
          <motion.div
            className="w-full lg:w-1/2 lg:ml-8 xl:ml-[80px] mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.6 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            <h1 className="font-sans font-medium text-4xl sm:text-5xl md:text-[56px] text-[#002245] leading-tight sm:leading-[64px]">
              Get up to <br />
              <span className="font-sans font-semibold text-4xl sm:text-5xl md:text-[56px] text-[#002245] leading-tight sm:leading-[64px]">
                $5,000
              </span>{' '}
              instantly
            </h1>
            <p className="pt-4 sm:pt-5 text-base sm:text-lg md:text-[20px] font-sans font-normal leading-relaxed sm:leading-[30px] text-[#5D5D5D]">
              Sign up and start trading in just minutes. Instant <br className="hidden sm:block" />
              deposits let you buy crypto right away — no need to <br className="hidden sm:block" />
              wait for funding.
            </p>
            <div className="mt-8 sm:mt-12 md:mt-[100px]">
              {/* Animated Button */}
              <motion.button
                className="text-white bg-blue py-3 sm:py-4 px-8 sm:px-12 rounded-3xl sm:rounded-[30px] flex items-center gap-1 hover:gap-2 ease-in duration-300 mb-2"
                initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                transition={{ duration: 0.8, delay: 0.8 }} // Animation duration and delay
                viewport={{ once: true }} // Only animate once
              >
                Get Started <img src={forward} alt="Forward" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicePage;