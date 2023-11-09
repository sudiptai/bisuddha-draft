import React from 'react'
import './reputation.css'

import pic1 from '../../assets/logo/Made in India Logo Vector.svg'
import pic2 from '../../assets/logo/Swacch-Bharat-Black.svg'
import pic3 from '../../assets/logo/abiflogo.png'

const Reputation = () => {
  return (
    <div className='reputations'>
      <div className="reputation">
        <img src={pic1} alt="" />
        <p className='c-g bw'>Made In India</p>
      </div>
      <div className="reputation">
        <img src={pic2} alt="" />
        <p className='c-g bw'>Swacch Bharat</p>
      </div>
      <div className="reputation">
        <img src={pic3} alt="" />
        <p className='c-g bw'>Incubated at ABIF IIT Kharagpur</p>
      </div>
    </div>
  )
}

export default Reputation