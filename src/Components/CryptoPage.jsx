import safes from "../assets/safes.svg";
import line from "../assets/line.svg";
// import circle from '../assets/circle.svg'
const CryptoPage = () => {
  return (
    <div className="h-[950px] mt-20">
      <div className="bg-[#0012BC] rounded-t-[60px] pt-[50px] px-[80px]">
        <div className="text-center flex justify-center items-center">
          <h2 className="mb-20 font-sans font-medium text-[#FFFFFF] text-[56px] leading-[]">
            Keep your crypto safe
          </h2>
        </div>
        <div className="flex flex-row">
          <div className="w-full pb-36 pl-7"> 
            <img src={safes} className="w-[430px]" />
          </div>
          <div className="w-full pr-[80px]">
            <div className=" gap-5">
              <div className="flex flex-row gap-3">
              <div>
                <img src={line} className='custom-image' />
              </div>
              <div>
              <div>
                <h2 className="font-sans font-medium text-[32px] text-[#FFFFFF]">
                  Insured and Protected
                </h2>
                <p className="mt-4 font-sans font-normal text-[20px] text-[#CCD0F2] leading-[30px]">
                  Insurance held by us and our custodial partners helps protect
                  your crypto against crime like hacks or theft. Our partners
                  have over $200M in cold storage coverage each.
                </p>
              </div>
              <div>
                <h2 className="font-sans font-medium text-[32px] text-[#FFFFFF]">
                  Complaint all the way
                </h2>
                <p className="mt-4 font-sans font-normal text-[20px] text-[#CCD0F2] leading-[30px]">
                  We built our platform with regulatory guidance from the
                  get-go. We work with regulators to make sure our app is
                  reducing risk for crypto where possible.
                </p>
              </div>
              </div>
              
              </div>
              
              {/* <ul>
                  <li className='relative flex gap-6 pb-5 items-baseline'>
                    <div className='before:absolute before:left-[3.0px] before:h-full before:w-[1px] before:bg-white'>
                      <img src={circle} className=''/>
                    </div>
                    <div>
                      <h2 className='font-sans font-medium text-[32px] text-[#FFFFFF]'>Insured and Protected</h2>
                      <p className='mt-4 font-sans font-normal text-[20px] text-[#CCD0F2] leading-[30px]'>Insurance held by us and our custodial partners helps protect your crypto against crime like hacks or theft. Our partners have over $200M in cold storage coverage each. 
                      </p>
                    </div>
                  </li>
                  <li className='relative flex gap-6 pb-5 items-baseline'>
                    <div className='before:absolute before:left-[3.5px] before:w-[1px] before:bg-white'>
                      <img src={circle} className=''/>
                    </div>
                    <div>
                      <h2 className='font-sans font-medium text-[32px] text-[#FFFFFF]'>Complaint all the way</h2>
                      <p className='mt-4 font-sans font-normal text-[20px] text-[#CCD0F2] leading-[30px]'>We built our platform with regulatory guidance from the get-go. We work with regulators to make sure our app is reducing risk for crypto where possible.
                      </p>
                    </div>
                  </li>
                </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPage;
