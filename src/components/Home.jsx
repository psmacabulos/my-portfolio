import { HiChevronDoubleRight } from 'react-icons/hi';

const Home = () => {
  /**
   * To do: Fix responsiveness problem as sidebar collides with h1
   * To do: Fix responsiveness problem on smaller device as home not showing fully in landscape orientation
   */
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen '>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#2ebfa5]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Patrick.
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='py-4 max-w-[700px] text-[#8892b0]'>
          As a skilled web developer, I specialize in crafting modern solutions
          that solve complex business problems. With a strong focus on
          collaboration and independence, I thrive in both team-based and
          self-directed projects.
        </p>
        <div className='mt-2'>
          <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-[#2ebfa5] hover:border-[#2ebfa5] duration-700'>
            View Work{' '}
            <HiChevronDoubleRight className='ml-3 group-hover:rotate-90 duration-500' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
