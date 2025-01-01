import Image from 'next/image'
import React from 'react'
import SupportImage from '@/public/imgs/support.jpg'
import { CheckIcon } from '@heroicons/react/16/solid'

const CustomerSupport = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center'>
        <div className='order-2 lg:order-1'>
          <Image src={SupportImage alt="customesupportImage"}/>
        </div>
        <div className='order-1 lg:order-2'>
          <h1 className='text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]'>Our Customer Support is Just Excellent</h1>
          <p className='mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]'>
          We offer: 24/7 Support: Always-on service to assist your customers whenever they need it.
Multichannel Options: Reach your audience through email, chat, and social media.
<div><span className=' text-red-600 mt-10'>Tailored Solutions:</span></div> Customized support that aligns with your business goals and brand voice.
<div><span className='text-red-600 mt-10'>Expert Team:</span></div> Our skilled agents are trained to handle inquiries efficiently and empathetically.
Partner with us to enhance customer satisfaction, boost loyalty, and drive sales. Let’s turn every customer interaction into an opportunity for growth!
<div><span className='text-red-600 mt-10'> Get in Touch Today to discover how we can elevate your customer service experience!</span></div>
          </p>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-[17px] text-[#02073e] font-[500]'>Quick Responses</p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-[17px] text-[#02073e] font-[500]'>24/7 Human support</p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-[17px] text-[#02073e] font-[500]'>Consistent Structured Messages </p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-[17px] text-[#02073e] font-[500]'>Clear and Concise Information </p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-[17px] text-[#02073e] font-[500]'>Empathy and Friendliness</p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-[17px] text-[#02073e] font-[500]'>Experts in All Communication Channels</p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-[17px] text-[#02073e] font-[500]'>Self-Service Options</p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-[17px] text-[#02073e] font-[500]'>Fast resolution rate and follow up practices</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSupport