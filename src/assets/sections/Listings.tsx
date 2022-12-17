import JobCard from "../components/JobCard"
import { jobs } from "../data/data"

const Listings = () => {
  return (
    <main className="px-4 my-20 bg-[#effafa]">
      {jobs.map((job, i) =>  {
        return (
          <JobCard 
            key={i}
            company={job.company}
            logo={job.logo}
            position={job.position}
            newJob={(job.new === true) ? <span className="uppercase">new!</span> : undefined}
            featured={(job.featured === true) ? <span className="uppercase">featured</span> : undefined}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages.map((l:string, i:number) => {
              return (
                <div key={i}>{l}</div>
              )
            })}
            tools={job.tools.map((t:string, i:number) => {
              return (
                <div key={i}>{t}</div>
              )
            })}
          />
        )
      })}
    </main>
  )
}

export default Listings