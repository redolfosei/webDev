import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import CustomerSupport from './CustomerSupport/CustomerSupport'
import Price from './Price/Price'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features />
      <CustomerSupport/>
      <Price />
    </div>
  )
}

export default Home