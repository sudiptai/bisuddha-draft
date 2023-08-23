import React from 'react';
import mangoImg from '../../assets/images/ingredients/mango.jpg';

const Mango = () => {
  return (
    <div className='ingredient'>
      <div className="container">
        <div className="ingredient-container">
          <div className="ingredient-first-section">
            <div className="ingredient-image">
              <img className="sh-4" src={mangoImg} alt="Mango" />
            </div>
            <div className="ingredient-basic-info">
              <h3 className='uc'>Mango</h3> <br/>
              <p>Mango, scientifically known as <i><b>Mangifera indica</b></i>, is a tropical fruit-bearing tree native to South Asia.</p> <br/>
              <p>It is widely cultivated for its delicious and juicy fruit, enjoyed for its sweet and vibrant flavor.</p> <br/>
              <p>Mangoes come in various shapes, sizes, and colors, and they hold cultural and culinary significance in many regions around the world.</p> <br/>
              <p>The fruit is not only beloved for its taste but also valued for its potential health benefits.</p> <br/>
            </div>
          </div>
          <div className="ingredient-second-section ingredient-detailed-info">
            <h4 className="in-info-sec">Botanical Characteristics.</h4><br/>
            <p>1. Mango trees can grow up to 30 meters in height, with a dense canopy of leaves.</p><br/>
            <p>2. The leaves are simple, alternate, and lanceolate in shape.</p><br/>
            <p>3. The fruit varies in size, shape, and color depending on the variety. It can be oval, round, or kidney-shaped.</p><br/>
            <p>4. Mango skin ranges from green to yellow, orange, red, or a combination of these colors when ripe.</p><br/>
            <h4 className="in-info-sec">Nutritional Profile.</h4><br/>
            <p>1. Mangoes are a rich source of vitamins, particularly vitamin C and vitamin A, which contribute to immune support and vision health.</p><br/>
            <p>2. They also contain dietary fiber, potassium, and other essential nutrients.</p><br/>
            <h4 className="in-info-sec">Health Benefits.</h4><br/>
            <h5>1. Immune Boost:</h5>
            <p>The high vitamin C content in mangoes supports the immune system and helps fight off infections.</p><br/>
            <h5>2. Antioxidant Properties:</h5>
            <p>Mangoes contain antioxidants that help neutralize harmful free radicals and protect cells from damage.</p><br/>
            <h5>3. Digestive Health:</h5>
            <p>Dietary fiber in mangoes aids digestion, prevents constipation, and promotes a healthy gut.</p><br/>
            <h5>4. Eye Health:</h5>
            <p>Vitamin A in mangoes is essential for maintaining good vision and eye health.</p><br/>
            <h5>5. Skin Health:</h5>
            <p>Mangoes provide vitamins and antioxidants that contribute to healthy skin, hydration, and a radiant complexion.</p><br/>
            <h5>6. Heart Health:</h5>
            <p>Potassium in mangoes helps regulate blood pressure and supports heart health.</p><br/>
            <h4 className='in-info-sec'>Forms of Consumption.</h4><br/>
            <p>1. Enjoy fresh mango slices as a delicious and hydrating snack.</p><br/>
            <p>2. Add mango chunks to smoothies, yogurt, or salads.</p><br/>
            <p>3. Use mangoes to make refreshing juices, sorbets, and popsicles.</p><br/>
            <p>4. Incorporate mangoes into both sweet and savory dishes, such as salsas, chutneys, and desserts.</p><br/>
            <h4 className='in-info-sec'>Precautions.</h4><br/>
            <p>1. While mangoes are generally safe to eat, some individuals may have allergies or sensitivities to them.</p><br/>
            <p>2. The skin of mangoes can contain urushiol, which is the same compound found in poison ivy and poison oak. It's best to peel mangoes before consumption.</p><br/>
            <h4 className='in-info-sec'>Conclusion.</h4>
            <p>Mangoes are a delightful and nutrient-rich fruit that brings a burst of tropical flavor to your diet. With their wide range of vitamins, minerals, and antioxidants, mangoes offer a host of potential health benefits. Whether enjoyed on their own or used as a versatile ingredient in recipes, mangoes are a delicious way to support overall well-being.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mango;
