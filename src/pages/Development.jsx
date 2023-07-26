import mainImg from '../assets/services__images/mobile.svg'
import rowLeft from '../assets/services__images/rowLeft.svg'
import rowRight from '../assets/services__images/rowRight.svg'
import {path1 ,path2, path3, path4} from '../assets/icon__image/icon.js'

const Development = () => {
  return (
    <div className="fixed-padding py-14 relative overflow-hidden">
        <div className="text-center">
        <h1 className="text-[38px] font-bold mb-4">يمكننا<span className="text-[#EF2B2D]"> تطوير تطبيقات الهاتف </span></h1>
        <p className="text-[22px] w-[70%] mx-auto">أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء تطبيقات / موقع ويب من البداية يناسب احتياجاتك</p>          
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8 gap-4">
            <div className="flex flex-col gap-4">
            <div className="group duration-300 hover:bg-[#EF2B2D] text-black hover:text-white bg-white rounded-xl p-4 text-center shadow-xl h-[250px] w-[300px]">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-[#EF2B2D] group-hover:fill-white mx-auto'>
<path d={path1}/>
</svg>

                <h2 className="text-[26px] font-bold my-4">تصميم واجهة المستخدم</h2>
                <p>من خلال تزودنا بما تحتاجه سنعمل علي انشاء واجهه مصتخدم سهله و مرنه</p>                   
            </div>  
            <div className="group duration-300 hover:bg-[#EF2B2D] text-black hover:text-white bg-white rounded-xl p-4 text-center shadow-xl h-[250px] w-[300px]">
            <svg width="54" height="57" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto fill-[#EF2B2D] group-hover:fill-white '>
<path d={path3}/>
</svg>

                <h2 className="text-[26px] font-bold my-4">السرعة</h2>
                <p>نحن مرنون في التعديلات ومع اخراج المشروع بأعلى جوده</p>                   
            </div>
            </div>
            <div className='relative w-[500px] xl:block hidden'>
            <img src={rowLeft} alt="" className='absolute w-[120px] top-[0px] left-0'/>
            <img src={rowRight} alt="" className='absolute w-[120px] top-[0px] right-[40px]'/>
            <img src={mainImg} alt="" className='w-[330px] mr-[40px]'/>
            <img src={rowLeft} alt="" className='absolute w-[120px] bottom-[150px] left-0'/>
            <img src={rowRight} alt="" className='absolute w-[120px] bottom-[150px] right-[-22px]'/>
            </div>
            <div className="flex flex-col gap-4">
            <div className="group duration-300 hover:bg-[#EF2B2D] text-black hover:text-white bg-white rounded-xl p-4 text-center shadow-xl h-[250px] w-[300px]">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-[#EF2B2D] group-hover:fill-white mx-auto'>
<path d={path2}/> </svg>                
<h2 className="text-[26px] font-bold my-4">كود قوي و مرن</h2>
                <p>يتم تنظيم الكود الخاص بك و تأمينه ليمنحك افضل أداء</p>                   
            </div>
            <div className="group duration-300 hover:bg-[#EF2B2D] text-black hover:text-white bg-white rounded-xl p-4  text-center shadow-xl h-[250px] w-[300px]">
            <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-[#EF2B2D] group-hover:fill-white mx-auto'>
<path d={path4}/>
</svg>

                <h2 className="text-[26px] font-bold my-4">سهل الاطلاق</h2>
                <p>سوف نقدم لك لوحه الادارة و كيفيه التعامل معها بشكل كامل </p>                   
            </div>            
            </div>
        </div>
        <div className="absolute animated-circle p-[50px] md:w-[600px] sm:w-[450px] w-[300px] md:h-[600px] sm:h-[450px] h-[300px] -z-10 xl:left-[35%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[14%]">
          <div className="animated-circle-2 md:w-[500px] sm:w-[350px] w-[200px] md:h-[500px] sm:h-[350px] h-[200px]"></div>
        </div>
    </div>
  )
}
export default Development