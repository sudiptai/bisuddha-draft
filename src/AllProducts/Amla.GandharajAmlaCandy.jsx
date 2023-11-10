import React, { useState } from 'react'
import './Product.css'

import pic1 from '../AllProducts-Images/Gandharaj-Amla-1.jpg'
import pic2 from '../AllProducts-Images/Gandharaj-Amla-2.jpg'
import pic3 from '../AllProducts-Images/Gandharaj-Amla-3.jpg'
import pic4 from '../AllProducts-Images/Gandharaj-Amla-4.jpg'
import pic5 from '../AllProducts-Images/Gandharaj-Amla-5.jpg'

import vegLogo from '../assets/icons/veg-icon.svg';
import Reputation from '../components/reputations/reputation'

const GandharajAmlaCandy = () => {

  const images = [pic1, pic2, pic3, pic4, pic5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  }

  const handleThumbnailHover = (index) => {
    setCurrentIndex(index);
  }

  const product = {
    name: "Gandharaj Amla Candy",
    punchLine: "Refresh your palate with our Gandharaaj Amla Candy. These amla candies are infused with the zesty essence of Bengal's favorite Gandharaaj lime or lemon, offering a burst of citrusy freshness in every bite. A delightful and tangy twist on the classic amla candy.",
    quantity: "50",
    price: "93",
    buyFromHere: [
      {
        marketPlace: "amazon",
        link: "try",
        backgroundColor: "#ff9900",
        color: "#000000"
      },
    ],
    alsoAvailableIn: [
      {
        quantity: "150 gm",
        price: "255",
      }
    ],
    alsoBuyFromHere: [
      {
        marketPlace: "amazon",
        link: "try",
        backgroundColor: "#ff9900",
        color: "#000000"
      }
    ],
    highlights: [
      {
        head: "Type",
        details: "Candy"
      },
      {
        head: "Quantity",
        details: "50 gm"
      },
      {
        head: "Base Ingredient",
        details: "Amla"
      },
      {
        head: "",
        details: "No Chemicals, No Artificial Flavour."
      },
      {
        head: "",
        details: "No Added Color."
      },
      {
        head: "",
        details: "No Onion, No Garlic."
      },
    ],
    specifications: [
      {
        head: "Brand",
        details: "Bisuddha"
      },
      {
        head: "Fssai Lic. No.",
        details: "12823013000628"
      },
      {
        head: "Product Name",
        details: "Gandharaj Amla Candy"
      },
      {
        head: "Quantity",
        details: "50 gm , 150 gm"
      },
      {
        head: "Base Flavour",
        details: "Amla"
      },
      {
        head: "Organic",
        details: "Yes"
      },
      {
        head: "Container Type",
        details: "Plastic Bottle"
      },
      {
        head: "Best Before",
        details: "12 Months if stored in a cool and dry place"
      },
      {
        head: "Recommended Storage",
        details: "Product should be refrigerated for extended usage and longer self life."
      },
      {
        head: "Ingredient Type",
        details: "Vegetarian"
      },
      {
        head: "Food Preference",
        details: "Vegetarian"
      },
      {
        head: "Added Preservatives",
        details: "INS 211"
      },
      {
        head: "Artificial Flavour",
        details: "No"
      },
      {
        head: "Added Color",
        details: "No"
      },
    ],
    ingredients: [
      {
        value: "Amla"
      },
      {
        value: "Sugar"
      },
      {
        value: "Black Salt"
      },
      {
        value: "Spices"
      },
      {
        value: "INS 211"
      },
      {
        value: "Jaggery"
      },
      {
        value: "Lemon Juice"
      }
    ],
    nutritionalValue: [
      {
        head: "Nutrients",
        value: [
          //Energy , Protein, Carbohydrate, Total Sugars, Added Sugars, Total Fat, Sodium
          {
            name: "Energy (kcal)",
          },
          {
            name: "Carbohydrate (g)",
          },
          {
            name: "Protein (g)",
          },
          {
            name: "Fat (g)",
          },
          {
            name: "Saturated Fat (g)",
          },
          {
            name: "Trams Fatty Acid (g)",
          },
          {
            name: "Cholesterol (mg)",
          },
          {
            name: "Vitamin C (mg)",
          },
          {
            name: "Calcium (mg)",
          },
          {
            name: "Sodium (mg)",
          },
          {
            name: "Iron (mg)",
          },
          {
            name: "Vitamin A (IU)"
          },
          {
            name: "Moisture (g)"
          },
          {
            name: "Ash (g)"
          }
        ]
      },
      {
        head: "Per 25 gm",
        value: [
          {
            value: "84.08"
          },
          {
            value: "21.00"
          },
          {
            value: "0.03"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "51.28"
          },
          {
            value: "23.58"
          },
          {
            value: "12.23"
          },
          {
            value: "0.83"
          },
          {
            value: "0"
          },
          {
            value: "3.13"
          },
          {
            value: "0.10"
          }
        ]
      },
      {
        head: "Per 100 gm",
        value: [
          {
            value: "336.32"
          },
          {
            value: "84.00"
          },
          {
            value: "0.1"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "205.1"
          },
          {
            value: "94.3"
          },
          {
            value: "48.9"
          },
          {
            value: "3.3"
          },
          {
            value: "0"
          },
          {
            value: "12.5"
          },
          {
            value: "0.4"
          },
        ]
      },
      // {
      //   head: "% RDA per serve*",
      //   value: [
      //     {
      //       value: "0.88%"
      //     },
      //     {
      //       value: "_"
      //     },
      //     {
      //       value: "_"
      //     },
      //     {
      //       value: "_"
      //     },
      //     {
      //       value: "7.20%"
      //     },
      //     {
      //       value: "0.02%"
      //     },
      //     {
      //       value: "5.40%"
      //     }
      //   ]
      // },
    ],
    nutritionalDisclaimer: "",
    legalDisclaimer: "This is only brand name/trade mark and does not represent its true nature."
  }

  const perHundredGramPrice = Math.round(((product.price / product.quantity) * 100).toFixed(2));

  return (
    <div className="temp product">
      <div className="container">
        <div className="product-container">
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

              <div className="product-name">
                <h2>{product.name}</h2>
                <div className="vegLogo">
                  <img src={vegLogo} alt="" />
                </div>
              </div>
              
              {
                product.punchLine ? <div className="product-punchline"><p className="lex">{product.punchLine}</p></div> : null
              }
              <div className="product-price pt-1"><h3>₹{product.price}</h3></div>

              <div className="product-quantity pt-1">
                <h5 className="lex">Quantity :</h5>
                <div className="product-quantity-value">
                  <h6 className="c-b">{product.quantity} gm</h6>
                  <p>@ ₹{perHundredGramPrice}/100gm</p>
                </div>
              </div>

              <div className="product-highlights pt-2">
                {
                  !product.highlights ? null :
                    <div className="product-highlight">
                      <h5 className="lex">Highlights :</h5>
                      <div className="product-highlight-value">
                        {
                          product.highlights.map((item, index) => (
                            <div key={index} className="product-highlight-value-item pb-1 c-b">
                              <span className='dot'></span>
                              {
                                item.head ? <h6 className="c-b">{item.head} :</h6> : null
                              }
                              {
                                item.details ? <p>{item.details}</p> : null
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              <div className="product-buy-from-here pt-2">
                {
                  !product.buyFromHere ? null :
                    <div className="product-buy">
                      <h5 className="lex c-g">Buy from here :</h5>
                      <div className="product-buy-value">
                        {
                          product.buyFromHere.map((item, index) => (
                            <div key={index} className="product-buy-value-item">
                              <a href={item.link} target="_blank" rel="noreferrer">
                                <button className="buy-btn btn-primary" style={{ backgroundColor: item.backgroundColor, color: item.color }}>
                                  <h6 className="">Buy Here</h6>
                                  <div className="s lex lw">From {item.marketPlace}</div>
                                </button></a>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              <div className="product-also-available-in pt-2">
                {
                  !product.alsoAvailableIn ? null :
                    <div className="product-available">
                      <h5 className="lex">Also Available in :</h5>
                      <div className="product-available-value">
                        {
                          product.alsoAvailableIn.map((item, index) => (
                            <div key={index} className="product-available-value-item">
                              <h6 className="c-b">{item.quantity}</h6>
                              <p>₹{item.price}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              {/* <div className="product-also-buy-from-here pt-2">
              {
                !product.alsoBuyFromHere ? null :
                  <div className="product-buy">
                    <h5 className="lex c-g">Buy this from here :</h5>
                    <div className="product-buy-value">
                      {
                        product.alsoBuyFromHere.map((item, index) => (
                          <div key={index} className="product-buy-value-item">
                            <a href={item.link} target="_blank" rel="noreferrer">
                              <button className="buy-btn btn-primary" style={{ backgroundColor: item.backgroundColor, color: item.color }}>
                                <h6 className="">Buy Here</h6>
                                <div className="s lex lw">From {item.marketPlace}</div>
                              </button></a>
                          </div>
                        ))
                      }
                    </div>
                  </div>
              
              }
            </div> */}

              <div className="product-ingredients pt-2">
                {
                  !product.ingredients ? null :
                    <div className="product-ingredient">
                      <h5 className="lex c-g">Ingredients :</h5>
                      <div className="product-ingredient-value">
                        {
                          product.ingredients.map((item, index) => (
                            <div key={index} className="product-ingredient-value-item pb-1 c-b">
                              <span className="dot"></span>
                              {
                                item.value ? <p>{item.value}</p> : null
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              <div className="product-specifications pt-2">
                {
                  !product.specifications ? null :
                    <div className="product-specification">
                      <h5 className="lex c-g">Specifications :</h5>
                      <div className="product-specification-value">
                        {
                          product.specifications.map((item, index) => (
                            <div key={index} className="product-specification-value-item pb-1 c-b">
                              {
                                item.head ? <h6 className="c-g">{item.head} :</h6> : null
                              }
                              {
                                item.details ? <p>{item.details}</p> : null
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              <div className="product-nutritional-section pt-2">
                {
                  !product.nutritionalValue ? null :
                    <div className="product-nutritional">
                      <h5 className="lex c-g">Nutritional Value :</h5>
                      <div className="product-nutritional-value">
                        {
                          product.nutritionalValue.map((item, index) => (
                            <div key={index} className="product-nutritional-value-item">
                              {
                                (item.value.length) ? <h6 className="c-g">{item.head}</h6> : <div className="none"></div>
                              }
                              {
                                item.value.map((value, index) => (
                                  <div key={index} className="product-nutritional-value-item-value">
                                    {
                                      value.name ? <p className="c-g">{value.name}</p> : null
                                    }
                                    <div>
                                      {
                                        value.value ? <p className="c-b">{value.value}</p> : null
                                      }
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
                {
                  !product.nutritionalDisclaimer ? null :
                    <div className="product-nutritional-disclaimer pt-1">
                      <div className="lex c-g">{product.nutritionalDisclaimer}</div>
                    </div>
                }
              </div>

              <div className="product-legal-disclaimer pt-2">
                {
                  !product.legalDisclaimer ? null :
                    <div className="product-legal">
                      <h5 className="lex c-g">Legal Disclaimer :</h5>
                      <div className="product-legal-value">
                        <p className="lex c-g">{product.legalDisclaimer}</p>
                      </div>
                    </div>
                }
              </div>
            </div>
            <Reputation />
          </div>
        </div>

        <div className="goBack ta-rig">
          <h5>
            Back to All Products
          </h5>
          <a href="/our-products">
            <button
              className="btn-primary buy-btn h6 lex "
            >
              Shop All
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default GandharajAmlaCandy