import { techniques } from "../assets/data"

const TechniquesElement = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center mt-10">
        {techniques.map(({id,num, path, title})=>{
            return <div key={id} className='cursor-pointer relative rounded-[14px] shadow-lg p-10 w-[300px] overflow-hidden bg-white hover:bg-[#EF2B2D] group duration-300 border hover:border-[#EF2B2D]'>
            <span className='bg-[#EF2B2D] text-[48px]  text-white rounded-full absolute pl-[25px] pr-[40px] top-[-15px] right-[-30px] group-hover:text-[#EF2B2D] group-hover:bg-white'>{num}</span>
            <div className="flex items-center gap-10 justify-end">
            <div>
            <h2 className='group-hover:text-white text-center text-[40px] font-bold'>{title}</h2>
            </div>            
            <span className='z-10 group-hover:text-white text-[#EF2B2D] text-[28px]'>
            <svg className="group-hover:fill-white fill-black" width="22" height="27" viewBox="0 0 22 27" xmlns="http://www.w3.org/2000/svg">
              <path d={path} />
              </svg>
            </span>                
            </div>
        </div>
        })}
    </div>
  )
}
export default TechniquesElement