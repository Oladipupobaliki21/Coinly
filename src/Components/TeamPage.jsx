import dami from "../assets/Images/Dami.png"
import tunde from "../assets/Images/Tunde.png"
import mariam from "../assets/Images/Mariam.png"

const TeamPage = () => {
  return (
    <div  className="px-[80px] mt-[50px] w-[1280px] mb-[100px]">
         <h2 className="text-[48px] font-sans font-medium text-navyBlue mb-[30px]">Meet the Team</h2>
        <div className='bg-[#E6FAFF] rounded-[65px] py-[136px] px-[165px]'>
        <div className='flex justify-center items-center gap-[70px]'>
            <div className='w-[270px] gap-4 flex flex-col'>
                <img src={dami} className='rounded-[30px] bg-[#04D1FF]'/>
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-[20px] text-[#002245]">Damilola Afolabi</h3>
                  <p className="text-[#5D5D5D] text-[20px] font-normal">CEO</p>
                </div>
            </div>
            <div className='w-[270px] gap-4 flex flex-col'>
                <img src={tunde} className='rounded-[30px] bg-[#04D1FF]'/>
                <div className="flex flex-col gap-1">
                <h3 className="font-medium text-[20px] text-[#002245]">Tunde Omikunle</h3>
                <p  className="text-[#5D5D5D] text-[20px] font-normal">CTO</p>
                </div>
               
            </div>
             <div className='w-[270px] gap-4 flex flex-col'>
                <img src={mariam}className='rounded-[30px] bg-[#04D1FF]'/>
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-[20px] text-[#002245]">Maryam Bello</h3>
                  <p className= "text-[#5D5D5D] text-[20px] font-normal">Account Officer</p>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default TeamPage