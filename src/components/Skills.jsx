import images from "../constants"

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full min-h-screen'>
      {/* ---------> container starts <---------- */}

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  h-full w-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#2ebfa5]'>Skills</p>
          <p className='py-4 mt-8'>// These are the technologies I&apos;ve worked with</p>
        </div>
        {/* ----> container ends<---------- */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-700'>
            <img src={images.html} alt='html5 icon' className='w-20 mx-auto pt-4' />
            <p className='py-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-700'>
            <img src={images.css} alt='html5 icon' className='w-20 mx-auto pt-4' />
            <p className='py-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-700'>
            <img src={images.javascript} alt='html5 icon' className='w-20 mx-auto pt-4' />
            <p className='py-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-700'>
            <img src={images.react} alt='html5 icon' className='w-20 mx-auto pt-4' />
            <p className='py-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-700'>
            <img src={images.github} alt='html5 icon' className='w-20 mx-auto pt-4' />
            <p className='py-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-700'>
            <img src={images.node} alt='html5 icon' className='w-20 mx-auto pt-4' />
            <p className='py-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-700'>
            <img src={images.mongo} alt='html5 icon' className='w-20 mx-auto pt-4' />
            <p className='py-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-700'>
            <img src={images.tailwind} alt='html5 icon' className='w-20 mx-auto pt-4' />
            <p className='py-4'>TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
