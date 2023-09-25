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
    <div className="app-container">
      <ThemeProvider>
        <Navbar />
        <Home className="section" />
        <About className="section" />
        <Timeline className="section" />
        <Papers className="section" />
        <Projects className="section" />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
