import './App.css';
import Navbar from './components/Navbar';
import ActiveSlider from './components/ActiveSlider';
import Hotels from './components/Hotels';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <ActiveSlider/>
     <Hotels/>
     <ActiveSlider/>
    </div>
  );
}

export default App;
