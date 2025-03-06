import forward from '../assets/forward.svg'
import phone2 from '../assets/Images/phone2.png'
const MarketPage = () => {
  return (
    <div className="px-[80px] mt-[300px] h-[560px] w-[1280px]">
        <div className='bg-[#E6FAFF] rounded-[65px] pt-[50px] px-[100px]'>
            <div className='flex flex-row'>
              <div className='w-full mr-[80px]'>
                      <h1 className='font-sans font-medium text-[56px] text-[#002245] leading-[64px]'>Stay on top <br/>of the market
                      </h1>
                        <p className='pt-5 text-[20px]font-sans font-normal leading-[30px] text-[#5D5D5D]'>Crypto news in the app gets you real time insights for<br/> top coins.
                           And with price alerts, you can make trading <br/>decisions quickly — without being glued to your phone.</p>
                          <div>
                         <button className='text-white bg-blue py-4 px-12 rounded-[30px] mt-[100px] flex items-center
                          gap-1 hover:gap-2 ease-in duration-300'>Get Started <img src={forward} /></button>
                        </div>
                      </div>
                      <div className='w-full'>
                          <img src={phone2}/>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default MarketPage