import React from 'react'
import './homeComponent.css'

const banner = () => {
  return (
    <div className="banner bg-dg">
      <div className="container banner-container">
        <div className="banner-grid-container">
          <div className="banner-grid-items left-item">
            <div className="banner-grid-item">
              <h5 className='banner-quote bw c-hg uc'>exquisite taste</h5>
              <div className="banner-title title bw uc c-be">
                Chemical-Free<br />Nutritious Food
              </div>
              <div className="banner-sub-title p bw cap c-pl ws-03">
                "Nourish your family with the finest produce from our organic fields, cultivating health and sustainability from farm to table."
              </div>
            </div>
          </div>
          <div className="banner-grid-items right-item"></div>
        </div>
      </div>
    </div>
  )
}

export default banner