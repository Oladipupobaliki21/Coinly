import { motion } from 'framer-motion';
import logo2 from '../assets/logo2.svg';
import forward from '../assets/forward.svg';
import Linkdln from '../assets/Linkdln.svg';
import Twitter from '../assets/Twitter.svg';
import IG from '../assets/IG.svg';
import Facebook from '../assets/Facebook.svg';
import Ytube from '../assets/Ytube.svg';
import Game from '../assets/Game.svg';
import { Link } from 'react-router'; // Corrected import

const FooterPage = () => {
  return (
    <div className="w-full min-h-[450px] bg-white py-8 sm:py-12 md:py-16">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[80px]">
        {/* Top Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 md:gap-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-tight sm:leading-[95px] text-[#002245]">
              Set your money in motion
            </h2>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col gap-3">
            <h6 className="font-sans font-medium text-lg sm:text-xl">Company</h6>
            <ul className="flex flex-col gap-3">
              <Link to="/about" className="font-sans font-normal text-base sm:text-[16px] leading-[25px] hover:text-blue">
                About Us
              </Link>
              <Link to="/faq" className="font-sans font-normal text-base sm:text-[16px] leading-[25px] hover:text-blue">
                FAQs
              </Link>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end">
            <img src={logo2} alt="Logo" className="w-24 sm:w-32 md:w-40" />
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <button className="text-white bg-blue py-2 sm:py-4 px-6 sm:px-12 rounded-[30px] flex items-center gap-1 hover:gap-2 transition duration-300">
              Get Started <img src={forward} alt="Forward" />
            </button>
          </div>
          <ul className="flex flex-row items-center gap-4 sm:gap-6 md:gap-9">
            <li>
              <img src={Linkdln} alt="LinkedIn" className="w-6 sm:w-8" />
            </li>
            <li>
              <img src={Twitter} alt="Twitter" className="w-6 sm:w-8" />
            </li>
            <li>
              <img src={IG} alt="Instagram" className="w-6 sm:w-8" />
            </li>
            <li>
              <img src={Facebook} alt="Facebook" className="w-6 sm:w-8" />
            </li>
            <li>
              <img src={Ytube} alt="YouTube" className="w-6 sm:w-8" />
            </li>
            <li>
              <img src={Game} alt="Game" className="w-6 sm:w-8" />
            </li>
          </ul>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-[0.5px] border-[#9a9a9a] mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Bottom Section */}
        <motion.h2
          className="mt-6 sm:mt-8 font-sans font-normal text-sm sm:text-[14px] text-[#5D5D5D] leading-[25px] text-center sm:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          All rights reserved. Coinly is an assessment webpage design by John Ayanyemi for Checklearn, 2024. Built by Balikis Oladipupo
        </motion.h2>
      </div>
    </div>
  );
};

export default FooterPage;