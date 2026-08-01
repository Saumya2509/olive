import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import RoasteryStory from './components/RoasteryStory';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <RoasteryStory />
          <Experience />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
