import { useEffect, useState } from "react";
import Category from "./category/categoty";
import Jobs from "./jobs/jobs";

const Home = () => {
  const [jobs, setJobs] = useState([]);
   const [datalength, setDatalength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const [categories,setCategories]=useState([])
  useEffect(() => {
     fetch('categories.json')
     .then(res=>res.json())
     .then(data=>setCategories(data))
  }, []);

  console.log(categories)

  return (
    <div>
      <div className=' max-w-6xl  '>
        <div>
          <h1 className=" mt-4 text-3xl text-center font-bold">Job Category List</h1>
          <p  className="  mt-3 text-md   font-sans text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className=" grid grid-cols-4 mx-auto  gap-5 px-20 mt-5">
        {categories.map((category)=><Category key={category.id}  category={category}></Category>)}
        </div>
       
      </div>

      <div className=" mt-6">
        <div className=" text-center ">
          <h1 className=" font-bold text-3xl">Featured Jobs</h1>
          <p className=" text-md mt-2">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-8 mx-auto   px-28 py-8">
          {jobs.slice(0,datalength).map((job) => (
            <Jobs key={job.id} job={job}></Jobs>
          ))}
        </div>
      
        <div className={datalength===jobs.length ? 'hidden':''}>
         <div className=" flex justify-center">
         <button className=" mb-3   rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-5  py-2" onClick={()=>setDatalength(jobs.length)}>
            Show all
          </button>
         </div>
        </div>
        </div>
      </div>
    
  );
};

export default Home;
