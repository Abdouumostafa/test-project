import { servicesElements } from "../assets/data"

const OurServicesComponent = () => {
  return (
    <div className="overflow-hidden cont">
    <div className="animation">
<div className="flex lg:flex-nowrap flex-wrap gap-10 justify-center items-center mt-10">
            {servicesElements.map(({id,path,height,width,viewBox,title,text})=>{
                return(<div key={id} className="group duration-300 hover:bg-[#EF2B2D] text-black hover:text-white bg-white rounded-xl p-4 h-[300px] w-[320px] text-center">
                    <svg className="mx-auto my-4 group-hover:fill-white fill-[#EF2B2D] duration-300" width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
                        <path d={path}/>
                    </svg> 
                    <h2 className="text-[26px] font-bold mt-6">{title}</h2>
                    <p className="text-[18px] mt-3">{text}</p>                   
                </div>
                )
                ;
            })}
        </div>        
    </div>        
    </div>

        
  )
}
export default OurServicesComponent