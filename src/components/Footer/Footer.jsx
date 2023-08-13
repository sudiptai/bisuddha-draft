import React from 'react'
import './Footer.css'

//Quick Links, Social Links, Contact Us.

const Footer = () => {
  return (
    <div className='footer bg-og'>
      <div className="footer-container container">
        <div className="footer-grid-container">
          <div className="quick-links">
            <h4 className='c-be rw'>Quick Links</h4>
            <div className="quick-links-items">
              <a href="/" className='c-be rw'>Home</a>
              <a href="/our-products" className='c-be rw'>Our Products</a>
              <a href="/our-ingredients" className='c-be rw'>Our Ingredients</a>
              <a href="/blogs" className='c-be rw'>Blogs</a>
              <a href="/about-us" className='c-be rw'>About Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer