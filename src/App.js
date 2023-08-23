import './App.css';
import {BrowserRouter as Router,  Routes , Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Navbar from './components/Navbar/navbar'
import OurProductsPage from './pages/ourProductsPage';
import OurIngredientsPage from './pages/ourIngredientsPage';
import BlogsPage from './pages/blogsPage';
import AboutUsPage from './pages/aboutUsPage';
import FooterPage from './pages/footerPage';
import Amla from './components/OurIngredients/Ingredient.Amla';
import Imli from './components/OurIngredients/Ingredient.Imli';
import './styleSheets/customScrollBar.css'
import { ReactLenis } from '@studio-freight/react-lenis'
import Mango from './components/OurIngredients/Ingredient.Mango';
import Guava from './components/OurIngredients/Ingredient.Guava';
import CustardApple from './components/OurIngredients/Ingredient.CustardApple';
import SweetAmla from './components/OurProducts/OurProduct.Amla.SweetAmla';
import GheeAmla from './components/OurProducts/OurProduct.Amla.GheeAmla';
import GandharaajAmla from './components/OurProducts/OurProduct.Amla.GandharaajAmla';
import ExtraChiliTangy from './components/OurProducts/OurProduct.Imli.ExtraChiliTangy';
import ImliAchaar from './components/OurProducts/OurProduct.Imli.ImliAchaar';
import SweetChiliTangy from './components/OurProducts/OurProduct.Imli.SweetChiliTangy';
import SweetTangy from './components/OurProducts/OurProduct.Imli.SweetTangy';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09 }}> 
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/our-products" element={<OurProductsPage />} />

            <Route path="/our-products/sweet-amla" element={<SweetAmla />} />
            <Route path="/our-products/ghee-amla" element={<GheeAmla />} />
            <Route path="/our-products/gandharaaj-amla" element={<GandharaajAmla />} />

            <Route path="/our-products/extra-chili-tangy" element={<ExtraChiliTangy />} />
            <Route path="/our-products/imli-achaar" element={<ImliAchaar />} />
            <Route path="/our-products/sweet-chili-tangy" element={<SweetChiliTangy />} />
            <Route path="/our-products/sweet-tangy" element={<SweetTangy />} />

            <Route path="/our-ingredients" element={<OurIngredientsPage />} />

            <Route path="/our-ingredients/amla" element={<Amla />} />
            <Route path="/our-ingredients/imli" element={<Imli />} />
            <Route path="/our-ingredients/mango" element={<Mango />} />
            <Route path="/our-ingredients/guava" element={<Guava />} />
            <Route path="/our-ingredients/custard-apple" element={<CustardApple />} />

            <Route path="/blogs" element={<BlogsPage />} />
            
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
          <FooterPage />
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
