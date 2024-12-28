import Image from 'next/image';
import React from 'react'

interface Props {
  image:string;
  title:string;
  content:string;
}

const FeatureCard = ({image,title,content}:Props) => {
  return (
    <div className='text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
      <Image 
      src={image} alt='icon' width={70} height={70} className='mx-auto' 
      />
      <h1 className='text-[20px] mt-[1.4rem] font-[500] text-[#02073e]'>{title}</h1>
      <p className='mt-[1rem[ text-black opacity-90 text-[15px] '>
        {content} 
      </p>
      <p className='mt-[1.4rem] text-red-600 font-[500] cursor-pointer hover:text-blue-800'>Learn More</p>
    </div>
    
  )
}

export default FeatureCard