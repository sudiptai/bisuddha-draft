import React from 'react'
import './homeComponent.css'
import demoImg from "../../assets/images/product/demo-product.jpg"
// import star from "../../assets/logo/star.png"

const homeProductShow = () => {
  
  //Sweet Amla , Ghee Amla , Gandharaaj Amla , Sweet Tangy , Sweet Chili Tangy , Extra Chili Tangy , Imli Achaar
  const products = [
    {
      name: 'Sweet Amla Candy',
      image: demoImg,
      link: '/our-products/sweet-amla',
      price: '100',
      ratings: '0',
      quantity: '100',
      tagLine: 'Sweet Amla'
    },
    {
      name: 'Ghee Amla Candy',
      image: demoImg,
      link: '/our-products/ghee-amla',
      price: '100',
      ratings: '0',
      quantity: '100',
      tagLine: 'Ghee Amla'
    },
    {
      name: 'Gandharaaj Amla Candy',
      image: demoImg,
      link: '/our-products/gandharaaj-amla',
      price: '100',
      ratings: '0',
      quantity: '100',
      tagLine: 'Gandharaaj Amla'
    },
    {
      name: 'Sweet Tangy',
      image: demoImg,
      link: '/our-products/sweet-tangy',
      price: '100',
      ratings: '0',
      quantity: '100',
      tagLine: 'Sweet Tangy'
    },
    {
      name: 'Sweet Chili Tangy',
      image: demoImg,
      link: '/our-products/sweet-chili-tangy',
      price: '100',
      ratings: '0',
      quantity: '100',
      tagLine: 'Sweet Chili Tangy'
    },
    {
      name: 'Extra Chili Tangy',
      image: demoImg,
      link: '/our-products/extra-chili-tangy',
      price: '100',
      ratings: '0',
      quantity: '100',
      tagLine: 'Extra Chili Tangy'
    },
    {
      name: 'Imli Achaar',
      image: demoImg,
      link: '/our-products/imli-achaar',
      price: '100',
      ratings: '0',
      quantity: '100',
      tagLine: 'Imli Achaar'
    }
  ]

  return (
    <div>
      <div className="homePS">
        <div className="container homePS-container">
        <div className="homePS-title h1 cap ta-cen bw c-og">The best Dispensary for Having Unique Foods</div>
          <div className="PS-carousel-grid-container ">
            <div className="PS-intro bg-dg c-be">
              <h5 className='cap'>Shop for Our Best Seller</h5>
            </div>
            <div className='PS-product-grid-container'>
              <div className='carrousel'>
                
                {products.map((product, index) => (
                  <a href={product.link} key={index}>
                    <div className="card">
                      <div className="card-product-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <h3 className="card-product-name c-b">{product.name}</h3>
                    </div>
                  </a>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homeProductShow
