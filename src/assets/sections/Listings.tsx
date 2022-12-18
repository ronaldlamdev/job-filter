import JobCard from "../components/JobCard"
import { jobs } from "../data/data"

const Listings = () => {
  return (
    <main className="px-4 lg:px-24 my-20 bg-[#effafa]">
      {jobs.map((job, i) =>  {
        return (
          <JobCard 
            key={i}
            company={job.company}
            logo={job.logo}
            position={job.position}
            newJob={(job.new === true) ? <span className="uppercase text-white ml-5 text-base bg-[#5ba4a4] py-1 px-2 rounded-3xl">new!</span> : undefined}
            featured={(job.featured === true) ? <span className="uppercase text-white text-base bg-[#2c3a3a] px-2 py-1 rounded-3xl">featured</span> : undefined}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages.map((l:string, i:number) => {
              return (
                <div className="p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300" key={i}>{l}</div>
              )
            })}
            tools={job.tools.map((t:string, i:number) => {
              return (
                <div className="p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300" key={i}>{t}</div>
              )
            })}
          />
        )
      })}
    </main>
  )
}

export default Listings