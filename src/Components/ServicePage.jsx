import phone1 from '../assets/Images/phone1.png'
import forward from '../assets/forward.svg'

const ServicePage = () => {
  return (
    <div className="px-[80px] mt-[100px] h-[560px] w-[1280px]">
        <h2 className="text-[48px] font-sans font-medium text-navyBlue mb-[30px]">Our services</h2>
        <div className='bg-[#E6F1FC] rounded-[65px] pt-[50px] px-[100px]'>
          <div className='flex flex-row'>
        <div className='w-full'>
          <img src={phone1}/>
        </div>
        <div className='w-full ml-[80px]'>
        <h1 className='font-sans font-medium text-[56px] text-[#002245] leading-[64px]'> Get up to 
          <br/><span className='font-sans font-semibold text-[56px] text-[#002245] leading-[64px]'>$5,000</span> instantly</h1>
          <p className='pt-5 text-[20px]font-sans font-normal leading-[30px] text-[#5D5D5D]'>Sign up and start trading in just minutes. 
            Instant<br/> deposits let you buy crypto right away — no need to <br/> wait for funding.</p>
            <div>
           <button className='text-white bg-blue py-4 px-12 rounded-[30px] mt-[100px] flex items-center gap-1 hover:gap-2 ease-in duration-300'>Get Started <img src={forward} /></button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage 