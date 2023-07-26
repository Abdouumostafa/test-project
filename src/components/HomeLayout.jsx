import homeImg from '../assets/home__images/home.svg';
import {BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'

const HomeLayout = () => {
  return (
    <div className='relative bg-[#171836] h-fit xl:py-16 pt-16 rounded-t-[30px]'>
      
    <div className=" flex md:flex-row flex-col justify-between fixed-padding items-start">        
    
        <div className="text-white font-bold flex-1">
          <h1 className='sm:text-[60px] text-[42px] mb-3'>ابحث عن أفضل <span className='text-[#EF2B2D]'>الحلول</span> البرمجية</h1>
          <p className='sm:text-[25px] text-[18px] mb-10'>خيارك الاول لتحول فكرتك الي واقع مع افضل سعر ل اعلي جودة</p>
          <button className='p-4 hover:bg-transparent rounded-xl z-40 bg-[#EF2B2D] border border-[#EF2B2D] duration-500'>
            الحصول على استشارة
          </button>
        </div>
        <div className='flex-1 relative'>
          <img src={homeImg} alt="home image" className='w-full'/> 
              <div className='bg-[#3FB3E64D] rounded-full translate-x-[50%] translate-y-[50%] blur-[90px] h-[40%] w-[50%] absolute top-[10%] left-0'></div>
        </div>
        </div>
        <div className='xl:absolute block bottom-0 py-5 w-full text-white rounded-t-[30px] bg-[#3FB3E699] z-30'>
        <div className="fixed-padding flex flex-wrap gap-[50px] md:flex-row flex-col">
          <div className='flex-1'>
            <h2 className='md:text-[32px] text-[24px] font-bold'>هدفنا</h2>
            <p className='sm:text-[22px] text-[18px]'>أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء تطبيقات و موقع ويب من البداية يناسب احتياجاتك</p>
          </div>
          <div className='flex-1 text-center'>
            <h2 className="font-bold md:text-[32px] text-[24px]">صفحاتنا علي السوشيال ميديا</h2>
            <div className="flex gap-4 items-center justify-center sm:text-[26px] text-[22px] mt-5">
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsYoutube />
              <BsLinkedin />
            </div>
          </div>
        </div>           
        </div>
    </div>

  )
}
export default HomeLayout