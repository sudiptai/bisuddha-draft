import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import './OurProduct.css'

const OurProduct = () => {
 
  const ShopType = [
    {
      name: 'Shop By Ingredients',
      path: 'shop-by-ingredients'
    },
    {
      name: 'Shop By Categories',
      path: 'shop-by-categories'
    }
  ]

  return (
    <div className="OurProduct">
      <div className="container our-product-container">
        <div className="shop-type-button-container">
          {
            ShopType.map((type, index) => (
              <NavLink key={index} to={type.path} className="shop-type-link" activeClassName="shop-type-link-active">
                <p className="lex ta-cen">{type.name}</p>
              </NavLink>
            ))
          }
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default OurProduct