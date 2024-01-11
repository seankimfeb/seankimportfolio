import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import NavBar from './components/NavigationBar';
import Intro from './pages/Introduction';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/seankimportfolio" element ={<Intro />} /> 
      <Route path="/skills" element={<Skills />} />
      <Route path ="/projects" element = {<Projects />} />
      </Routes>
      </BrowserRouter>
    
  </div>
  
  );
}

export default App;
