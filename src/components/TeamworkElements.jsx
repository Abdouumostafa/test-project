import { teamwork } from "../assets/data"

const TeamworkElements = ({items}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
            {items.map(({id, img, name, jobTitle, linkedIn, github, behance})=>{
                return <div key={id} className="bg-white z-30 w-[330px] shadow-lg p-5 rounded-lg text-center">
                    <img src={img} alt="person" className="h-[120px] flex mx-auto "/>
                    <h2 className=" font-bold text-[32px]">{name}</h2>
                    <p className="text-[#ADB1B8] capitalize text-[22px]">{jobTitle}</p>
                    <div className="flex gap-4 items-center justify-center my-5">
                        <img src={linkedIn} alt="" /><img src={github} alt="" /><img src={behance} alt="" />
                    </div>
                </div>
            })}
    </div>
  )
}
export default TeamworkElements