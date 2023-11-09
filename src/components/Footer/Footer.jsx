import React from 'react'
import './Footer.css'

//Quick Links, Social Links, Contact Us, Location.

const Footer = () => {
  return (
    <div className='footer bg-og'>
      <div className="footer-container container">
        <div className="footer-first-grid-container">
          <div className="quick-links">
            <h3 className='c-be lex'>Quick Links</h3>
            <div className="quick-links-items">
              <a href="/" className='footer-links c-be rw'><h5>Home</h5></a>
              <a href="/our-products" className='footer-links c-be rw'><h5>Our Products</h5></a>
              <a href="/our-ingredients" className=' footer-links c-be rw'><h5>Our Ingredients</h5></a>
              <a href="/blogs" className='footer-links c-be rw'><h5>Blogs</h5></a>
              <a href="/about-us" className='footer-links c-be rw'><h5>About Us</h5></a>
            </div>
          </div>
          <div className="social-links">
            <h3 className='c-be lex'>Social Links</h3>
            <div className="social-links-items">
              <a href="https://www.facebook.com/profile.php?id=100091554517614" className='footer-links c-be rw' target='_blank' rel='noreferrer'><h5>Facebook</h5></a>
              <a href="https://www.instagram.com/bisuddhakol/" className='footer-links c-be rw' target='_blank' rel='noreferrer'><h5>Instagram</h5></a>
              <a href="https://twitter.com/bisuddhakol" className='footer-links c-be rw' target='_blank' rel='noreferrer'><h5>Twitter</h5></a>
              <a href="https://www.linkedin.com/company/bisuddha/about/" className='footer-links c-be rw' target='_blank' rel='noreferrer'><h5>LinkedIn</h5></a>
            </div>
          </div>          
        </div>
        <div className="footer-contact-us">
          <h3 className='c-be lex'>Contact Us</h3>
          <div className="contact-us-items">
            <h5 className='footer-links c-be rw lex'>+91 91470 48447</h5>
            <a href="mailto:bisuddhaenterprises@gmail.com" className='footer-links c-be rw'><h5>bisuddhaenterprises@gmail.com</h5></a>
            <h3 className='footer-location c-be lex'>Location</h3>
            <h5 className='footer-location-items c-be rw h5'><h5>3/149A Seth Colony (Lowland) Dumdum Kolkata -700 030</h5></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer