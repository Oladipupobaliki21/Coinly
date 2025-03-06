
import logo2 from '../assets/logo2.svg'
import { Link } from 'react-router'
import Signup from '../assets/Images/Signup.png'
const SignUpPage = () => {
  return (
    <div className='min-h-screen flex-col items-center px-4 bg-[#F7FBFE]'>
        <header>
        <nav className='flex justify-between px-[80px] pb-3 pt-[30px] items-center'>
          <div>
           <Link to='/'><img src={logo2}/></Link>
           </div>
        </nav>
      </header>
      <div>
      <img src={Signup}/>
      </div>
      <div className='absolute inset-20'>
      <div className='flex flex-row'>
      <div className='w-full mt-20'>
      <h2 className='w-[372px] font-medium text-[48px] leading-[61px] text-[#002245]'>Send your coins without hassle</h2>
        <p className='font-normal text-[24px] text-[#99A0E4] leading-[31px]'>Sign up now to get started.</p>
      </div>
       <div className='w-full'>
                <div className='bg-white w-[600px] rounded-[16px] px-[64px] py-[56px]  h-[600px] pb-5'>
                <form className='space-y-6 '>
                  <div className='flex flex-col gap-7 mb-3'>
                    <div>
                    <p className='text-[#002245]'> Full Name </p>
                    <input type='email'placeholder='Enter your full name' className='w-full p-4 border rounded-md mt-2 focus:outline-none' required/>
                    </div>
                  <div>
                  <p className='text-[#002245]'>Email Address</p>
                    <input type='email'placeholder='Enter your email address' className='w-full p-4 border rounded-md mt-2 focus:outline-none' required/>
                  </div>
                  <div>
                  <p className='text-[#002245]'>Choose a password</p>
                  <input type='password'placeholder='Enter a password' className='w-full p-4 border rounded-md focus:outline-none mt-2 ' required/>
                  </div>
                  </div>
                  <div className=''>
                  <input type='checkbox'/>  By signing  up, you agree to Coinly’s <Link className='text-[#0171E5]'>Terms of Use</Link> and  <Link className='text-[#0171E5]'>Privacy Policy </Link>
                  </div>
                 
                <button className='mx-auto w-full p-4 bg-[#1A7FE8] text-white rounded-md'>Continue</button>
        
                </form>
                <div className='mt-6'>
                <p className='text-[#ADAFC2]'>Already a Coinly user?
                <Link to='/signIn' className='text-[#1A7FE8]'> Sign In</Link></p>
                </div>
                </div>
               
      </div>
      </div>
      </div>
      <p className='font-sans font-normal text-[14px] text-[#5D5D5D] leading-[25px] text-center'>All rights reserved. Coinly is an 
      assesment webpage design by John Ayanyemi for Checklearn, 2024. Built by Balikis Oladipupo</p>
    </div>
  )
}

export default SignUpPage