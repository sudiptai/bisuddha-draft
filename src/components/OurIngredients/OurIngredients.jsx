import React from 'react'
import './OurIngredients.css'
import imliImg from '../../assets/images/ingredients/Imli.jpg'
import amlaImg from '../../assets/images/ingredients/amla.jpg'

const OurIngredients = () => {

  return (
    <div className='our-ingredients'> 
      <div className="container our-ingredients-container">
        <div className="our-ingredient-grid">
          <div className="our-ingredient">
            <a href="/our-ingredients/imli">
              <div className="ingredient-item bg-og">
                <div className="ingredient-image">
                  <img src={imliImg} alt="imli" />
                </div>
                <h3 className='c-be'>Imli</h3>
              </div>
            </a>
          </div>
          <div className="our-ingredient">
            <a href="/our-ingredients/amla">
              <div className="ingredient-item bg-og">
                <div className="ingredient-image">
                  <img src={amlaImg} alt="amla" />
                </div>
                <h3 className='c-be'>Amla</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurIngredients