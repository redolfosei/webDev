import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
import Icon1 from '@/public/imgs/icon1.png'
import Icon2 from '@/public/imgs/icon2.png'
import Icon3 from '@/public/imgs/icon3.png'
import Icon4 from '@/public/imgs/icon4.png'
import Icon5 from '@/public/imgs/icon5.png'

const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <SectionHeading 
        headingMini="Ideal Solution for you" 
        headingPrimary="Explore Ultimate features" 
      />
        <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
          <div>
            <FeatureCard title="24/7 Community Engagement" image={Icon1.src} 
            content='Boost participation through our engagement strategies. We implement regular AMAs (Ask Me Anything sessions), host interactive polls to gather feedback, and create gamified incentives to keep your community involved and excited. A thriving community leads to stronger project support and loyalty.'
            />
          </div>
          <div>
            <FeatureCard title="Community Growth" image={Icon2.src} 
            content='Attract new members and retain your existing community with our proven growth strategies. We leverage social media campaigns, build strategic partnerships, and initiate effective referral programs to maximize outreach and expand your member base. A larger community enhances project visibility and potential for investment.'
            />
          </div>
          <div>
            <FeatureCard title="Education Hub" image={Icon3.src}
            content='Educate your community members with valuable resources that demystify the crypto space. We provide informative blogs, engaging video tutorials, and live webinars that cover project goals, industry trends, and best practices for participation. An informed community is more engaged and likely to advocate for your project.'
            />
          </div>
          <div>
            <FeatureCard title="24/7 Availability to support and Inform" image={Icon4.src}
            content='Our dedicated support team ensures your community feels heard and valued. We offer real-time chat assistance, forum moderation, and feedback channels to address concerns promptly. Building trust through accessibility strengthens community bonds and enhances overall satisfaction. Always Here for Your Community’s Needs'
            />
          </div>
          <div>
            <FeatureCard title="Spam-Free Community" image={Icon5.src} 
            content='Our commitment to get your commninity a spam-free environment is one of our core fundermentals to building a healthy and vibrant community. We implement robust moderation practices to filter out spam and malicious content, ensuring that all discussions are meaningful and constructive. We put in bot attach measures right form the beginning.'
            />
          </div>
          <div>
            <FeatureCard title="Analytics & Reporting" image={Icon5.src} 
            content='Our agency believes in transparency and accountability. We provide detailed analytics on engagement levels, member growth, and outreach effectiveness, allowing us to refine strategies based on measurable results. Stay informed with regular reports that help optimize your community management efforts.'
            />
          </div>
        </div>  
    </div>
  )
}

export default Features