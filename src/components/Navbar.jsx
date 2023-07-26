import { useState } from 'react'
import {navLinks} from '../assets/data'
import darkMode from '../assets/home__images/darkmode.svg'
import arLang from '../assets/home__images/egy.svg'
import {FaBars, FaRegWindowClose} from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (

    <div className="flex justify-between items-center py-5 fixed-padding relative z-50">
        <div className='flex items-center gap-6'>
            {/* SMALL SCREENS */}
            <div onClick={()=> setIsOpen(!isOpen)} className='md:hidden block text-[32px] text-[#EF2B2D] cursor-pointer'>
                {!isOpen? <FaBars /> : <FaRegWindowClose className='text-red-700'/> }
            </div>
            <div className="w-[70px] h-[70px] rounded-full bg-[#D9D9D9]"></div>
        </div>


       {/* BIG SCREENS */}

        <div className='md:flex hidden gap-[30px] items-center text-[#EF2B2D] font-bold '>
        {navLinks.map((navLink)=>{
            const {id,title} = navLink;
            return <p key={id} className='cursor-pointer text-[24px]'>{title}</p>
        })}
        </div>

        {/* SMALL SCREENS */}
        <div className='md:hidden block'>
        {isOpen? <div className="absolute bottom-[-280px] min-h-full left-0 w-full text-center bg-gradient-to-r from-sky-500 to-indigo-500 z-10">
            {navLinks.map((navLink)=>{
                const{id,title} =navLink;
                return <p key={id} className='text-white m-auto w-fit p-4 cursor-pointer font-bold'>
                    {title}
                </p>
            })}
        </div> : ''}
        </div>


        <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 border-[2px] border-[#EF2B2D] rounded p-2 text-[#EF2B2D] font-bold cursor-pointer hover:text-[#fff] hover:bg-[#EF2B2D] duration-500">
                <img src={arLang} alt="Arabic Language" />
                <div className='xs:block hidden'>
                    اللغة العربية 
                </div>
            </div>
            <img src={darkMode} alt="dark mode" />
        </div>
    </div>
  )
}
export default Navbar