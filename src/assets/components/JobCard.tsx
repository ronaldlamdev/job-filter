import { ReactElement } from 'react';

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
    
    <div className="relative mb-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-20 lg:gap-4 justify-between rounded-md px-4 py-8 border-l-[#5ba4a4] border-l-4 bg-white shadow-xl shadow-[#5ba4a4]/30">
      <div className='md:flex items-center gap-4'>
        <img src={logo} alt={company} className='absolute md:static top-[-2rem] w-[3.75rem] h-[3.75rem] md:w-[5.1rem] md:h-[5.1rem]' />
        <div className="text-left text-lg flex flex-col gap-2">
          <div className='flex'><h1 className='text-[#5ba4a4] font-bold text-xl'>{company}</h1> {newJob} {featured}</div>
          <h1 className='text-xl cursor-pointer w-fit font-bold hover:text-[#5ba4a4] duration-300'>{position}</h1>
          <div className='flex text-[#7b8e8e] items-center gap-2'>{postedAt} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {contract} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {location}</div>
        </div>
      </div>
      <div className='w-full h-[.125rem] bg-[#7b8e8e]/50 md:hidden' />
      <div className='flex gap-4 flex-wrap font-bold text-lg'>
      <button className='p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300'>{role}</button>
      <button className='p-2 bg-[#effafa] text-[#5ba4a4] rounded cursor-pointer hover:bg-[#5ba4a4] hover:text-white duration-300'>{level}</button>
        {languages}
        {tools}
      </div>
    </div>
  )
}

export default JobCard