import JobCard from "../components/JobCard";
import { useContext, useState } from 'react';
import { FilteredJobsContext } from "../../context/FilterContext";
import { list } from "../data/data";

const Listings = () => {

  const filteredJobs = useContext(FilteredJobsContext);
  const [filterArray, setFilterArray] = useState<any[]>(filteredJobs);

  // Filter based on role
  const addRoleFilter = (role:string) => {
    setFilterArray(
      filterArray.filter((job) => {
        return job.role === role;
      })
    );
  }

  // Filter based on level
  const addLevelFilter = (level:string) => {
    setFilterArray(
      filterArray.filter((job) => {
        return job.level === level
      }) 
    );
  }

  // Filter based on language
  const addLanguageFilter = (language:string) => {
    setFilterArray(
      filterArray.filter((job) => {
        return job.languages.includes(language)
      })
    )
  }

  // Filter based on tool
  const addToolFilter = (tool:string) => {
    setFilterArray(
      filterArray.filter((job) => {
        return job.tools.includes(tool)
      })
    )
  }

  const clear = () => {
    setFilterArray(list);
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
      {filterArray.map((job:any, i:number) => {
        return (
          <JobCard
            key={i}
            company={job.company}
            logo={job.logo}
            newJob={(job.new === true) ? <span className="uppercase text-white ml-4 text-base bg-[#5ba4a4] py-1 px-2 rounded-3xl">new!</span> : undefined}
            featured={(job.new === true) ? <span className="uppercase text-white ml-4 text-base bg-[#2c3a3a] py-1 px-2 rounded-3xl">featured!</span> : undefined}
            position={job.position}
            role={job.role}
            FilterRole={() => addRoleFilter(job.role)}
            level={job.level}
            FilterLevel={() => addLevelFilter(job.level)}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages.map((l:string, i:number) => {
              return (
                <button onClick={() => addLanguageFilter(l)} key={i} className="p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300">{l}</button>
              )
            })}
            tools={job.tools.map((t:string, i:number) => {
              return (
                <button onClick={() => addToolFilter(t)} key={i} className="p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300">{t}</button>
              )
            })}
          />
        )
      })}

    </main>
  )
}

export default Listings