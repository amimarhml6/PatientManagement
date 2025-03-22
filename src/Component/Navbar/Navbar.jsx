import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import MedlinkLogo from "../../assets/Design.png";
import 'boxicons'

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/Home" className="brand-link">
          <img src={MedlinkLogo} alt="Medlink Logo" className="logo" />
          <span className="brand-name" style={{color:"#1B5C9E"}}>Med<span className="brand-name" style={{color:"#1BB13C"}}>Link</span></span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/BloodDonation" className="nav-link">BloodDonation</Link>
        <Link to="/propos" className="nav-link">A propos</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>

      <div className='log' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px', marginRight: "100px" }}>
        <button className="nav-link" id='login' onClick={() => navigate('/login')}><i className='bx bxs-user-circle'></i></button>
      </div>
    </nav>
  );
}
