import React from 'react'
import '../components/OurIngredients/OurIngredients.css'
import OurIngredients from '../components/OurIngredients/OurIngredients'

const OurIngredientsPage = () => {
  return (
    <div className='OurIngredient'>
      <div className="container">
        <h1 className='uc ta-cen'>Our Ingredients</h1>
        <OurIngredients />
      </div>
    </div>
  )
}

export default OurIngredientsPage