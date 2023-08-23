import React from 'react'
import guavaImg from '../../assets/images/ingredients/guava.jpg'

const Guava = () => {
  return (
    <div className='ingredient'>
      <div className="container">
        <div className="ingredient-container">
          <div className="ingredient-first-section">
            <div className="ingredient-image">
              <img className="sh-4" src={guavaImg} alt="Guava" />
            </div>
            <div className="ingredient-basic-info">
              <h3 className='uc'>Guava</h3> <br/>
              <p>Guava, scientifically known as <i><b>Psidium guajava</b></i>, is a tropical fruit that belongs to the Myrtaceae family.</p> <br/>
              <p>It is native to Central America and Mexico but is now cultivated in various warm regions around the world.</p> <br/>
              <p>Guava is loved for its unique flavor and impressive nutritional profile.</p> <br/>
              <p>The fruit comes in different varieties, with flesh ranging from white to pink and even red.</p> <br/>
              <p>Rich in vitamins, minerals, and dietary fiber, guava offers a range of health benefits.</p> <br/>
            </div>
          </div>
          <div className="ingredient-second-section ingredient-detailed-info">
            <h4 className="in-info-sec">Botanical Characteristics.</h4><br/>
            <p>1. Guava trees are small to medium-sized, with rough bark and spreading branches.</p><br/>
            <p>2. The leaves are simple, opposite, and oval-shaped.</p><br/>
            <p>3. Guava flowers are white and have numerous stamens.</p><br/>
            <p>4. The fruit of the guava tree is round or pear-shaped, with a thin rind and numerous seeds.</p><br/>
            <h4 className="in-info-sec">Nutritional Profile.</h4><br/>
            <p>1. Guava is a rich source of vitamin C, with higher content than many citrus fruits.</p><br/>
            <p>2. It also contains vitamins A, E, and K, as well as essential minerals like potassium and dietary fiber.</p><br/>
            <h4 className="in-info-sec">Health Benefits.</h4><br/>
            <h5>1. Immune System Support:</h5>
            <p>The high vitamin C content in guava boosts immunity and helps the body fight infections.</p><br/>
            <h5>2. Digestive Health:</h5>
            <p>Guava's dietary fiber aids digestion, prevents constipation, and supports a healthy gut.</p><br/>
            <h5>3. Antioxidant Properties:</h5>
            <p>The antioxidants in guava protect cells from damage caused by free radicals.</p><br/>
            <h5>4. Heart Health:</h5>
            <p>Guava's potassium content helps regulate blood pressure, reducing the risk of heart disease.</p><br/>
            <h5>5. Skin Health:</h5>
            <p>Vitamin C in guava promotes healthy skin by supporting collagen production and fighting oxidative stress.</p><br/>
            <h5>6. Eye Health:</h5>
            <p>Guava contains vitamin A, which is essential for maintaining good vision and eye health.</p><br/>
            <h5>7. Weight Management:</h5>
            <p>The low calorie and high fiber content of guava make it a smart choice for weight-conscious individuals.</p><br/>
            <h4 className='in-info-sec'>Forms of Consumption.</h4><br/>
            <p>1. Fresh guava can be enjoyed as a snack, added to fruit salads, or blended into smoothies.</p><br/>
            <p>2. Guava juice is a popular and refreshing beverage.</p><br/>
            <p>3. Guava jams, jellies, and preserves are used as spreads or toppings.</p><br/>
            <p>4. Dried guava slices make for a convenient and nutritious snack.</p><br/>
            <h4 className='in-info-sec'>Precautions.</h4><br/>
            <p>1. Guava seeds are edible, but some people prefer to remove them due to their texture.</p><br/>
            <p>2. Those with allergies to tropical fruits or latex should exercise caution when consuming guava.</p><br/>
            <h4 className='in-info-sec'>Conclusion.</h4>
            <p>Guava is a flavorful and nutrient-packed fruit that offers a multitude of health benefits. Its vitamin C content, along with other vitamins and minerals, supports overall well-being. Whether eaten fresh, juiced, or used in culinary creations, guava is a versatile ingredient that can be enjoyed in various forms while contributing to a balanced and nutritious diet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guava
