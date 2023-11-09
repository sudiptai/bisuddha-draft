import React from 'react';

import SweetImliSauce from '../../AllProducts-Images/Sweet-Imli-1.jpg'
import SweetChiliImliSauce from '../../AllProducts-Images/Sweet-chili-imli-1.jpg'
import SchezwanImliSauce from '../../AllProducts-Images/Schezwan-imli-1.jpg'
import ImliAchaar from '../../AllProducts-Images/Imli-Achaar-1.jpg'
import SweetAmlaCandy from '../../AllProducts-Images/Sweet-Amla-1.jpg'
import GheeAmlaCandy from '../../AllProducts-Images/Ghee-Amla-1.jpg'
import GandharajAmlaCandy from '../../AllProducts-Images/Gandharaj-Amla-1.jpg'

const ShopByCategories = () => {

  const Categories = [
    {
      name: "Candy",
      Products: [
        {
          name: "Sweet Amla Candy",
          img: SweetAmlaCandy,
          quantity: "50",
          price: "93",
          link : "/our-products/sweet-amla"
        },
        {
          name: "Ghee Amla Candy",
          img: GheeAmlaCandy,
          quantity: "50",
          price: "93",
          link : "/our-products/ghee-amla"
        },
        {
          name: "Gandharaj Amla Candy",
          img: GandharajAmlaCandy,
          quantity: "50",
          price: "93",
          link : "/our-products/gandharaaj-amla"
        }
      ]
    },
    {
      name : "Sauce",
      Products : [
        {
          name : "Sweet Imli Sauce",
          img : SweetImliSauce,
          quantity : "800",
          price : "295",
          link : "/our-products/sweet-imli-sauce"
        },
        {
          name : "Sweet Chili Imli Sauce",
          img : SweetChiliImliSauce,
          quantity : "800",
          price : "295",
          link : "/our-products/sweet-chili-imli-sauce"
        },
        {
          name : "Schezwan Imli Sauce",
          img : SchezwanImliSauce,
          quantity : "800",
          price : "295",
          link : "/our-products/schezwan-imli-sauce"
        },
      ] 
    },
    {
      name : "Achaar",
      Products : [
        {
          name : "Imli Achaar",
          img : ImliAchaar,
          quantity : "200",
          price : "110",
          link : "/our-products/imli-achaar"
        },
      ]
    },
  ]


  return (
    <div className="ShopByCategories">
      {
        Categories.map((category, index) => (
          <div key={index}>
            <h3 className="uc ta-cen">{category.name}</h3>
            <div className="product-card-container">
              {
                category.Products.map((product, index) => (
                  <div key={index} className="product-card">
                    <div className="product-card-img-container">
                      <img src={product.img} alt="" />
                    </div>
                    <h6 className="product-card-name pt-1">{product.name}</h6>
                    <h6 className="product-card-quantity pt-1">{product.quantity} gm</h6>
                    <div className='product-card-price-button'>
                      <h6 className="product-card-price">₹{product.price}</h6>
                      <button 
                        className="btn btn-primary h6 know-more-button lex"
                        onClick={() => {
                          window.location.href = product.link
                        }}
                      >Know More</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ShopByCategories