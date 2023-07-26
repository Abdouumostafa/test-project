import { helpComponents } from "../assets/data"

const HelpComponents = () => {
  return (
    <div className="flex relative z-50 flex-wrap gap-10 justify-center items-center mt-10 fixed-padding">
      {helpComponents.map(({id, num, path, width, height, viewBox, title, text})=>{
        return  <div key={id} className='cursor-pointer relative rounded-[14px] shadow-lg p-5 w-[300px] overflow-hidden bg-white hover:bg-[#EF2B2D] group duration-300 border border-white hover:border-[#EF2B2D]'>
                <span className='bg-[#EF2B2D] text-[48px]  text-white rounded-full absolute pl-[25px] pr-[40px] top-[-15px] right-[-30px] group-hover:text-[#EF2B2D] group-hover:bg-white'>{num}</span>
                <span className='absolute top-[20px] left-[20px] group-hover:text-white text-[#EF2B2D] text-[28px]'>
                <svg className="group-hover:fill-white" width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
                  <path d={path} />
                  </svg>
                </span>
                <div>
                    <br /><br />
                <h2 className='group-hover:text-white text-[32px] font-bold'>{title}</h2>
                <p className='group-hover:text-white text-[#00000099]'>{text}</p>                    
                </div>
            </div>
      })}
 
    </div>
  )
}
export default HelpComponents