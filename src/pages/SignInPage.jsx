import React from 'react'
import logo2 from '../assets/logo2.svg' 
import signin from '../assets/Images/Signin.png'
import { Link } from 'react-router'
const SignInPage = () => {
  return (
    <div className='min-h-screen bg-[#E6F1FC] bg-cover bg-center'>
        
        <nav className='flex justify-between px-[80px]  pt-[30px] items-center'>
          <div>
           <Link to='/'><img src={logo2}/></Link>
           </div>
        </nav>
        <div className='' >
        <img src={signin}/>
        </div>
        <div className='flex items-center justify-center h-screen min-w-screen absolute inset-20'> 
        <div className='bg-white w-[600px] rounded-[16px] px-[64px] py-[56px]  h-[540px] pb-5'>
     
            <h6 className='text-center text-[24px] text-[#99A0E4] font-normal mb-4'>Welcome back! Sign into your account</h6>
        <form className='space-y-6 '>
          <div className='flex flex-col gap-7 mb-3'>
          <div>
          <p className='text-[#002245]'>Email Address</p>
            <input type='email'placeholder='Enter your email address' className='w-full p-4 border rounded-md mt-2 focus:outline-none' required/>
          </div>
          <div>
          <p className='text-[#002245]'>Password</p>
          <input type='password'placeholder='Enter your password' className='w-full p-4 border rounded-md focus:outline-none mt-2 ' required/>
          <p className='text-right text-[#1A7FE8]'>Forget your password?</p>
          </div>
          
          </div>
        <button className='mx-auto w-full p-4 bg-[#1A7FE8] text-white rounded-md'>Sign in</button>

        </form>
        <div className='mt-6'>
        <p className='text-[#ADAFC2]'>New to Coinly? 
        <Link to='/signUp' className='text-[#1A7FE8]'> Sign Up</Link></p>
        </div>
        </div>
        </div>
        <p className='font-sans font-normal text-[14px] text-[#5D5D5D] leading-[25px] text-center'>All rights reserved. Coinly is an 
        assesment webpage design by John Ayanyemi for Checklearn, 2024. Built by Balikis Oladipupo</p>
    </div>
    
  )
}

export default SignInPage