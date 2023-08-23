import React from 'react';
import custardAppleImg from '../../assets/images/ingredients/custard-apple.jpg';

const CustardApple = () => {
  return (
    <div className='ingredient'>
      <div className="container">
        <div className="ingredient-container">
          <div className="ingredient-first-section">
            <div className="ingredient-image">
              <img className="sh-4" src={custardAppleImg} alt="Custard Apple" />
            </div>
            <div className="ingredient-basic-info">
              <h3 className='uc'>Custard Apple</h3> <br/>
              <p>Custard apple, scientifically known as <i><b>Annona reticulata</b></i>, is a tropical fruit-bearing tree native to various regions around the world.</p> <br/>
              <p>Also referred to as "sitaphal" in Hindi, custard apple has a distinctive appearance with its green bumpy skin and sweet, creamy pulp.</p> <br/>
              <p>The fruit is known for its delectable taste, combining flavors of banana, vanilla, and pineapple.</p> <br/>
              <p>Custard apple is enjoyed both as a fresh fruit and as an ingredient in various culinary preparations.</p> <br/>
            </div>
          </div>
          <div className="ingredient-second-section ingredient-detailed-info">
            <h4 className="in-info-sec">Botanical Characteristics.</h4><br/>
            <p>1. The custard apple tree is small to medium-sized, with spreading branches and large leaves.</p><br/>
            <p>2. The fruit is typically heart-shaped or oval, and its skin is covered with soft, thorn-like projections.</p><br/>
            <h4 className="in-info-sec">Nutritional Profile.</h4><br/>
            <p>1. Custard apple is rich in carbohydrates and dietary fiber, providing a natural source of energy.</p><br/>
            <p>2. It is a good source of vitamins such as vitamin C, vitamin A, and several B vitamins.</p><br/>
            <p>3. The fruit contains minerals like potassium, magnesium, and iron.</p><br/>
            <h4 className="in-info-sec">Health Benefits.</h4><br/>
            <h5>1. Nutrient-Rich:</h5>
            <p>Custard apple is packed with essential nutrients that contribute to overall health and vitality.</p><br/>
            <h5>2. Antioxidant Properties:</h5>
            <p>The presence of antioxidants in custard apple helps combat oxidative stress and support cellular health.</p><br/>
            <h5>3. Immune System Support:</h5>
            <p>Vitamin C in custard apple boosts the immune system, enhancing the body's defense against infections and illnesses.</p><br/>
            <h5>4. Digestive Health:</h5>
            <p>Dietary fiber in custard apple aids in digestion and promotes a healthy digestive system.</p><br/>
            <h5>5. Heart Health:</h5>
            <p>Potassium content in custard apple supports heart health by regulating blood pressure and promoting proper cardiovascular function.</p><br/>
            <h5>6. Skin Health:</h5>
            <p>Vitamins and antioxidants in custard apple contribute to radiant skin and may help combat signs of aging.</p><br/>
            <h5>7. Bone Health:</h5>
            <p>Minerals like calcium and magnesium in custard apple play a role in maintaining strong and healthy bones.</p><br/>
            <h4 className='in-info-sec'>Forms of Consumption.</h4><br/>
            <p>1. Custard apple is commonly enjoyed by scooping out the creamy pulp and discarding the seeds.</p><br/>
            <p>2. It is used in making smoothies, milkshakes, desserts, and ice creams.</p><br/>
            <h4 className='in-info-sec'>Precautions.</h4><br/>
            <p>1. Custard apple seeds are toxic and should not be consumed.</p><br/>
            <p>2. Excessive consumption of custard apple may lead to weight gain due to its natural sugar content.</p><br/>
            <h4 className='in-info-sec'>Conclusion.</h4>
            <p>Custard apple, with its delightful taste and nutritional content, offers a delightful addition to the diet. Its array of vitamins, minerals, and antioxidants contribute to various health benefits, making it a wholesome fruit to savor. Incorporating custard apple into a balanced diet can be a flavorful way to support overall well-being.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustardApple;
