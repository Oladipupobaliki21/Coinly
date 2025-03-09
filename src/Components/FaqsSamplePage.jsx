import { useState } from 'react';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';

const FaqsSamplePage = () => {
  const [isOpen, setIsOpen] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'How are the coins stored, what’s the security/insurance?',
      answer:
        'The majority of your coins are held in offline cold storage with our custodial partners. All of our custodial partners are regulated entities themselves — and they have over $200M in insurance coverage each.',
    },
    {
      id: 2,
      question: 'What type of accounts can I open with Coinly Crypto?',
      answer: 'Cryptocurrencies can only be held in a non-registered account with Coinly Crypto.',
    },
    {
      id: 3,
      question: "I'm new to crypto, what kind of support can I get?",
      answer:
        'Our app is designed to be simple — but if you run into any questions with your account, you can always contact our support team by chat, email, or phone and they’ll be happy to help. And yes, you’ll always be put in touch with a real human.',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FBFE]">
      <div className="w-[90%] max-w-[1400px] p-4 sm:p-8">
        {questions.map((q) => (
          <div key={q.id} className="mb-4">
            <div className="w-full bg-[#E6F1FC] rounded-[50px] px-6 sm:px-12 md:px-24 py-6 sm:py-10">
              <button
                className="flex justify-between items-center w-full text-xl sm:text-2xl md:text-[2rem] font-medium focus:outline-none"
                onClick={() => setIsOpen(isOpen === q.id ? null : q.id)}
              >
                <div className="font-medium text-[#002245] text-left">{q.question}</div>
                <div>
                  {isOpen === q.id ? <GoChevronUp /> : <GoChevronDown />}
                </div>
              </button>

              {isOpen === q.id && (
                <div className="overflow-hidden">
                  <p className="text-base sm:text-lg md:text-xl font-normal text-[#000000] mt-4">
                    {q.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsSamplePage;