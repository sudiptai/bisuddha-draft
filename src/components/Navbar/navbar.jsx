import React from 'react'
import './navbar.css'
import { useLocation } from 'react-router-dom'
import ShopAllButton from '../buttons/shopAll'
import logo from '../../assets/logo/Logo-image-2.svg'
import mag from '../../assets/icons/search-normal.svg'
import Hamburger from './Hamburger'

const Navbar = () => {

  const navItems = [
    //name, Our Products, Our Ingredients, Blogs, About Us
    {name: 'Home', link: '/'},
    {name: 'Our Products', link: '/our-products'},
    {name: 'Our Ingredients', link: '/our-ingredients'},
    {name: 'Blogs', link: '/blogs'},
    {name: 'About Us', link: '/about-us'},
  ]

  const NavLinks = ({ name , link }) => {
    const location = useLocation();
    const isActive = location.pathname === link;
    const linkClass = isActive ? 'link-active' : 'link-not-active';
    
    return(
      <a href={link}>
        <p className={`${linkClass} rw lex uc c-hg`}>
          {name}
        </p>
      </a>
    )  
  }


  const [showNavbar, setShowNavbar] = React.useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  } 

  // const navbarNotifications = () => {
  //   return(
  //     <div className="navbar-notification c-w bg-dg">
  //       <div className='lex'>LIMITED OFFER: 30% OFF.</div>
  //     </div>
  //   )
  // }

  return (
    <div className='navbar'>
      {/* {navbarNotifications()} */}
      <div className="navbar-main bg-nav">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
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
        <div className='navbar-hamburger' onClick={handleShowNavbar}>
          <Hamburger />
        </div>
      </div>
      <div className={`navbar-nav-links bg-nav ${showNavbar ? 'active' : ''}`}>
        <div className="navbar-nav-links-container">
          {/* <div className="navbar-nav-links-item"><p className='rw lex uc c-hg'>Home</p></div>
          <div className="navbar-nav-links-item">Shop All</div>
          <div className="navbar-nav-links-item">Our Ingredients</div>
          <div className="navbar-nav-links-item">Blogs</div>
          <div className="navbar-nav-links-item">About Us</div> */}
          {navItems.map((item, index) => (
            <div className="navbar-nav-links-item" key={index}>
              <NavLinks name={item.name} link={item.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar