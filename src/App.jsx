import Airpods from './components/Airpods';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Ipadair from './components/ipadAir';
import Iphone from './components/iphone';
import Iwatch from './components/iWatch';
import Macbook from './components/MacBook';
import Navbar from './components/Navbar';
import Navdesc from './components/Navdecs';

function App() {
  return (
    <>
      <Navbar />
      <Navdesc />
      <Hero />
      <Iphone />
      <Iwatch />
      <Macbook />
      <Ipadair />
      <Airpods />
      <Footer />
    </>
  )
}

export default App