// import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import logo2 from '../assets/logo2.svg';
import Signup from '../assets/Images/Signup.png';
import { Link } from 'react-router'; // Corrected import

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-[80px] bg-[#F7FBFE] relative overflow-hidden">
      {/* Animated Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }} // Initial state (hidden)
        animate={{ opacity: 1, y: 0 }} // Animate on load
        transition={{ duration: 0.8 }} // Animation duration
        className="w-full z-10" // Ensure header is above the image
      >
        <nav className="flex justify-between items-center py-4 sm:py-6 md:py-[30px]">
          <div>
            <Link to="/">
              <img src={logo2} alt="Logo" className="w-24 sm:w-32 md:w-40" />
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Background Image */}
      <motion.div
        className="absolute md:w-[50vw] md:p-5 inset-0 z-0 md:bottom-32" // Place the image behind other content
        initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden)
        whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
        transition={{ duration: 0.8 }} // Animation duration
        viewport={{ once: true }} // Only animate once
      >
        <img
          src={Signup}
          alt="Sign Up"
          className="w-full h-full object-contain object-center"
        />
      </motion.div>

      {/* Animated Content */}
      <motion.div
        className="w-full max-w-[1280px] mx-auto mt-8 sm:mt-12 md:mt-16 relative z-10" // Ensure content is above the image
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
        viewport={{ once: true }} // Only animate once
      >
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16">
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 sm:mt-12 md:mt-20"
            initial={{ opacity: 0, x: -50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            <h2 className="font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight sm:leading-[61px] text-[#002245]">
              Send your coins without hassle
            </h2>
            <p className="font-normal text-lg sm:text-[24px] text-[#99A0E4] leading-relaxed sm:leading-[31px] mt-4">
              Sign up now to get started.
            </p>
          </motion.div>

          {/* Right Section (Sign-Up Form) */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.8, delay: 0.6 }} // Animation duration and delay
            viewport={{ once: true }} // Only animate once
          >
            <div className="bg-white w-full max-w-[600px] rounded-[16px] px-6 sm:px-8 md:px-[64px] py-8 sm:py-12 md:py-[56px]">
              <form className="space-y-6">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div>
                    <p className="text-[#002245]">Full Name</p>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full p-3 sm:p-4 border rounded-md mt-2 focus:outline-none"
                      required
                    />
                  </div>
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
                    <p className="text-[#002245]">Choose a password</p>
                    <input
                      type="password"
                      placeholder="Enter a password"
                      className="w-full p-3 sm:p-4 border rounded-md focus:outline-none mt-2"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" required />
                  <p className="text-[#5D5D5D]">
                    By signing up, you agree to Coinly’s{' '}
                    <Link to="/terms" className="text-[#0171E5] hover:underline">
                      Terms of Use
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-[#0171E5] hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <button className="mx-auto w-full p-3 sm:p-4 bg-[#1A7FE8] text-white rounded-md hover:bg-[#1560b5] transition duration-300">
                  Continue
                </button>
              </form>
              <div className="mt-6">
                <p className="text-[#ADAFC2] text-center">
                  Already a Coinly user?{' '}
                  <Link to="/signIn" className="text-[#1A7FE8] hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="font-sans font-normal text-sm sm:text-[14px] text-[#5D5D5D] leading-[25px] text-center mt-8 sm:mt-12 md:mt-16 pb-6 sm:pb-8 md:pb-12 relative z-10" // Ensure footer is above the image
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8, delay: 0.8 }} // Animation duration and delay
        viewport={{ once: true }} // Only animate once
      >
        All rights reserved. Coinly is an assessment webpage design by John Ayanyemi for Checklearn, 2024. Built by Balikis Oladipupo
      </motion.p>
    </div>
  );
};

export default SignUpPage;