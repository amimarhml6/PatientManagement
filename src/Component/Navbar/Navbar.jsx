import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';
import MedlinkLogo from "../../assets/Design.png";
import 'boxicons';

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isLogged = JSON.parse(localStorage.getItem("Login"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <Link to="/Home" className="brand-link">
          <img src={MedlinkLogo} alt="Medlink Logo" className="logo" />
          <span className="brand-name" style={{color:"#1B5C9E"}}>Med
            <span className="brand-name" style={{color:"#1BB13C"}}>Link</span>
          </span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/BloodDonation" className="nav-link">BloodDonation</Link>
        <Link to="/propos" className="nav-link">A propos</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <div 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="dropdown-button">Admin ▼</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/Appointement" className="dropdown-item">Appointement</Link>
              <Link to="/AdminsManagement" className="dropdown-item">Admins Management</Link>
              <Link to="/ServicesManagement" className="dropdown-item">Services Management</Link>
            </div>
          )}
        </div>
      </div>

      <div className='log' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px', marginRight: "100px" }}>
        {isLogged ? (
          <button className="button-85" role="button" onClick={() => navigate('/login')}>Log Out</button>
        ) : (
          <button className="nav-link" id='login' onClick={() => navigate('/login')}>
            <i className='bx bxs-user-circle'></i>
          </button>
        )}
      </div>
    </nav>
  );
}
