import React from 'react'

const Investment = () => {
  return (
    <div className="px-[80px] mt-[100px] w-[1280px]">
     <h2 className="text-[48px] font-sans font-medium text-navyBlue mb-[30px]">Diversified investment</h2>
    <div className='flex justify-center items-center gap-6 ml-[80px]'>
        <div className='w-[622px] h-[255px] bg-[#E6FAFF] rounded-[65px]'>
            <div className='px-[30px] py-[50px]'>
            <p className='font-normal text-[20px] w-[560px] leading-[31px] text-[#5D5D5D]'>
            We invest your money in a globally diversified portfolio of low-cost index funds, 
                and our cutting-edge technology helps you earn the best possible return, while optimizing your tax bill.
            </p>
            </div>  
        </div>    
        <div className='w-[622px] h-[255px] bg-[#EBF5FF] rounded-[65px]'>
            <div className='px-[30px] py-[50px]'>
            <p className='font-normal text-[20px] w-[560px] leading-[31px] text-[#5D5D5D]'>
            This means we do things like automatic rebalancing, dividend reinvesting, and tax loss harvesting — services 
            that were only available to the ultra rich until now or that most people found too time-consuming and tedious to do on their own.
            </p>
            </div>  
        </div>
    </div>

    </div>
  )
}

export default Investment