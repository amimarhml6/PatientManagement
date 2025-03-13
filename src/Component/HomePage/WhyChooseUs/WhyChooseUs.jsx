import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2 className="why-title">Why Choose MedLink?</h2>
      <p className="why-description">
        With MedLink, you can easily book appointments and quickly access the care you need. 
        Our clinic offers seamless and efficient medical monitoring for better care. 
        Your health is our priority!
      </p>

      <div className="why-container">
         
        <div className="why-box">
          <div className="why-icon">
            <i className='bx bxs-ambulance'></i>
          </div>
          <h3 className="why-box-title">24/7 Emergency</h3>
        </div>

        <div className="why-box why-box-highlighted">
          <div className="why-icon why-icon-highlighted">
            <i className='bx bx-clinic'></i>
          </div>
          <h3 className="why-box-title">Personalized Medical Monitoring</h3>
        </div>

        <div className="why-box">
          <div className="why-icon">
            <i className='bx bxs-coin-stack'></i>
          </div>
          <h3 className="why-box-title">Best Price</h3>
        </div>

      </div>
    </section>
  );
}
