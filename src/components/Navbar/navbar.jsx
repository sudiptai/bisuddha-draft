import React from 'react'
import './navbar.css'
import ShopAllButton from '../buttons/shopAll'
import logo from '../../assets/logo/Logo-image-2.svg'
import mag from '../../assets/icons/search-normal.svg'

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-notification c-w bg-dg">
        <div className='lex'>LIMITED OFFER: 30% OFF.</div>
      </div>
      <div className="navbar-main bg-nav">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder='Search' className='search-input c-pl'/>
          <div className='search-button bg-hg'>
            <img src={mag} alt="" />
          </div>
        </div>
        <div className='navbar-button'>
          <ShopAllButton />
        </div>
      </div>
      <div className="navbar-nav-links bg-nav">
        <div className="navbar-nav-links-container">
          {/* Home, Shop All, Our Ingredients, Blogs, About Us */}
          <div className="navbar-nav-links-item"><p className='bw'>Home</p></div>
          <div className="navbar-nav-links-item">Shop All</div>
          <div className="navbar-nav-links-item">Our Ingredients</div>
          <div className="navbar-nav-links-item">Blogs</div>
          <div className="navbar-nav-links-item">About Us</div>
        </div>
      </div>
    </div>
  )
}

export default navbar