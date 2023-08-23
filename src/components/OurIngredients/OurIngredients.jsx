import React from 'react'
import './OurIngredients.css'
import imliImg from '../../assets/images/ingredients/Imli.jpg'
import amlaImg from '../../assets/images/ingredients/amla.jpg'
import mangoImg from '../../assets/images/ingredients/mango.jpg';
import guavaImg from '../../assets/images/ingredients/guava.jpg'
import custardAppleImg from '../../assets/images/ingredients/custard-apple.jpg';
 

const OurIngredients = () => {

  //Ingredient = Imli, Amla, Mango, Guava, Custard Apple
  const Ingredient = [
    {
      name: 'Imli',
      image: imliImg,
      link: '/our-ingredients/imli'
    },
    {
      name: 'Amla',
      image: amlaImg,
      link: '/our-ingredients/amla'
    },
    {
      name: 'Mango',
      image: mangoImg,
      link: '/our-ingredients/mango'
    },
    {
      name: 'Guava',
      image: guavaImg,
      link: '/our-ingredients/guava'
    },
    {
      name: 'Custard Apple',
      image: custardAppleImg,
      link: '/our-ingredients/custard-apple'
    }
  ]

  return (
    <div className='our-ingredients'> 
      <div className="container our-ingredients-container">
        <div className="our-ingredient-grid">
          {Ingredient.map((ingredient, index) => (
            <div className="our-ingredient">
              <a href={ingredient.link} key={index}>
                <div className="ingredient-item bg-hg">
                  <div className="our-ingredient-image">
                    <img src={ingredient.image} alt={ingredient.name} />
                  </div>
                  <h5 className='c-og'>{ingredient.name}</h5>
                </div>
              </a>            
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurIngredients