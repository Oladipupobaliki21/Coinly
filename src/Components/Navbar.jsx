import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Animations
import logo2 from '../assets/logo2.svg';
import forward from '../assets/forward.svg';
import { Link } from 'react-router'; // Corrected import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
        <header className=" bg-[#F7FBFE]">
          <nav className="flex justify-between items-center py-4 sm:py-6 md:py-[30px] w-full">
            <Link to="/">
                <img src={logo2} alt="Logo" className="w-30 sm:w-32 md:w-30" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-4 sm:gap-6 md:gap-7 items-center">
              <Link to="/about" className="text-sm sm:text-base md:text-lg text-navyBlue hover:text-blue">
                About Us
              </Link>
              <Link to="/faq" className="text-sm sm:text-base md:text-lg text-navyBlue hover:text-blue">
                FAQs
              </Link>
              <Link
                to="/signIn"
                className="text-sm sm:text-base md:text-lg text-blue border border-blue py-1 sm:py-2 px-3 sm:px-5 rounded-[30px] font-sans hover:bg-blue hover:text-white transition duration-300"
              >
                Sign in
              </Link>
              <Link
                to="/signUp"
                className="text-sm sm:text-base md:text-lg text-white bg-blue py-2 sm:py-3 px-4 sm:px-6 rounded-[30px] flex items-center gap-1 hover:gap-2 transition duration-200"
              >
                Get Started <img src={forward} alt="Forward" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-navyBlue focus:outline-none">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-[#F7FBFE] w-full px-4 pb-4 flex flex-col gap-5"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link to="/about" className="block py-2 text-navyBlue hover:text-blue">
                  About Us
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/faq" className="block py-2 text-navyBlue hover:text-blue">
                  FAQs
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/signIn"
                  className="block py-2 text-blue border border-blue rounded-[30px] text-center font-sans hover:bg-blue hover:text-white transition duration-300"
                >
                  Sign in
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/signUp"
                  className="block py-2 text-white bg-blue rounded-[30px] text-center flex items-center justify-center gap-1 hover:gap-2 transition duration-200"
                >
                  Get Started <img src={forward} alt="Forward" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </header>
    </>
  );
};

export default Navbar;