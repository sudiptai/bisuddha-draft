import React from 'react';
import demoImg from '../../assets/images/product/demo-product.jpg';

const ShopByCategories = () => {

  const Categories = [
    {
      name: "Candy",
      Products: [
        {
          name: "Sweet Amla Candy",
          img: demoImg,
          quantity: "150",
          price: "999",
        },
        {
          name: "Ghee Amla Candy",
          img: demoImg,
          quantity: "150",
          price: "999",
        },
        {
          name: "Gandharaj Amla Candy",
          img: demoImg,
          quantity: "150",
          price: "999",
        }
      ]
    },
    {
      name : "Sauce",
      Products : [
        {
          name : "Sweet Imli Sauce",
          img : demoImg,
          quantity : "150",
          price : "999",
        },
        {
          name : "Sweet Chili Imli Sauce",
          img : demoImg,
          quantity : "150",
          price : "999",
        },
        {
          name : "Schezwan Imli Sauce",
          img : demoImg,
          quantity : "150",
          price : "999",
        },
      ] 
    },
    {
      name : "Achar",
      Products : [
        {
          name : "Imli Achar",
          img : demoImg,
          quantity : "150",
          price : "999",
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
                    <div className='product-card-price-button pt-1'>
                      <h6 className="product-card-price">Rs. {product.price}</h6>
                      <button className="btn btn-primary h6">Know More</button>
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