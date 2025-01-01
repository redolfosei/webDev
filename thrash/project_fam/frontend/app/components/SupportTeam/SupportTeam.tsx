import React from 'react'
import Icon1 from '@/public/imgs/icon1.png'
import Icon2 from '@/public/imgs/icon2.png'
import SupportImage from '@/public/imgs/supportteam.jpg'
import Image from 'next/image'

const SupportTeam = () => {
  return (
    <div className='pt-[7rem] pb-[3rem]'>
      <div className='w-[80%] mx-auto items-center grid gird-cols-1 lg:grid-cols-2 gap-[2rem]'>
        <div>
          <h1 className='text-[27px] md:tex-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>Do You Have Any Questions? Our Support Team Is Ready to Help you</h1>
          <p className='text-grap-900 opacity-90 text-[17px] mt-[1rem]'>
          At <span  className='text-red-600'>ProjectFam</span>, we understand that navigating the world of cryptocurrency can be complex and sometimes overwhelming. Whether you’re new to crypto, a seasoned investor, or just curious about the latest trends, our dedicated support team is here to assist you every step of the way.
<div className='text-[#02073e]'>Our team:</div> consists of industry experts who are equipped to answer your questions, clarify concepts, and provide insights into the ever-evolving crypto landscape.
          </p>
          <div className='flex items-center space-x-6 mt-[2rem]'>
            <Image src={Icon1} alt="icon" width={60} height={60} />
            <div>
              <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Email Support</h1>
              <p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'> Have a question ? No problem! Our support team is available around the clock to ensure that you receive timely assistance whenever you need it.
              Send us an Email @ <span className='text-red-600'>theprojectfam@gmail.com</span></p>
            </div>
          </div>
          <div className='flex items-center space-x-6 mt-[2rem]'>
            <Image src={Icon2} alt="icon" width={60} height={60} />
            <div>
              <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Live Chat Support</h1>
              <p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>Connect with us instantly through our live chat feature on the website for quick answers and support.</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={SupportImage} alt="support"/>
        </div>
      </div>
    </div>
  )
}

export default SupportTeam