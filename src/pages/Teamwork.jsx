import { useState } from "react"
import { teamwork } from "../assets/data"
import Pagination from "../components/Pagination"
import TeamworkElements from "../components/TeamworkElements"

const categories = new Set(teamwork.map(({category})=> category)) 
const allCategories = ['الكل', ...categories]

const Teamwork = () => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [items, setItems] = useState(teamwork);
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;


const filterItems = (category) => {
  if (category === 'الكل') {
    setItems(teamwork);
  } else {
    const newItems = teamwork.filter((item) => item.category === category);
    setItems(newItems);
  }
  setCurrentPage(1); 
};

const getCurrentItems = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

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
        <TeamworkElements items={getCurrentItems()}/>
        <Pagination items={items} itemsPerPage={itemsPerPage} handlePageChange={handlePageChange} currentPage={currentPage}/>

        <div className="absolute animated-circle p-[50px] md:w-[600px] sm:w-[450px] w-[300px] md:h-[600px] sm:h-[450px] h-[300px] xl:left-[35%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[14%]">
          <div className="animated-circle-2 md:w-[500px] sm:w-[350px] w-[200px] md:h-[500px] sm:h-[350px] h-[200px]"></div>
        </div>
    </div>
  )
}
export default Teamwork