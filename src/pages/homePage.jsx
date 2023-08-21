import React from 'react'
import Banner from '../components/Home/banner'
import OurPromise from '../components/Home/ourPromise'
import HomeProductShow from '../components/Home/homeProductShow';
// import CustomerTestimonial from '../components/Home/customerTestimonial'

const homePage = () => {
  return (
    <div className='homePage'>
        <Banner />
        <HomeProductShow />
        <OurPromise />
    </div>
  )
}

export default homePage