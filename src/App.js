import './App.css';
import HomePage from './pages/homePage';
import './styleSheets/customScrollBar.css'
import { ReactLenis } from '@studio-freight/react-lenis'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09 }}> 
      <div className="App">
        <HomePage />
      </div>
    </ReactLenis>
  );
}

export default App;
