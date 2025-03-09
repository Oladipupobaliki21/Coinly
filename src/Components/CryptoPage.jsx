import safes from "../assets/safes.svg";
import line from "../assets/Crypto-Safe-Illustration.svg";

const CryptoPage = () => {
  return (
    <div className="min-h-screen mt-10 sm:mt-20">
      <div className="bg-[#0012BC] rounded-t-3xl sm:rounded-t-[60px] pt-8 sm:pt-12 md:pt-[50px] px-4 sm:px-8 md:px-16 lg:px-[80px] pb-3">
        <div className="text-center">
          <h2 className="mb-8 sm:mb-12 md:mb-20 font-sans font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            Keep your crypto safe
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pb-8 sm:pb-12 md:pb-16 lg:pb-36 pl-0 lg:pl-7">
            <img src={safes} alt="Safes" className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[430px]" />
          </div>
          <div className="w-full lg:w-1/2 pr-0 lg:pr-[80px]">
            <div className="space-y-8 sm:space-y-12 flex gap-5 items-center">
              <div>
                <img src={line} alt="Line" className="w-10 sm:w-8 h-44" />
              </div>
              <div className='flex flex-col items-center gap-10'>
                <div className="flex flex-row gap-4 sm:gap-6">
                  <div>
                    <h2 className="font-sans font-medium text-2xl sm:text-3xl md:text-[32px] text-white">
                      Insured and Protected
                    </h2>
                    <p className="mt-2 sm:mt-4 font-sans font-normal text-base sm:text-lg md:text-[20px] text-[#CCD0F2] leading-relaxed sm:leading-[30px]">
                      Insurance held by us and our custodial partners helps protect
                      your crypto against crime like hacks or theft. Our partners
                      have over $200M in cold storage coverage each.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 sm:gap-6">
                  <div>
                    <h2 className="font-sans font-medium text-2xl sm:text-3xl md:text-[32px] text-white">
                      Complaint all the way
                    </h2>
                    <p className="mt-2 sm:mt-4 font-sans font-normal text-base sm:text-lg md:text-[20px] text-[#CCD0F2] leading-relaxed sm:leading-[30px]">
                      We built our platform with regulatory guidance from the
                      get-go. We work with regulators to make sure our app is
                      reducing risk for crypto where possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPage;