import { useState } from "react";
import { projects } from "../assets/data"
import OurProjectsElements from "../components/OurProjectsElements"

const projectCategories = new Set(projects.map(({category})=> category));
const allCategories = ['الكل', ...projectCategories]

const OurProjects = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [mainProjects, setMainProjects] = useState(projects)

  const handleClick = (id) => setActiveBtn(id)
  const filterItems = (category) => {

    if(category === 'الكل'){
      return setMainProjects(projects)
    }

    const newItems = projects.filter((item) =>item.category === category)
    return setMainProjects(newItems)
  }


  return (
    <div className="py-14 text-white bg-[#171836] rounded-t-[30px]">
        <div className="fixed-padding">
            <h1 className="text-[32px] font-bold">دعنا نعرفك علي مشاريعنا السابقة</h1>
            <p className="text-[22px] my-4">اكتشف اهم مشاريعنا في السنوات الماضية</p>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
              {allCategories.map((category, index)=>{
                return <div key={index} onClick={() =>{
                   handleClick(index)
                  filterItems(category)
                  }} className={index === activeBtn ? "active py-3 px-6 border border-[#EF2B2D] rounded-xl cursor-pointer hover:bg-[#EF2B2D] hover:text-white duration-300" : 'py-2 px-4 bg-white text-black border border-[#EF2B2D] rounded-xl cursor-pointer hover:bg-[#EF2B2D] hover:text-white duration-300'}>{category}</div>
              })}
            </div>
            <OurProjectsElements projects={mainProjects}/>
        </div>
    </div>
  )
}
export default OurProjects