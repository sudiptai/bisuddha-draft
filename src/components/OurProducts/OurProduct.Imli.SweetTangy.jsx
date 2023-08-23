import React from 'react'
import './OurProduct.css'
import demoImage from "../../assets/images/product/demo-product.jpg"

const SweetTangy = () => {
  return (
    <div className="product-description section">
      <div className="container">
        <div className="product-description-container">
          <div className="product-description-grid">
            <div className="product-description-image-container">
              <div className="product-description-image">
                <img src={demoImage} alt="" />
              </div>
            </div>
            <div className="product-description-details">
              <h2 className='uc'>Sweet Tangy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SweetTangy