import forward from '../assets/forward.svg';
import phone2 from '../assets/Images/phone2.png';

const MarketPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-[80px] mt-16 sm:mt-20 md:mt-[100px] w-full max-w-[1280px] mx-auto">
      <div className="overflow-hidden bg-[#E6FAFF] rounded-3xl sm:rounded-[65px] pt-6 sm:pt-12 md:pt-[50px] px-6 sm:px-8 md:px-16 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-1/2 lg:mr-8 xl:mr-[80px] lg:flex lg:gap-5 flex-col">
            <h1 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#002245] leading-tight sm:leading-[64px]">
              Stay on top <br className="hidden sm:block" />
              of the market
            </h1>
            <p className="pt-4 sm:pt-5 text-base sm:text-lg md:text-[20px] font-sans font-normal leading-relaxed sm:leading-[30px] text-[#5D5D5D]">
              Crypto news in the app gets you real time insights for <br className="hidden sm:block" />
              top coins. And with price alerts, you can make trading <br className="hidden sm:block" />
              decisions quickly — without being glued to your phone.
            </p>
            <div className="mt-8 sm:mt-12 md:mt-[50px]">
              <button className="text-white bg-blue py-2 mb-10 sm:py-4 px-6 sm:px-12 rounded-[30px] flex items-center gap-1 hover:gap-2 transition duration-150">
                Get Started <img src={forward} alt="Forward" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img src={phone2} alt="Phone" className="w-full max-w-[400px] lg:max-w-none relative lg:top-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;