import React from 'react'
import demoImg from '../../assets/images/product/demo-product.jpg'

const ShopByIngredients = () => {
  
  const Ingredients = [
    {
      name : "Imli",
      ingredientDetails : "Lathi",
      Products : [
        {
          name : "Sweet Imli Sauce",
          img : demoImg,
          quantity : "150",
          price : "999",
          link : "",
        },
        {
          name : "Sweet Chili Imli Sauce",
          img : demoImg,
        },
        {
          name : "Schezwan Imli Sauce",
          img : demoImg,
        },
        {
          name : "Imli Achaar",
          img : demoImg,
        }
      ] 
    },
    {
      name : "Amla",
      ingredientDetails : "Lathi",
      Products : [
        {
          name : "Sweet Amla Candy",
          img : demoImg,
        },
        {
          name : "Ghee Amla Candy",
          img : demoImg,
        },
        {
          name : "Gandharaj Amla Candy",
          img : demoImg,
        }
      ] 
    }
  ]

  return (
    <div>
      {
        Ingredients.map((ingredient, index) => (
          <div key={index}>
            <h3 className="uc ta-cen">{ingredient.name}</h3>
            <p>{ingredient.ingredientDetails}</p>
            <div className="product-card-container">
              {
                ingredient.Products.map((product, index) => (
                  <div key={index} className="product-card">
                    <div className="product-card-img-container">
                      <img src={product.img} alt="" />
                    </div>
                    <h6 className="product-card-name pt-1">{product.name}</h6>
                    <h6 className="product-card-quantity pt-1">{product.quantity} mg</h6>
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

export default ShopByIngredients