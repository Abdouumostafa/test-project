import mainPic from '../assets/services__images/mainPic.svg' ;
import mobile from '../assets/services__images/mobile.svg'
import row from '../assets/services__images/row.svg'
import {TbDeviceMobileCode} from 'react-icons/tb'
import {BsGlobe2} from 'react-icons/bs'

const AboutUs = () => {
  return (
    <div className="py-8 leading-10 fixed-padding">
        <h1 className=" ss:text-[42px] text-[36px] text-center mb-5">من نحن</h1>
        <p className="text-center ss:text-[22px] text-[18px]">هؤلاء وثقوا بنا , كن انت التالي</p>
        <p className="ss:text-[22px] text-[18px]">نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بأفضل الخبرات والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا باصحاب الشركات والافكار الناشئه , انتهاء بالشركات العملاقه وأنظمة الدفع والبنوك</p>
        <div className="flex flex-wrap md:flex-row flex-col items-center justify-between gap-10 mt-6">
            <div className='flex-1 cursor-pointer relative rounded-[14px] shadow-lg p-5 overflow-hidden hover:bg-[#EF2B2D] group duration-300 border border-white hover:border-[#EF2B2D]'>
                <span className='bg-[#EF2B2D] text-[48px]  text-white rounded-full absolute pl-[25px] pr-[40px] py-[20px] top-[-15px] right-[-30px] group-hover:text-[#EF2B2D] group-hover:bg-white'>1</span>
                <span className='absolute top-[20px] left-[20px] group-hover:text-white text-[#EF2B2D] text-[28px]'><TbDeviceMobileCode /></span>
                <div>
                    <br />
                <h2 className='group-hover:text-white text-[32px] font-bold'> + 10</h2>
                <p className='group-hover:text-white'>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>                    
                </div>
            </div>
            <img src={mainPic} alt="" className='lg:w-[520px] md:w-[420px] md:block hidden'/>
            <div className='w-[200px] md:hidden block relative'>
                <img src={row} alt="right" className='w-[110px] top-[-10px] left-[-85px] absolute rotate-[240deg]'/>
                <img src={mobile} alt="mobile" />
                <img src={row} alt="left" className='w-[110px] bottom-[-10px] right-[-100px] absolute rotate-[50deg]'/>
            </div>
            <div className='flex-1 cursor-pointer relative rounded-[14px] shadow-lg p-5 overflow-hidden hover:bg-[#EF2B2D] group duration-300 border border-white hover:border-[#EF2B2D]'>
                <span className='bg-[#EF2B2D] text-[48px]  text-white rounded-full absolute pl-[25px] pr-[40px] py-[20px] top-[-15px] right-[-30px] group-hover:text-[#EF2B2D] group-hover:bg-white'>2</span>
                <span className='absolute top-[20px] left-[20px] group-hover:text-white text-[#EF2B2D] text-[28px]'><BsGlobe2 /></span>
                <div>
                    <br />
                <h2 className='group-hover:text-white text-[32px] font-bold'> + 13</h2>
                <p className='group-hover:text-white'>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>                    
                </div>
            </div>
        </div>
    </div>
  )
}
export default AboutUs