import './App.css';
import Navbar from './components/Navbar';
import ActiveSlider from './components/ActiveSlider';
import Hotels from './components/Hotels';
import Frequently from './components/Frequently';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Local from './components/Local';
import Restaurant from './components/Restaurant';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">

        <Navbar />
        <Landing />
        <hr />
        <ActiveSlider />
        <hr />
        <Restaurant />
        <Hotels />
        <hr />
        <ActiveSlider />
        <hr />
        <br />
        <br />
        <Frequently />
        <br />
        <hr />
        <Local />
        <br />
        <Testimonials />
        <Footer />
       
    </div>
  );
}

export default App;
