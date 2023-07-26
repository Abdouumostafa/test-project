import OurServicesComponent from "../components/OurServicesComponent";

const OurServices = () => {
  return <div className="bg-[#171836] py-14 rounded-t-[30px] text-white">
    <div className="fixed-padding">
    <h1 className="text-[26px] font-bold">خدماتنا</h1>
    <p className="text-[18px]">كل الخدمات التي تحتاجونها في مكان واحد وبأيد أمينة</p>
    <OurServicesComponent /> 
    <div className="flex items-center justify-center gap-4 mt-8">
        <div className="w-[50px] h-[25px] bg-[#37ABDE99] rounded-[40px]"></div>
        <div className="w-[100px] h-[25px] bg-white rounded-[40px]"></div>
    </div>       
    </div>
  </div>;
}
export default OurServices