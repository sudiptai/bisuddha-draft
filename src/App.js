import './App.css';
import {BrowserRouter as Router,  Routes , Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Navbar from './components/Navbar/navbar'
import OurProductsPage from './pages/ourProductsPage';
import OurIngredientsPage from './pages/ourIngredientsPage';
import BlogsPage from './pages/blogsPage';
import AboutUsPage from './pages/aboutUsPage';
import FooterPage from './pages/footerPage';
import './styleSheets/customScrollBar.css'
import { ReactLenis } from '@studio-freight/react-lenis'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09 }}> 
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-products" element={<OurProductsPage />} />
            <Route path="/our-ingredients" element={<OurIngredientsPage />} />
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
