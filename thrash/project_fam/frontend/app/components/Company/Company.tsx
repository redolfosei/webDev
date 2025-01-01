import Image from 'next/image'
import React from 'react'
import CompanyImage from '@/public/imgs/customer.png'

const Company = () => {
  return (
    <div className='pt-[6rem] pb-[3rem]'>
      <h1 className='mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073a'>Projects Who Worked with Us</h1>
      <p className='w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-950 opacity-80'>
      We are proud to partner with these Projects and look forward to continuing other collaborations, ensuring our clients receive the very best in title services.
      </p>
      <p className='text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600'>Explore More</p>
      <div className='mt-[2rem] text-center w-[80%] mx-auto'>
        <Image src={CompanyImage} alt='projects'  />
      </div>
    </div>
  )
}

export default Company