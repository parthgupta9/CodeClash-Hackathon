import './App.css';
import Navbar from './components/Navbar';
import ActiveSlider from './components/ActiveSlider';
import Hotels from './components/Hotels';
import Frequently from './components/Frequently';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <ActiveSlider/>
     <hr/>
     <Hotels/>
     <hr/>
     <ActiveSlider/>
     <hr/>
     <br/>
     <br/>
     <Frequently/>
     <br/>
     <hr/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
