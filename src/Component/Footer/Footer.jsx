import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Our Clinic</h3>
          <p>
            Our clinic provides specialized medical services with highly qualified doctors in multiple fields. We are open 7 days a week to meet your healthcare needs.
          </p>
          <p>📍 Address: Boumerdes center ville, Algeria</p>
          <p>🕒 Hours: 08:00 AM - 08:00 PM</p>
          {/* apropos */}
          <p>For other details ..</p>
        </div>

        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li>General Consultation</li>
            <li>Surgery</li>
            <li>Dentistry</li>
            <li>Radiology</li>
            <li>24/7 Emergencies</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact & Emergencies</h3>
          <p>📞 Call Us: <a href="tel:+213123456789">+213 123 456 789</a></p>
          <p>📧 Email: <a href="mailto:contact@clinic.com">contact@medlink.com</a></p>
          {/* link to page contact us */}
          <p>📲 website: <a href="#">Send a Message</a></p> 
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Book an Appointment</a></li>
            <li><a href="#">Meet Our Doctors & Services</a></li>
            <li><a href="#">Blood Donation</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-instagram"></i></a>
          <a href="#"><i className="bx bxl-linkedin"></i></a>
          <a href="#"><i className="bx bxl-whatsapp"></i></a>
        </div>
        <p>© 2025 MEDLINK | All Rights Reserved</p>
      </div>
    </footer>
  );
}
