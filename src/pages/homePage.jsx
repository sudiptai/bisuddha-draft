import React from 'react'
import Banner from '../components/Home/banner'
import OurPromise from '../components/Home/ourPromise'
import HomeProductShow from '../components/Home/homeProductShow';
import Reputation from '../components/reputations/reputation';
// import CustomerTestimonial from '../components/Home/customerTestimonial'

const homePage = () => {
  return (
    <div className='homePage'>
        <Banner />
        <HomeProductShow />
        <OurPromise />
        <Reputation />
    </div>
  )
}

export default homePage