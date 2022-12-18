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
    <div className="relative mb-16 flex flex-col gap-4 justify-between rounded-md px-4 py-8 border-l-[#5ba4a4] border-l-4 bg-white shadow-xl shadow-[#5ba4a4]/30">
      <img className='absolute top-[-1.8rem] w-[3.25rem] h-[3.25rem]' src={logo}/>
      <div className="text-left text-lg flex flex-col gap-2">
        <h1 className='text-[#5ba4a4] font-bold text-xl'>{company} {newJob} {featured}</h1>
        <h2 className='font-bold text-lg'>{position}</h2>
        <h3 className='flex items-center text-[#7b8e8e] gap-2'>{postedAt} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {contract} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {location}</h3>
      </div>
      <div className='w-full h-[.125rem] bg-[#7b8e8e]/50 md:hidden' />
      <div className='flex gap-4 flex-wrap font-bold text-lg'>
        <div className='p-2 bg-[#effafa] text-[#5ba4a4] rounded'>
          {role}
        </div>
        <div className='p-2 bg-[#effafa] text-[#5ba4a4] rounded'>
          {level}
        </div>
        {languages}
        {tools}
      </div>
    </div>
  )
}

export default JobCard