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
import AdminsManagementPage from './Pages/AdminPanel/AdminsManagementPage';
import ServicesManagementPage from './Pages/AdminPanel/ServicesManagementPage';
import AppointmentPage from './Pages/AdminPanel/AppointmentPage'; 

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
        <Route path="/Appointement" element={<AppointmentPage/>} />
        <Route path="/AdminsManagement" element={<AdminsManagementPage/>} />
        <Route path="/ServicesManagement" element={<ServicesManagementPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
