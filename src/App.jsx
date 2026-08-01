import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import RoasteryStory from './components/RoasteryStory';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <RoasteryStory />
      </main>
      <Footer />
    </div>
  );
}

export default App;
