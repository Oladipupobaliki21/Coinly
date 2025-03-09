import { motion } from 'framer-motion'; // Import framer-motion
import dami from "../assets/Images/Dami.png";
import tunde from "../assets/Images/Tunde.png";
import mariam from "../assets/Images/Mariam.png";

const TeamPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-[80px] mt-8 sm:mt-16 md:mt-[50px] w-full max-w-[1280px] mx-auto mb-8 sm:mb-16 md:mb-[100px]">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-[48px] font-sans font-medium text-navyBlue mb-6 sm:mb-[30px]"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8 }} // Animation duration
        viewport={{ once: true }} // Only animate once
      >
        Meet the Team
      </motion.h2>

      {/* Animated Team Section */}
      <motion.div
        className="bg-[#E6FAFF] rounded-3xl sm:rounded-[65px] py-8 sm:py-12 md:py-[136px] px-4 sm:px-8 md:px-[165px]"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
        viewport={{ once: true }} // Only animate once
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-[70px]">
          {/* Damilola Afolabi */}
          <motion.div
            className="w-full sm:w-[270px] flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            <img
              src={dami}
              alt="Damilola Afolabi"
              className="rounded-3xl sm:rounded-[30px] bg-[#04D1FF] w-full"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-lg sm:text-[20px] text-[#002245]">Damilola Afolabi</h3>
              <p className="text-[#5D5D5D] text-lg sm:text-[20px] font-normal">CEO</p>
            </div>
          </motion.div>

          {/* Tunde Omikunle */}
          <motion.div
            className="w-full sm:w-[270px] flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.6 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            <img
              src={tunde}
              alt="Tunde Omikunle"
              className="rounded-3xl sm:rounded-[30px] bg-[#04D1FF] w-full"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-lg sm:text-[20px] text-[#002245]">Tunde Omikunle</h3>
              <p className="text-[#5D5D5D] text-lg sm:text-[20px] font-normal">CTO</p>
            </div>
          </motion.div>

          {/* Maryam Bello */}
          <motion.div
            className="w-full sm:w-[270px] flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.8 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            <img
              src={mariam}
              alt="Maryam Bello"
              className="rounded-3xl sm:rounded-[30px] bg-[#04D1FF] w-full"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-lg sm:text-[20px] text-[#002245]">Maryam Bello</h3>
              <p className="text-[#5D5D5D] text-lg sm:text-[20px] font-normal">Account Officer</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamPage;