import JobCard from "../components/JobCard";
import { list } from "../data/data";
import {useEffect, useState} from 'react';

const Listings = () => {

  const [jobs, setJobs] = useState(list)

  return (
    <main className="px-4 lg:px-24 my-20 bg-[#effafa]">
      {jobs.map((job, i) =>  {
        return (
          <JobCard 
            key={i}
            company={<h1 className='text-[#5ba4a4] font-bold text-xl'>{job.company}</h1>}
            logo={<img className='absolute md:static top-[-1.8rem] w-[3.25rem] md:w-[5rem] h-[3.25rem] md:h-[5rem]' src={job.logo}/>}
            position={<span className='font-bold w-fit text-lg cursor-pointer hover:text-[#5ba4a4] duration-300'>{job.position}</span>}
            newJob={(job.new === true) ? <span className="uppercase text-white ml-4 text-base bg-[#5ba4a4] py-1 px-2 rounded-3xl">new!</span> : undefined}
            featured={(job.featured === true) ? <span className="uppercase text-white ml-2 text-base bg-[#2c3a3a] px-2 py-1 rounded-3xl">featured</span> : undefined}
            role={<button className='p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300'>{job.role}</button>}
            level={<button className='p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300'>{job.level}</button>}
            postedAt={<span className="text-[#7b8e8e]">{job.postedAt}</span>}
            contract={<span className="text-[#7b8e8e]">{job.contract}</span>}
            location={<span className="text-[#7b8e8e]">{job.location}</span>}
            languages={job.languages.map((l:string, i:number) => {
              return (
                <button className="p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300" key={i}>{l}</button>
              )
            })}
            tools={job.tools.map((t:string, i:number) => {
              return (
                <button className="p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300" key={i}>{t}</button>
              )
            })}
          />
        )
      })}
    </main>
  )
}

export default Listings