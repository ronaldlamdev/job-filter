import { ReactElement } from 'react';
import FilterResults from '../sections/FilterResults';

interface JobsProp  {
  company: ReactElement,
  logo: ReactElement,
  newJob?: ReactElement,
  featured?: ReactElement,
  position: ReactElement,
  role: ReactElement,
  level: ReactElement,
  postedAt: ReactElement,
  contract: ReactElement,
  location: ReactElement,
  languages: string[],
  tools: string[]
}

const JobCard = ({company, logo, newJob, featured, position, role, level, postedAt, contract, location, languages, tools}:JobsProp) => {
  return (
    
    <div className="relative mb-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-20 lg:gap-4 justify-between rounded-md px-4 py-8 border-l-[#5ba4a4] border-l-4 bg-white shadow-xl shadow-[#5ba4a4]/30">
      <div className='md:flex items-center gap-4'>
        {logo}
        <div className="text-left text-lg flex flex-col gap-2">
          <div className='flex'>{company} {newJob} {featured}</div>
          {position}
          <div className='flex items-center gap-2'>{postedAt} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {contract} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {location}</div>
        </div>
      </div>
      <div className='w-full h-[.125rem] bg-[#7b8e8e]/50 md:hidden' />
      <div className='flex gap-4 flex-wrap font-bold text-lg'>
        {role}
        {level}
        {languages}
        {tools}
      </div>
    </div>
  )
}

export default JobCard