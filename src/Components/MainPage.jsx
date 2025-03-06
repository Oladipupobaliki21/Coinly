import logo2 from '../assets/logo2.svg' 
import forward from '../assets/forward.svg'
import hero from '../assets/hero.svg'
import { Link } from 'react-router'

const MainPage = () => {
  return (
    <div className='min-h-screen flex-col items-center px-4 bg-[#F7FBFE] h-[850px] overflow-hidden'>
      <div className=''>
      <header>
        <nav className='flex justify-between px-[80px] pb-3 pt-[30px] items-center'>
          <div>
           <img src={logo2}/>
           </div>
          <div className='flex gap-7 items-center'>
            <Link to='/about'>About Us</Link>
            <Link to='/faq'> FAQs</Link>
            <Link to='/signIn' className='text-blue border border-blue py-2 px-5 rounded-[30px] font-sans hover:gap-2 ease-in duration-300 hover-[#1A7FE8]' >Sign in</Link>
            <Link to='/signUp'className='text-white bg-blue py-3 px-6 rounded-[30px] gap-1 flex items-center gap-1 hover:gap-2 ease-in duration-200'>Get Started <img src={forward} /></Link>
          </div>
        </nav>
      </header>
      <section className=" w-full text-center pt-[5rem]">
        <div className="">
          <h1 className="text-[#002245] text-[88px] leading-height font-sans font-medium">Send your coins<br /> without hassle </h1>
          <p className="mt-4 text-[20px] text-ash leading-height-1">With Coinly, true borderless payments are possible. We make it<br /> easier
            to send, receive, and stack those coins in mere seconds.</p>
        </div>
        <div className='w-full flex justify-center items-center'>
          <button className='text-white bg-blue py-4 px-12 rounded-[30px] mt-6 flex items-center 
          gap-1 hover:gap-2 ease-in duration-300'>Get Started <img src={forward} /></button>
        </div>
      </section>
      <div className='flex justify-center items-center'>
        <img src={hero}/>
      </div>
      </div>
    </div>
  )
}

export default MainPage 