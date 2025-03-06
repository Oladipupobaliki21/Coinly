import logo2 from '../assets/logo2.svg'
import forward from'../assets/forward.svg'
import { Link } from 'react-router'
const MainAboutPage = () => {
  return (
    <div className='bg-[#F7FBFE] min-h-screen items-center px-4'>
        <div>
        <header>
        <nav className='flex justify-between px-[80px] pb-3 pt-[30px] items-center'>
          <div> <Link to='/'><img src={logo2}/></Link></div>
          <div className='flex gap-7 items-center'>
            <Link to ='/about'>About Us</Link>
            <Link to ='/faq'>FAQs</Link>
            <Link to='/signIn' className='text-blue border border-blue py-2 px-5 rounded-[30px] font-sans hover:gap-2 ease-in duration-300'>Sign in</Link>
            <Link className='text-white bg-blue py-3 px-6 rounded-[30px] gap-1 flex items-center hover:gap-2 ease-in duration-300'>Get Started <img src={forward} /> </Link>
          </div>
        </nav>
        </header>
        <section className=" w-full text-center pt-[5rem]">
                <div className="">
                  <h5 className='font-medium text-[20px] text-black'>WHAT WE DO</h5>
                  <h1 className="text-[#002245] text-[88px] leading-height font-medium">Providing smart,<br /> simple investment </h1>
                  <p className="mt-4 text-[20px] text-ash leading-height-1">We started by providing smart, simple investing, without the high fees and account <br/>minimums associated with traditional investment management.</p>
                </div>
                <div className='w-full flex justify-center items-center'>
                  <button className='text-white bg-blue py-4 px-12 rounded-[30px] mt-6 flex items-center 
                  gap-1 hover:gap-2 ease-in duration-300'>Get Started <img src={forward} /></button>
                </div>
              </section>
        </div>
    </div>
  )
} 

export default MainAboutPage