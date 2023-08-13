import React from 'react'

const ShopAllButton = ({ marginTop }) => {
  
  const buttonStyle = {
    marginTop: marginTop || '0rem',
    display: 'flex',
    width: '11rem',
    height: '3rem',
    padding: '0.5rem 2.8rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    flexShrink: '0',
    borderRadius: '10px',
    cursor: 'pointer',
  }
  
  return (
    <a href="/our-products">
      <div className='button lex c-be rw bg-kg bw' style={buttonStyle}>
        <p className='lex'>Shop All</p>
      </div>
    </a>
  )
}

export default ShopAllButton