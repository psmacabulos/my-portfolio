import images from "../constants"

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] text-gray-300 w-full min-h-screen landscape:mt-40'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  h-full w-full'>
        <div className='mb-5'>
          <p className='text-4xl font-bold inline border-b-4 border-[#2ebfa5]'>About</p>
        </div>

        <div className=' text-xl mt-8 text-[#8892b0]  '>
          <div className='py-4 flex transition ease-in-out delay-150 hover:translate-x-5 duration-500 max-w-[700px] '>
            <span className='mr-5 shrink-0'>
              <img src={images.hand} alt='hand waving icon' className='w-8' />
            </span>
            <div>
              Hello! I&apos;m <span className='font-bold text-[#ccd6f6]'>Patrick</span>, great to
              see you!
            </div>
          </div>

          <div className='py-4 flex transition ease-in-out delay-150 hover:translate-x-5 duration-500 max-w-[700px] '>
            <span className='mr-5 shrink-0 '>
              <img src={images.cursor} alt='cursor icon' className='w-8' />
            </span>
            <div>
              I am known for crafting <strong className='text-[#ccd6f6]'> user-friendly </strong>{" "}
              interfaces and
              <strong className='text-[#ccd6f6]'> solving</strong> digital{" "}
              <strong className='text-[#ccd6f6]'>challenges</strong>.
            </div>
          </div>

          <div className='py-4 flex transition ease-in-out delay-150 hover:translate-x-5 duration-500 max-w-[700px] '>
            <span className='mr-5 shrink-0 '>
              <img src={images.check} alt='cursor icon' className='w-8' />
            </span>
            <div>
              My goal? Making <span className='font-bold text-[#ccd6f6]'>clients happy</span>, one
              project at a time.
            </div>
          </div>

          <div className='py-4 flex transition ease-in-out delay-150 hover:translate-x-5 duration-500 max-w-[700px] '>
            <span className='mr-5 shrink-0 '>
              <img src={images.puzzle} alt='cursor icon' className='w-8' />
            </span>
            <div>
              And I forgot to add, <span className='font-bold text-[#ccd6f6]'>I love</span> playing{" "}
              <span className='font-bold text-[#ccd6f6]'>Chess</span>!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
