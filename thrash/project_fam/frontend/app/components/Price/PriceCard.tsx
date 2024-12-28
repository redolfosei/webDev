import React from 'react'

interface Props {
  bg:string;
  num:string;
  plan:string;
  price:string;
}

const PriceCard = ({bg,num,plan,price}:Props) => {
  const large = num=="2"?"lg:scale-110 scale-100 z-[100]":"";
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
      <div className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md `}>
        <p className='text-[20px] text-white font-[500] mb-[1.5rem]'>{plan}</p>
        <h1 className='text-[20px] text-white'><span className='text-[30px] text-yellow-300 font-bold'> {price} </span> per month</h1>
      </div>
    </div>
  )
}

export default PriceCard