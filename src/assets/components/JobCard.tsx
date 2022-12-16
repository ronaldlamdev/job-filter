import jobs from '../data/data.json';

const JobCard = () => {
  return (
    <div className="relative flex flex-col justify-between p-4">
      <div className="text-left">
        <h1>{jobs[0].company} <span className='uppercase'>new!</span> <span className='uppercase'>featured</span></h1>
        <h2>{jobs[0].position}</h2>
        <h3 className='flex items-center'>{jobs[0].postedAt} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {jobs[0].contract} <div className='w-2 h-2 rounded-full bg-[#7b8e8e]/70' /> {jobs[0].location}</h3>
      </div>
      <div className='w-full h-[.125rem] bg-[#7b8e8e] md:hidden' />
      <div className=''>
        <div>
          {jobs[0].role}
        </div>
        <div>
          {jobs[0].level}
        </div>
        <div>
          {jobs[0].languages[0]}
        </div>
        <div>
          {jobs[0].languages[1]}
        </div>
        <div>
          {jobs[0].languages[2]}
        </div>
      </div>
    </div>
  )
}

export default JobCard