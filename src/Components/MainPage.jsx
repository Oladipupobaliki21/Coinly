import forward from '../assets/forward.svg';
import hero from '../assets/hero.svg';
import Navbar from './Navbar';

const MainPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col px-4 sm:px-8 md:px-16 lg:px-[80px] bg-[#F7FBFE] overflow-hidden">
      <Navbar />
      <section className="w-full text-center pt-8 sm:pt-12 md:pt-[5rem]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-sans font-medium text-[#002245] leading-tight sm:leading-[1.2]">
            Send your coins <br className="hidden sm:block" /> without hassle
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-[20px] text-ash leading-relaxed sm:leading-[1.6]">
            With Coinly, true borderless payments are possible. We make it <br className="hidden sm:block" />
            easier to send, receive, and stack those coins in mere seconds.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-6 sm:mt-8">
          <button className="text-white bg-blue py-2 sm:py-4 px-6 sm:px-12 rounded-[30px] flex items-center gap-1 hover:gap-2 transition duration-300">
            Get Started <img src={forward} alt="Forward" />
          </button>
        </div>
      </section>
      <div className="w-full flex justify-center items-center mt-8 sm:mt-12 md:mt-16">
        <img src={hero} alt="Hero" className="w-full max-w-[800px]" />
      </div>
    </div>
  );
};

export default MainPage;