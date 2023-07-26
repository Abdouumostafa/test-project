import HomeLayout from "../components/HomeLayout"
import Navbar from "../components/Navbar"
import bgImage from '../assets/home__images/homeBack.svg'
import {FaWhatsapp} from 'react-icons/fa'

const HomePage = () => {
  return (
    <main className="relative w-full">
        <img src={bgImage} alt="background image" className="absolute w-[400px] z-30 top-0 right-0"/>
        <div className="fixed z-50 text-[32px] text-white left-[20px] bottom-[20px] bg-[#25D366] p-2 rounded-full cursor-pointer"><FaWhatsapp /></div>
        <Navbar />
        <HomeLayout />
    </main>
  )
}
export default HomePage