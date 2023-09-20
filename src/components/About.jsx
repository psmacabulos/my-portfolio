const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-x-8 px-4'>
          <div className=' sm:text-right pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#2ebfa5]'>
              About
            </p>
          </div>
          <div></div>
          <div className='sm:text-right text-4xl font-bold  '>
            <p>
              Hello! I'm Patrick, great to see you. Please have a look around.
            </p>
          </div>
          <div className='mt-8 md:mt-auto'>
            <p>
              My past careers as a teacher, machnine operator, production
              planner, and hydraulic fitter have given me a diverse set of
              skills and experiences that I bring to my work as a software
              developer. I am committed to providing outstanding solutions to
              your company's problems, using modern and optimized technologies
              that are scalable to support your business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
