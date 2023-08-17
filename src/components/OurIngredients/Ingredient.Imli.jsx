import React from 'react'
import imliImg from '../../assets/images/ingredients/Imli.jpg'

const Imli = () => {
  return (
    <div className='ingredient'>
      <div className="container">
        <div className="ingredient-container">
          <div className="ingredient-first-section">
            <div className="ingredient-image">
              <img className="sh-4" src={imliImg} alt="Imli" />
            </div>
            <div className="ingredient-basic-info">
              <h3 className='uc'>Imli</h3>
            </div>
          </div>
          <div className="ingredient-second-section ingredient-detailed-info">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Imli