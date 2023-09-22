const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
      <div className='max-w-[1000px] mx-auto p-4  h-full w-full'>
        <form
          className='flex flex-col max-w-[600px] w-full '
          action='https://getform.io/f/82410146-13ff-4248-b78b-6c8e0e8f4f2a'
          method='post'
        >
          <div className='pb-8 text-gray-300'>
            <p className=' text-4xl font-bold border-b-4 inline border-[#2ebfa5] text-gray-300'>
              Contact
            </p>
            <p className='py-4'> &#47;&#47; Get in touch!</p>
          </div>
          <input className='p-2 text-gray-900' type='text' name='name' placeholder='name' />
          <input className='my-4 p-2 text-gray-900' type='email' name='email' placeholder='email' />
          <textarea
            className='p-2 text-gray-900'
            name='message'
            rows='10'
            placeholder='message'
          ></textarea>
          <button className='text-white border-2 px-4 py-3 hover:bg-[#2ebfa5] my-8 duration-700 font-bold mx-auto flex items-center '>
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
