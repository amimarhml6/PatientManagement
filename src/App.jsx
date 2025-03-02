import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePages';
import Services from './Pages/Services';
import Apropos from './Pages/Apropos';
import Contact from './Pages/Contact';
import LoginAdmin from './Pages/LoginAdmin';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<LoginAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
