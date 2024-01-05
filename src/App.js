import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Skills from './pages/Skills';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/Skills" element={<Skills />} />
      </Routes>
      </BrowserRouter>
    
  </div>
  
  );
}

export default App;
