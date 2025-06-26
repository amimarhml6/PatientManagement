import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 style={{color:"#1B5C9E"}}>About <span style={{color:"#1BB13C"}}>Our Clinic</span></h3>
          <p>
            Our clinic provides specialized medical services with highly qualified doctors in multiple fields. We are open 7 days a week to meet your healthcare needs.
          </p>
           
           
        </div>

        <div className="footer-section services">
          <h3 style={{color:"#1B5C9E"}} >Our <span style={{color:"#1BB13C"}}>Services</span></h3>
          <ul>
            <li>General Consultation</li>
            <li>Surgery</li>
            <li>Dentistry</li>
            <li>Radiology</li>
            <li>24/7 Emergencies</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 style={{color:"#1B5C9E"}} >Contact & <span style={{color:"#1BB13C"}}>Emergencies</span></h3>
          <p>📞 Call Us: <a href="tel:+213123456789">+213 123 456 789</a></p>
          <p>📧 Email: <a href="mailto:contact@clinic.com">contact@medlink.com</a></p>
          <p>📲 website: <a href="/contact">Send a Message</a></p> 
        </div>

        <div className="footer-section links">
          <h3 style={{color:"#1B5C9E"}}>Quick <span style={{color:"#1BB13C"}}>Links</span></h3>
          <ul>
            <li><a href="/services">Book an Appointment</a></li>
            <li><a href="/services">Meet Our Doctors & Services</a></li>
            <li><a href="/BloodDonation">Blood Donation</a></li>
          </ul>
        </div>
      </div>

      
      <hr className="footer-separator" />

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-instagram"></i></a>
          <a href="#"><i className="bx bxl-linkedin"></i></a>
          <a href="#"><i className="bx bxl-whatsapp"></i></a>
        </div>
        <p>© 2025 MEDLINK | All Rights Reserved</p>
        <p>Designed by <a href="https://www.instagram.com/amar_engineer1/" target="_blank" rel="noopener noreferrer">Amar_engineer1</a></p>
      </div>
    </footer>
  );
}
