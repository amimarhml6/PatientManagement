import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePages';
import Services from './Pages/Services';
import Apropos from './Pages/Apropos';
import Contact from './Pages/Contact';
import Login from './Pages/LoginAdmin';
import BloodDonation from './Pages/BloodDonation';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/BloodDonation" element={<BloodDonation />} />
      </Routes>
    </Router>
  );
}

export default App;
