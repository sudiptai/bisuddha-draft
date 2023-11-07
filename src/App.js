import './App.css';
import {BrowserRouter as Router,  Routes , Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis'
import './styleSheets/customScrollBar.css';

import Navbar from './components/Navbar/navbar'
import Footer from './pages/footerPage';

/*Pages*/
import HomePage from './pages/homePage';
import OurProductsPage from './pages/ourProductsPage';
import OurIngredientsPage from './pages/ourIngredientsPage';
import BlogsPage from './pages/blogsPage';
import AboutUsPage from './pages/aboutUsPage';


import ShopByCategories from './components/OurProducts/ShopByCategories';
import ShopByIngredients from './components/OurProducts/ShopByIngredients';

/*All Ingredients*/
import Amla from './components/OurIngredients/Ingredient.Amla';
import Imli from './components/OurIngredients/Ingredient.Imli';
import Mango from './components/OurIngredients/Ingredient.Mango';
import Guava from './components/OurIngredients/Ingredient.Guava';
import CustardApple from './components/OurIngredients/Ingredient.CustardApple';

/*All Products*/

import SweetAmlaCandy from './AllProducts/Amla.SweetAmlaCandy';
import GheeAmlaCandy from './AllProducts/Amla.GheeAmlaCandy';
import GandharajAmlaCandy from './AllProducts/Amla.GandharajAmlaCandy';
import ImliAchaar from './AllProducts/Imli.ImliAchaar';
import SchezwanImliSauce from './AllProducts/Imli.SchezwanImliSauce';
import SweetChiliImliSauce from './AllProducts/Imli.SweetChiliImliSauce';
import SweetImliSauce from './AllProducts/Imli.SweetImliSauce';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09 }}> 
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/our-products" element={<OurProductsPage />} >
              <Route index element={<ShopByIngredients />} />
              <Route path="shop-by-categories" element={<ShopByCategories />} />
              <Route path="shop-by-ingredients" element={<ShopByIngredients />} />
            </Route>

            <Route path="/our-products/sweet-amla" element={<SweetAmlaCandy />} />
            <Route path="/our-products/ghee-amla" element={<GheeAmlaCandy />} />
            <Route path="/our-products/gandharaaj-amla" element={<GandharajAmlaCandy />} />
            <Route path="/our-products/imli-achaar" element={<ImliAchaar />} />
            <Route path="/our-products/schezwan-imli-sauce" element={<SchezwanImliSauce />} />
            <Route path="/our-products/sweet-chili-imli-sauce" element={<SweetChiliImliSauce />} />
            <Route path="/our-products/sweet-imli-sauce" element={<SweetImliSauce />} />

            <Route path="/our-ingredients" element={<OurIngredientsPage />} />

            <Route path="/our-ingredients/amla" element={<Amla />} />
            <Route path="/our-ingredients/imli" element={<Imli />} />
            <Route path="/our-ingredients/mango" element={<Mango />} />
            <Route path="/our-ingredients/guava" element={<Guava />} />
            <Route path="/our-ingredients/custard-apple" element={<CustardApple />} />

            <Route path="/blogs" element={<BlogsPage />} />
            
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
