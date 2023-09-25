import React from 'react';

const Jobs = ({job}) => {

    const {logo,job_title,company_name,job_type,remote_or_onsite,location,salary}=job
    //console.log(logo)
    return (
        <div className="card bg-base-100   shadow-sm border border-gray-200">
     <div className=' pl-6  pt-7'>
     <img src={ logo} alt="Shoes" className=" w-24" />
     </div>
  <div className="card-body space-y-4">
  <div>
        <h1 className=' font-bold  text-gray-600'>{job_title}</h1>

     </div>
      <div>
        <p>{company_name}</p>
      </div>
    <div className=' flex gap-2'>
    <button className='  px-3 py-1  rounded-md border border-purple-400 text-purple-400 font-semibold'>{remote_or_onsite}</button>
        <button className='  px-3 py-1  rounded-md border  border-purple-400  text-purple-400 font-semibold  '>{job_type}</button>
    </div>
     <div className=' flex items-center gap-7'>
        <div className=' flex text-gray-500'>
        <img src="https://i.ibb.co/jhjBck3/location.png" alt="" className=' h-6 ' />
        <p>{location}</p>

        </div>
        <div className=' flex items-center gap-1'>
        <i className="fa-solid fa-dollar-sign text-gray-500 text-sm "></i>
        <p className=' text-gray-500'>salary:{salary}</p>
        </div>
     </div>
    <div className="card-actions">
    <a className=" rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-5  py-2">View Details</a>
    </div>
  </div>
</div>
       
    );
};

export default Jobs;