import { ReactElement } from 'react';
import { jobs } from '../data/data';

interface JobsProp  {
  company: string,
  logo: string,
  newJob?: ReactElement,
  featured?: ReactElement,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

const JobCard = ({company, logo, newJob, featured, position, role, level, postedAt, contract, location, languages, tools}:JobsProp) => {
  return (
    <div className="relative mb-8 flex flex-col justify-between p-6 border-l-[#5ba4a4] border-l-4 bg-white shadow-xl shadow-[#5ba4a4]/30">
      <img className='absolute top-[-2.5rem]' src={logo}/>
      <div className="text-left">
        <h1>{company} {newJob} {featured}</h1>
        <h2>{position}</h2>
        <h3 className='flex items-center'>{postedAt} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {contract} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {jobs[0].location}</h3>
      </div>
      <div className='w-full h-[.125rem] bg-[#7b8e8e] md:hidden' />
      <div className=''>
        <div>
          {role}
        </div>
        <div>
          {level}
        </div>
        {location}
        {languages}
        {tools}
      </div>
    </div>
  )
}

export default JobCard