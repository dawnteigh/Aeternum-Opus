import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
