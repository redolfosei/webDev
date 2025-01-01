import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
      <div className='w-[80%] mx-auto grid gird-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start'>
        <div className='md:mx-auto mx-auto mx-0'>
          <h1 className='text-[17px] text-gray-gray-900 font-semibold mb-[1.5rem]'>Company</h1>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>About</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Affiliate</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Careers</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Blog</p>
        </div>
        <div className='md:mx-auto mx-auto mx-0'>
          <h1 className='text-[17px] text-gray-gray-900 font-semibold mb-[1.5rem]'>My Account</h1>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>About</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Affiliate</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Careers</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Blog</p>
        </div>
        <div className='md:mx-auto mx-auto mx-0'>
          <h1 className='text-[17px] text-gray-gray-900 font-semibold mb-[1.5rem]'>Social Media</h1>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>About</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Affiliate</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Careers</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Blog</p>
        </div>
        <div className='md:mx-auto mx-auto mx-0'>
          <h1 className='text-[17px] text-gray-gray-900 font-semibold mb-[1.5rem]'>About Us</h1>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Support Center</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'> Support Email </p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>About Us</p>
          <p className='text-black opcacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Copyright</p>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-[1rem] text-[15px] opacity-75'>Copyright @ projectFam</div>
      </div>
  )
}

export default Footer