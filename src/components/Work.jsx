import gameHarbor from "../assets/projects/game_harbor.jpg"
import ai_shirt from "../assets/projects/ai_shirt.jpg"

const Work = () => {
  return (
    <div name='work' className='w-full sm:h-auto md:h-screen text-gray-300 bg-[#0a192a]'>
      {/* ---------> container starts <---------- */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-color border-[#2ebfa5]'>Work</p>
          <p className=' py-6 mt-8'>// Check out some of my recent work</p>
        </div>
        {/* ----> container ends<---------- */}
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-center align-middle py-8'>
          {" "}
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${gameHarbor})` }}
            className='shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  group container rounded-md flex justify-center items-center mx-auto content-div border-solid border-2'
          >
            {/* hover effects */}
            <div className='transition opacity-0 group-hover:opacity-100 duration-500 ease-in-out '>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
              </div>
              <div className='pt-8 text-center'>
                <a href='https://psmacabulos.github.io/gameHarbor/'>
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/psmacabulos/gameHarbor'>
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ai_shirt})` }}
            className='shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects */}
            <div className='transition opacity-0 group-hover:opacity-100 duration-500 ease-in-out'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Under Development
                </span>
              </div>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button
                    disabled
                    className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'
                  >
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button
                    disabled
                    className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg '
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
