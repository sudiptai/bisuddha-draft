import React from 'react'

const ShopAllButton = ({ marginTop }) => {
  
  const buttonStyle = {
    marginTop: marginTop || '0rem',
    display: 'flex',
    width: '12rem',
    height: '3rem',
    padding: '0.5rem 3.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    flexShrink: '0',
    borderRadius: '100px',
  }
  
  return (
    <div className='button lex c-be rw bg-kg' style={buttonStyle}>
      <h5>Shop All</h5>
    </div>
  )
}

export default ShopAllButton