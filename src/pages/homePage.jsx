import React from 'react'
import Banner from '../components/Home/banner'
import OurPromise from '../components/Home/ourPromise'
import HomeProductShow from '../components/Home/homeProductShow'

const homePage = () => {
  return (
    <div>
        <Banner />
        <OurPromise />
        <HomeProductShow />
    </div>
  )
}

export default homePage