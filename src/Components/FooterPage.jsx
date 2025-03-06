import logo2 from '../assets/logo2.svg'
import forward from '../assets/forward.svg'
import Linkdln from '../assets/Linkdln.svg'
import Twitter from '../assets/Twitter.svg'
import IG from '../assets/IG.svg'
import Facebook from '../assets/Facebook.svg'
import Ytube from '../assets/Ytube.svg'
import Game from '../assets/Game.svg'
import { Link } from 'react-router'
const FooterPage = () => {
  return (
    <div className='w-full h-[450px]'> 
    <div className='mx-[80px]'>
        <div className='flex flex-row justify-between'> 
          <div>
        <h2 className='w-[691px] font-sans font-medium text-[88px] leading-[95px] h-[190px] mt-[-10px] text-[#002245]'>Set your money in motion</h2>
        </div>
        <div className='flex flex-col gap-3'>
        <h6 className='font-medium'>Company</h6>
        <ul className='flex flex-col gap-3'>
          <div>

          </div>
          <Link to="/about" className='font-sans font-normal text-[16px] leading-[25px]'>About Us</Link>
          <Link to='/faq'className='font-sans font-normal text-[16px] leading-[25px]'>FAQs</Link>
        </ul>
        </div>
       
        <div>
          <img src={logo2}/>
        </div>
        </div>
   
    <div className='flex justify-between'>
      <div>
    <button className='text-white bg-blue py-4 px-12 rounded-[30px] mt-6 flex gap-1'>Get Started <img src={forward}/></button>
    </div>
    <ul className='flex flex-row items-center gap-9'>
      <li><img src={Linkdln}/></li>
      <li><img src={Twitter}/></li>
      <li><img src={IG}/></li>
      <li><img src={Facebook}/></li>
      <li><img src={Ytube}/></li>
      <li><img src={Game}/></li>
    </ul>
    </div>
    <div className='border-[0.5px] border-[#9a9a9a] mt-12'></div>
    <h2 className=' mt-8 font-sans font-normal text-[14px] text-[#5D5D5D] leading-[25px]'>All rights reserved. Coinly is an 
      assesment webpage design by John Ayanyemi for Checklearn, 2024. Built by Balikis Oladipupo</h2>
    </div>
    </div> 
  )
}

export default FooterPage