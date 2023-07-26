import { useState } from "react"
import { teamwork } from "../assets/data"
import TeamworkElements from "../components/TeamworkElements"

const categories = new Set(teamwork.map(({category})=> category)) 
const allCategories = ['الكل', ...categories]

const Teamwork = () => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [items, setItems] = useState(teamwork);

    const filterItems =(category)=>{
        // console.log(category)
        if(category === 'الكل'){
            return setItems(teamwork)
        }
        const newItems = teamwork.filter((item)=> item.category === category)
        return setItems(newItems)
    }

    const handleClick = (id)=> setActiveBtn(id)


  return (
    <div className="py-14 fixed-padding relative overflow-hidden">
        <h1 className="text-center text-[44px] font-bold mb-8">
        فريق العمل
        </h1>
        <div className="flex flex-wrap gap-10 items-center justify-center">
        {allCategories.map((category, index)=>{
            return <div key={index} onClick={()=> {
                handleClick(index)
                filterItems(category)
            }} className={index === activeBtn ? "active py-3 px-6 border border-[#EF2B2D] rounded-xl cursor-pointer hover:bg-[#EF2B2D] hover:text-white duration-300" : 'py-2 px-4 border border-[#EF2B2D] rounded-xl cursor-pointer hover:bg-[#EF2B2D] hover:text-white duration-300'}>{category} </div>
        })}            
        </div>
        <TeamworkElements items={items}/>
        <div className="absolute animated-circle p-[50px] md:w-[600px] sm:w-[450px] w-[300px] md:h-[600px] sm:h-[450px] h-[300px] xl:left-[35%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[14%]">
          <div className="animated-circle-2 md:w-[500px] sm:w-[350px] w-[200px] md:h-[500px] sm:h-[350px] h-[200px]"></div>
        </div>
    </div>
  )
}
export default Teamwork