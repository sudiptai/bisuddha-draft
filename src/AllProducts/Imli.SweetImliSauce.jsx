import React , { useState } from 'react'
import './Product.css'

import pic1 from '../AllProducts-Images/Sweet-Imli-1.jpg'
import pic2 from '../AllProducts-Images/Sweet-Imli-2.jpg'
import pic3 from '../AllProducts-Images/Sweet-Imli-3.jpg'
import pic4 from '../AllProducts-Images/Sweet-Imli-4.jpg'

const SweetImliSauce = () => {

  const images = [pic1,pic2,pic3,pic4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  }

  const handleThumbnailHover = (index) => {
    setCurrentIndex(index);
  }

  const product = {
    name: "Sweet Imli Sauce (Tasty Tangy)",
    punchLine : "",
    quantity: "150 gm",
    price: "999",
    alsoAvailableIn : [
      {
        quantity : "500 gm",
        price : "199",
      }
    ],
    buyFromHere : [
      {
        marketPlace : "amazon",
        link : "try"
      }
    ],
    highlights : [
      {
        head : "Type",
        details : "Candy"
      },
      {
        head : "Quantity",
        details : "150 gm"
      },
      {
        head : "Base Ingredient",
        details : "Imli"
      },
      {
        head : "",
        details : "No Chemicals, No Artificial Flavour, No Added Color."
      },
      {
        head : "",
        details : "No Onion, No Garlic."
      },
    ],
    specifications : [
      {
        head : "Brand",
        details : "Bisuddha"
      },
      {
        head : "Product Name",
        details : "Sweet Imli Sauce"
      },
      {
        head : "Quantity",
        details : "150 gm , 500 gm"
      },
      {
        head : "Base Flavour",
        details : "Imli"
      },
      {
        head : "Organic",
        details : "Yes"
      },
      {
        head : "Container Type",
        details : "Plastic Bottle"
      },
      {
        head : "Maximum Shelf Life",
        details : "12 Months"
      },
      {
        head : "Ingredient Type",
        details : "Vegetarian"
      },
      {
        head : "Food Preference",
        details : "Vegetarian"
      },
      {
        head : "Added Preservatives",
        details : "No"
      },
      {
        head : "Artificial Flavour",
        details : "No"
      },
      {
        head : "Added Color",
        details : "No"
      },
    ],
    ingredients : [
      {
        value : "Imli"
      },
      {
        value : "Mustard Oil"
      },
      {
        value : "Black Salt"
      },
      {
        value : "Mix Spices"
      },
      {
        value : "Ginger Powder"
      },
      {
        value : "INS 211"
      },
      {
        value : "Sugar"
      },
      {
        value : "Jaggery"
      }
    ],
    nutritionalValue : [

    ]
  }

  return (
    <div className="temp product">
      <div className="container product-container">
        <div className="product-container-left sticky">
          <div className="product-image-container">
            <div className="thumbnail-gallery child">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                  onMouseEnter={() => handleThumbnailHover(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="carousel-container child">
              <div className="product-image">
                <img src={images[currentIndex]} alt={` ${currentIndex + 1}`} />
              </div>
            </div>
          </div>
        </div>
        <div className="product-container-right">
          <div className="product-details">

          </div>
        </div>
      </div>      
    </div>
  )
}

export default SweetImliSauce