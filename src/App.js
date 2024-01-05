import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import NavBar from './components/NavigationBar';
import Intro from './pages/Introduction'
import Skills from './pages/Skills';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element ={<Intro />} /> 
      <Route path="/Skills" element={<Skills />} />
      </Routes>
      </BrowserRouter>
    
  </div>
  
  );
}

export default App;
