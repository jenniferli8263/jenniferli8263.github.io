import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
