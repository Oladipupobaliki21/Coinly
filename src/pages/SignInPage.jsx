import { motion } from 'framer-motion'; // Import framer-motion
import logo2 from '../assets/logo2.svg';
import signin from '../assets/Images/Signin.png';
import { Link } from 'react-router'; // Corrected import

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-[#E6F1FC] flex flex-col">
      {/* Animated Navbar */}
      <motion.nav
        className="flex justify-between px-4 sm:px-8 md:px-16 lg:px-[80px] pt-6 sm:pt-8 md:pt-[30px] items-center"
        initial={{ opacity: 0, y: -50 }} // Initial state (hidden)
        animate={{ opacity: 1, y: 0 }} // Animate on load
        transition={{ duration: 0.8 }} // Animation duration
      >
        <div>
          <Link to="/">
            <img src={logo2} alt="Logo" className="w-24 sm:w-32 md:w-40" />
          </Link>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center relative">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden)
          whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
          transition={{ duration: 0.8 }} // Animation duration
          viewport={{ once: true }} // Only animate once
        >
          <img
            src={signin}
            alt="Sign In"
            className="w-full object-cover object-center"
          />
        </motion.div>

        {/* Sign-In Form */}
        <motion.div
          className="bg-white w-full max-w-[600px] rounded-[16px] px-6 sm:px-8 md:px-[64px] py-8 sm:py-12 md:py-[56px] mx-4 sm:mx-8 md:mx-16 relative z-10"
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
          viewport={{ once: true }} // Only animate once
        >
          <h6 className="text-center text-lg sm:text-[24px] text-[#99A0E4] font-normal mb-4">
            Welcome back! Sign into your account
          </h6>
          <form className="space-y-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <p className="text-[#002245]">Email Address</p>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 sm:p-4 border rounded-md mt-2 focus:outline-none"
                  required
                />
              </div>
              <div>
                <p className="text-[#002245]">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 sm:p-4 border rounded-md focus:outline-none mt-2"
                  required
                />
                <p className="text-right text-[#1A7FE8] mt-2">Forgot your password?</p>
              </div>
            </div>
            <button className="mx-auto w-full p-3 sm:p-4 bg-[#1A7FE8] text-white rounded-md hover:bg-[#1560b5] transition duration-300">
              Sign in
            </button>
          </form>
          <div className="mt-6">
            <p className="text-[#ADAFC2] text-center">
              New to Coinly?{' '}
              <Link to="/signUp" className="text-[#1A7FE8] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        className="font-sans font-normal text-sm sm:text-[14px] text-[#5D5D5D] leading-[25px] text-center mt-6 sm:mt-8 md:mt-12 pb-6 sm:pb-8 md:pb-12"
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
        viewport={{ once: true }} // Only animate once
      >
        All rights reserved. Coinly is an assessment webpage design by John Ayanyemi for Checklearn, 2024. Built by Balikis Oladipupo
      </motion.p>
    </div>
  );
};

export default SignInPage;