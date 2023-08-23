import React from 'react'
import '../components/OurIngredients/OurIngredients.css'
import OurIngredients from '../components/OurIngredients/OurIngredients'

const OurIngredientsPage = () => {
  return (
    <div className='OurIngredient'>
      <div className="container">
        <h1 className='uc ta-cen'>Our Ingredients</h1>
        <h4 className='ta-cen OurIngredient-desc'>" India is blessed with a wide variety of indigenous fruits that are not only delicious but also offer numerous health benefits. These fruits are an important part of Indian cuisine and have been consumed for centuries. Here are some of the most important indigenous fruits in India "</h4>
        <OurIngredients />
      </div>
    </div>
  )
}

export default OurIngredientsPage