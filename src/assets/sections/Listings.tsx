import JobCard from "../components/JobCard";
import { useState } from 'react';
import { list } from "../data/data";

const Listings = () => {

  // List jobs
  const [jobs, setJobs] = useState<any[]>(list);

  const addFilter = (e:string) => {
    setJobs(
      jobs.filter((job) => {
        if (job.role === e) {
          return job.role === e;
        } else if (job.level === e) {
          return job.level === e;
        } else if (job.languages.includes(e)) {
          return job.languages.includes(e)
        } else if (job.tools.includes(e)) {
          return job.tools.includes(e)
        }
      })
    )
  }


  const clear = () => {
    setJobs(list);
  }

  return (
    <main className="px-4 lg:px-24 my-8 bg-[#effafa]">

      {/* Filter Component */}
      <div className="bg-white px-4 py-8 mb-20 shadow-xl shadow-[#5ba4a4]/30 border-l-4 rounded-md border-[#5ba4a4] flex justify-between">
        <div>
          
        </div>
        <span onClick={clear} className="text-[#5ba4a4] text-lg font-bold hover:underline hover:underline-offset-2 duration-500 cursor-pointer">Clear</span>
      </div>

      {/* Map out from lists */}
      {jobs.map((job:any, i:number) => {
        return (
          <JobCard
            key={i}
            company={job.company}
            logo={job.logo}
            newJob={(job.new === true) ? <span className="uppercase text-white ml-4 text-base bg-[#5ba4a4] py-1 px-2 rounded-3xl">new!</span> : undefined}
            featured={(job.new === true) ? <span className="uppercase text-white ml-4 text-base bg-[#2c3a3a] py-1 px-2 rounded-3xl">featured!</span> : undefined}
            position={job.position}
            role={job.role}
            FilterRole={() => addFilter(job.role)}
            level={job.level}
            FilterLevel={() => addFilter(job.level)}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages.map((l:string, i:number) => {
              return (
                <button onClick={() => addFilter(l)} key={i} className="p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300">{l}</button>
              )
            })}
            tools={job.tools.map((t:string, i:number) => {
              return (
                <button onClick={() => addFilter(t)} key={i} className="p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300">{t}</button>
              )
            })}
          />
        )
      })}

    </main>
  )
}

export default Listings