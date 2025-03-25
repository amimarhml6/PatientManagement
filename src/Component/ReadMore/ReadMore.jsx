import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SwipeToSlide from '../ServicesPage/CardServices/CardS'; // Import slider
import './ReadMore.css';

export default function ReadMore() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);


    useEffect(() => {
        window.scrollTo(0, 0);
        const storedServices = JSON.parse(localStorage.getItem('servicesData')) || [];
        const foundService = storedServices.find(s => s.name === decodeURIComponent(id));

        if (foundService) {
            setService(foundService);
        }
    }, [id]);

    if (!service) {
        return <h1 className="not-found">Service not found</h1>;
    }

    return (
        <div className="read-more-container">
             
            <header className="header-section">
                <h1 className="main-title">Welcome to the {service.name} </h1>
            </header>

            
            <section className="description-section">
                <p>{service.description || `Learn more about our specialized ${service.name} services.`}</p>

                <button className="reserve-btn" onClick={() => navigate(`/reserve?service=${encodeURIComponent(service.name)}`)}>
                    Reserve Now
                </button>
                
                
            </section>

             
            <section className="doctors-section">
                <h2 style={{color:"#1B5C9E",fontSize:"35px"}}>Our <span style={{color:"#1BB13C"}}>Specialists</span></h2>
                <SwipeToSlide doctors={service.CardDoctor} />
            </section>
        </div>
    );
}
