import React from 'react'

const ShopAllButton = ({ marginTop }) => {
  
  const buttonStyle = {
    marginTop: marginTop
  }
  
  return (
    <div className='button' style={buttonStyle}>
        Shop All
    </div>
  )
}

export default ShopAllButton