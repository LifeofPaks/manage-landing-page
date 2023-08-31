import './App.scss';
import FirstSection from './components/FirstSection/FirstSection';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Hero/>
      <FirstSection/>
      <Testimonial/>
    </main>
  );
}

export default App;
