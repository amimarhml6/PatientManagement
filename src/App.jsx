import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePages';
import Services from './Pages/Services';
import Apropos from './Pages/Apropos';
import Contact from './Pages/Contact';
import Login from './Pages/Login/LoginPage/LoginPage';
import BloodDonation from './Pages/BloodDonation';
import Signup from './Pages/Login/SignupPage/SignupPage';
import Reservation from './Pages/ReservationPage'
import ReadMore from './Pages/ReadMorePage'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BloodDonation" element={<BloodDonation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/reserve" element={<Reservation/>} />
        <Route path="/readmore/:id" element={<ReadMore/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
