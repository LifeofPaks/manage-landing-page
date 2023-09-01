import './App.scss';
import FirstSection from './components/FirstSection/FirstSection';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Simplify from './components/Simplify/Simplify';

function App() {
  return (
    <main className="App">
      <Hero/>
      <FirstSection/>
      <Simplify/>
      <Footer/>
    </main>
  );
}

export default App;
