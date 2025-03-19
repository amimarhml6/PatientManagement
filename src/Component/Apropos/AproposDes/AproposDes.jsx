import React from 'react';
import './AproposDes.css';
import ClientFeedBack from '../../HomePage/ClientFeedBack/ClientFeedBack';

const AproposDes = () => {
  return (
    <div className="apropos-des-container">
       
      <h2>About <span style={{color:"#1BB13C"}}>MedLink</span></h2>
      <p>
        Medlink clinic is a private clinic located in the wilaya of Boumerdes:specializing 
        int the care of various medical care,including general medivine,dentistry,surgery 
        and other medical specialties.Committed to improving the patirnt experience , 
        optimizing internal management and reduce the patients waiting time for 
        consultation, 
        To improve accessibility and service management,a website is needed to allow 
        patients to book appointments and administrators to manage clinic data.
        We are open 7 days a week to meet your healthcare needs.
       </p>

       
      <h3 >Our Features</h3>
      <div className="features-grid">
         
        <div className="feature-card">
            <h4>Appointment Scheduling</h4>
            <p>
            Simplify booking, rescheduling, and canceling appointments with an intuitive interface. Patients can choose their preferred service and time slot, ensuring a seamless and efficient experience. Additionally, we offer a dedicated feature for blood donation appointments, allowing patients to easily schedule their donation and contribute to a noble cause.
            </p>
        </div>
         
        <div className="feature-card">
            <h4>Affordable Care</h4>
            <p>
                We provide the best prices for medical services without compromising on quality. Our platform connects patients with highly experienced doctors, ensuring top-notch care at affordable rates.
            </p>
        </div>
        <div className="feature-card">
            <h4>Experienced Doctors</h4>
            <p>
                Access a network of the best and most experienced doctors in various fields. Our platform ensures that patients receive expert care tailored to their needs.
            </p>
        </div>
        
      </div>

       
      <h3>What Our Patients Say</h3>
        <ClientFeedBack/>

       
      <div className="cta-section">
        <h3>Ready for treatment in MedLink?</h3>
        <p>Get started today and discover a new way to manage your healthcare.</p>
        <button className="cta-button">Click here</button>
      </div>
    </div>
  );
};

export default AproposDes;