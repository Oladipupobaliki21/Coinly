import logo2 from '../assets/logo2.svg'
import forward from '../assets/forward.svg'
import faqillus from '../assets/question.svg'
import { Link } from 'react-router'


const Faqs = () => {
  return (
    <div className='bg-[#F7FBFE] min-h-screen items-center px-4'>
      <div>
        <header>
          <nav className='flex justify-between px-[80px] pb-3 pt-[30px] items-center'>
            <div> <Link to='/'><img src={logo2} /></Link></div>
            <div className='flex gap-7 items-center'>
              <Link to='/about'>About Us</Link>
              <Link to='/faq'>FAQs</Link>
              <Link to='/signIn' className='text-blue border border-blue py-2 px-5 rounded-[30px] font-sans hover:gap-2 ease-in duration-300'>Sign in</Link>
              <Link className='text-white bg-blue py-3 px-6 rounded-[30px] gap-1 flex items-center hover:gap-2 ease-in duration-300'>Get Started <img src={forward} /></Link>
            </div>
          </nav>
        </header>
        <div className='flex items-center justify-center flex-col'>
          <div className='mt-[80px]'>
            <img src={faqillus} />
          </div>
          <div>
            <h2 className='mt-[64px] font-medium text-[56px] leading-[60px] text-[#002245]'>Frequently Asked Question</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs