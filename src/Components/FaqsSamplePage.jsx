import React from 'react'
import { useState } from 'react'
import { GoChevronUp,GoChevronDown } from "react-icons/go";
// import{motion,AnimatePresense}from "framer-motion"
// import autoprefixer from 'autoprefixer';

const FaqsSamplePage = () => {
    const [isOpen, setIsopen] = useState(null);
    const questions = [
        {
            id: 1,
            question: "How are the coins stored, what’s the security/insurance?",
            answer: "The majority of your coins are held in offline cold storage with our custodial partners. All of our custodial partners are regulated entities themselves — and they have over $200M in insurance coverage each.",
        },
        {
            id: 2,
            question: "What type of accounts can i open with coinly crypto?",
            answer: "Cryptocurrencies can only be held in a non-registered account with Coinly Crypto.",
        },
        {
            id: 3,
            question: "I'm new to crypto, what kind of support can i get ?",
            answer: "Our app is designed to be simple — but if you run into any questions with your account, you can always contact our support team by chat, email, or phone and they’ll be happy to help. And yes, you’ll always be put in touch with a real human.",
        },
    ];
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-[89%] m-auto p-8 max-w-[1400px]'>
                {questions.map((q) => (
                    <div key={q.id}
                        className='mb-4'>
                            <div className="w-full
                 bg-[#E6F1FC] rounded-[50px] px-24 py-10 flex flex-col gap-3 focus:outline-none h-full">
                        <button className='flex justify-between items-center w-full text-[2rem] font-medium'
                             onClick={() => setIsopen(isOpen === q.id ? null : q.id)} >
                                <div className=' font-medium text-[#002245]'>
                            {q.question} 
                            </div>
                            {/* <div className={`transition-transform duration-300 ease-in-out ${
                                isOpen === q.id ? "-rotate-180": "rotate-0"}`}> */}
                            {isOpen === q.id ? <GoChevronUp/> : <GoChevronDown/>}
                            {/* </div> */}
                        </button>
                        
                        {isOpen === q.id &&
                            <div className='text-xl mb-6 mt-3'>
                                <p className='font-normal text-[#000000]'>{q.answer}</p>
                            </div>
                            }
                            </div>
                            
                    



                    </div>

                ))}
            </div>
        </div>
    )
}

export default FaqsSamplePage