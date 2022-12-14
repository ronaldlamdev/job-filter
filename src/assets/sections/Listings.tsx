import JobCard from "../components/JobCard";
import { useState, useEffect } from 'react';
import { list } from "../data/data";
import {AiOutlineClose} from 'react-icons/ai';

const Listings = () => {

  // List jobs
  const [jobs, setJobs] = useState<any[]>([]);

  // Store filters
  const [filters, setFilters] = useState<any[]>([]);

  // Store filtered jobs to list
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);

  useEffect(() => {
    setJobs(list);
  }, []);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    doFilter();
  }, [filters]);

  // Filter functions

  const addFilter = (e:string) => {
    !filters.includes(e) && setFilters(filters => [...filters, e])
  };

  const removeFilter = (e:string) => {
    setFilters(filters => filters.filter(elem => {return elem != e}));
  };

  const doFilter = () => {
    setFilteredJobs(
      jobs.filter(job => 
        filters.every(filter => [job.role, job.level, ...job.languages, ...job.tools].includes(filter))
      )
    )
  }

  const clear = () => {
    setFilters([]);
  };

  return (
    <main className="px-4 lg:px-24 my-8 bg-[#effafa]">

      {/* Filter Component */}
      <div className="bg-white px-4 py-8 mb-20 shadow-xl shadow-[#5ba4a4]/30 border-l-4 rounded-md border-[#5ba4a4] flex justify-between">
        <div className="flex justify-around items-center flex-wrap gap-4">
          {filters.map(el => {
            return (
              <div className="flex items-center">
                <div className="p-2 bg-[#effafa] text-[#5ba4a4] rounded-l text-xl font-bold">
                  {el}
                </div>
                <div onClick={() => removeFilter(el)} className="bg-[#5ba4a4] p-2 text-white rounded-r text-xl font-bold cursor-pointer">
                  <AiOutlineClose size={27} />
                </div>
              </div>
            )
          })}
        </div>
        <span onClick={() => clear()} className="text-[#5ba4a4] text-lg font-bold hover:underline hover:underline-offset-2 duration-500 cursor-pointer">Clear</span>
      </div>

      {/* Map out from lists */}
      {filteredJobs.map((job:any, i:number) => {
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