import React from 'react'
import ButtonBlue from '../Button/ButtonBlue'
import ButtonRed from '../Button/ButtonRed'
import HeroImg from '@/public/imgs/hero.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-[70vh] lg:h[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
        <div className='col-span-2'>
          <h1 className='text-[27px] md:text-[32px] lg:text-[35px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>Let's Get Your Project and Business SkyRocketed</h1>
          <p className='md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>Expert management for your crypto community, 24/7 engagement with the community, massive growth, clean community free from all tactical spams bots can't control and consistency
          </p>
          <div className='flex items-center space-x-4 md:space-x-6'>
            <ButtonBlue text="Get Started"/>
            <ButtonRed text="Explore Features"/>
          </div>
        </div>
        <div className='col-span-3 hidden sm:block'>
          <Image src={HeroImg} alt='Hero image' />
        </div>
      </div>
    </div>
  )
}

export default Hero