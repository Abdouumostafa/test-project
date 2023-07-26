
const OurProjectsElements = ({projects}) => {
  return (
    <div className="text-center mt-8 flex flex-wrap justify-center items-center gap-8">
        {projects.map(({id, img})=>{
            return <div key={id}>
                <img src={img} alt="" className="w-[250px] h-[250px] rounded-lg"/>
            </div>
        })}
    </div>
  ) 
}
export default OurProjectsElements