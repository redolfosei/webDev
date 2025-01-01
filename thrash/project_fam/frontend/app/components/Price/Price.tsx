import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <SectionHeading 
        headingMini='Deal for Your Business'
        headingPrimary='Meet Our Pricing Plans that suits your Project'
      />
      <div className='w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
        <div>
          <PriceCard bg="bg-[#81124a]" price="$999" num="1" plan="Telegram Community Management"/>
        </div>
        <div>
          <PriceCard bg="bg-[#22840c]" price="$3000" num="2" plan="Customer Support Services"/>
        </div>
        <div>
          <PriceCard bg="bg-[#81124a]" price="$999" num="1" plan="Discord Community Management"/>
        </div>
      </div>
      <div className='w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
        <div>
          <PriceCard bg="bg-[#81124a]" price="$999" num="1" plan="Article Writing and Publication"/>
        </div>
        <div>
          <PriceCard bg="bg-[#22840c]" price="$3000" num="2" plan="Customer Support Services"/>
        </div>
        <div>
          <PriceCard bg="bg-[#81124a]" price="$999" num="1" plan="Discord Community Management"/>
        </div>
      </div>
    </div>
  )
}

export default Price