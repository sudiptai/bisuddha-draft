import React from 'react'
import Banner from '../components/homeComponents/banner'
import OurPromise from '../components/homeComponents/ourPromise'
import HomeProductShow from '../components/homeComponents/homeProductShow'

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