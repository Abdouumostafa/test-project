import HelpComponents from "../components/HelpComponents"

const Help = () => {
  return (
    <div className="py-14 relative overflow-hidden">
        <div className="fixed-padding">
            <h1 className="text-center text-[34px]">نحن هنا <span className="text-[#EF2B2D]">لمساعدتك</span></h1>
            <p className="text-center text-[22px]">تعرف علي خطوات العمل علي اي مشروع</p>
        </div>
        <div className="absolute animated-circle p-[50px] md:w-[600px] sm:w-[450px] w-[300px] md:h-[600px] sm:h-[450px] h-[300px] xl:left-[35%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[14%]">
          <div className="animated-circle-2 md:w-[500px] sm:w-[350px] w-[200px] md:h-[500px] sm:h-[350px] h-[200px]"></div>
        </div>
        <HelpComponents />
    </div>
  )
}
export default Help