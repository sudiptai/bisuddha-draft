import './App.css';
import HomePage from './pages/homePage';
import Navbar from './components/Navbar/navbar'
import './styleSheets/customScrollBar.css'
import { ReactLenis } from '@studio-freight/react-lenis'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09 }}> 
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    </ReactLenis>
  );
}

export default App;
