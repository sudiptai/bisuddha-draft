import React from 'react'
import './homeComponent.css'

const homeProductShow = () => {

  return (
    <div>
      <div className="homePS">
        <div className="container homePS-container">
        <div className="homePS-title h1 cap ta-cen bw c-og">The best Dispensary for Having Unique Foods</div>
          <div className="PS-carousel-grid-container ">
            <div className="PS-intro bg-dg c-be">
              <h5 className='cap'>Shop for Our Best Seller</h5>
            </div>
            <div className='PS-product-grid-container'>
              <div className='carrousel'>

                <div className='card bg-pl'>
                  <p>Niladri</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homeProductShow
