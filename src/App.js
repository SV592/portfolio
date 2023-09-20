import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Timeline from './components/timeline';
import Papers from './components/papers';
import Projects from './components/projects';
import Footer from './components/footer';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Home />
        <About />
        <Timeline />
        <Papers />
        <Projects />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
