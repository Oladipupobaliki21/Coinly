import faqillus from '../assets/question.svg';
import Navbar from './Navbar';

const Faqs = () => {
  return (
    <div className="bg-[#F7FBFE] min-h-screen items-center px-4 sm:px-8 md:px-16 lg:px-[80px]">
      <Navbar />
      <div className="flex items-center justify-center flex-col">
        <div className="mt-8 sm:mt-12 md:mt-[80px]">
          <img src={faqillus} alt="FAQ Illustration" className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]" />
        </div>
        <div className="mt-8 sm:mt-12 md:mt-[64px]">
          <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-[60px] text-[#002245] text-center">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Faqs;