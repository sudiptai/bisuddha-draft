import React from 'react'
import './homeComponent.css'
import rsIcon from '../../assets/icons/Reliable-Shipping-icon.svg'
import sIcon from '../../assets/icons/Safe-icon.svg'
import qpIcon from '../../assets/icons/BestQandP.svg'


const ourPromise = () => {

  const ourPromises = [
    {
      img:rsIcon ,
      heading: 'Reliable Shipping',
      description: 'Experience hassle-free and reliable shipping on all your orders. We ensure timely delivery with top-notch packaging, so your purchases reach you in perfect condition.'
    },
    {
      img:sIcon ,
      heading: "You're safe with us",
      description: 'Your safety is our priority. Our products are rigorously tested and compliant with industry standards, ensuring a secure and worry-free shopping experience.'
    },
    {
      img:qpIcon ,
      heading: 'Best Quality & Pricing',
      description: 'Discover unbeatable deals on premium products. Experience the best quality and pricing in our exclusive e-commerce store. Shop now!'
    },
  ]

  return (
    <div className="ourPromise bg-be">
      <div className="container ourPromise-container">
        <div className="ourPromise-grid-container">
          {ourPromises.map((promise, index) => (
            <div className="ourPromise-grid-item">
              <img src={promise.img} alt="icon" />
              <div className="Promise-container">
                <div className="Promise-heading">
                  <h3>{promise.heading}</h3>
                </div>
                <div className="Promise-description">
                  <p>{promise.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ourPromise