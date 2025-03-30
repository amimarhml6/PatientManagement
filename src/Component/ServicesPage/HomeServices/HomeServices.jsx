import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeServices.css';
import SwipeToSlide from '../CardServices/CardS';
import DocGeniralist from '../../../assets/DocGeneralist2.svg';
import DocDentist from '../../../assets/DocDentist2.svg';
import DocHematologue from '../../../assets/DocHematologue2.svg';
import DocRadiologue from '../../../assets/DocRadiologue2.svg';
import DocSurgery from '../../../assets/DocSurgery2.svg';
import DocService1 from '../../../assets/DocService1.svg';
import DocService2 from '../../../assets/DocService2.svg';
import DocService3 from '../../../assets/DocService3.svg';
import DocRadio from '../../../assets/DocService4.svg';

export default function HomeServices() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [services, setServices] = useState([]);

    useEffect(() => {
        const storedServices = localStorage.getItem('servicesData');
        if (storedServices) {
            setServices(JSON.parse(storedServices));
        } else {
            const initialServices = [
                {
                    name: "Dentist Service",
                    description: "Take care of your smile with our dental experts.",
                    Readmore: "Read More",
                    Reserve: "Reserve Now",
                    CardDoctor: [
                        { image: DocDentist, name: "Jhon Doe", experiences: ["12 years exp", "Dental surgery", "Aesthetic orthodontics", "Dental care"] },
                        { image: DocService2, name: "Jane Doe", experiences: ["10 years exp", "Tooth extraction", "Braces", "Whitening"] },
                        { image: DocService3, name: "Dr. Smith", experiences: ["30 years exp", "Chronic diseases", "Medical emergencies"] },
                        { image: DocService1, name: "Dr. Brown", experiences: ["28 years exp", "Health Check-ups", "Vaccination"] }
                    ]
                },
                {
                    name: "Generalist Service",
                    description: "General consultations for all your health needs.",
                    Readmore: "Read More",
                    Reserve: "Reserve Now",
                    CardDoctor: [
                        { image: DocGeniralist, name: "Dr. Smith", experiences: ["30 years exp", "Chronic diseases", "Medical emergencies"] },
                        { image: DocService3, name: "Dr. Brown", experiences: ["28 years exp", "Health Check-ups", "Vaccination"] },
                        { image: DocService2, name: "Dr. Adams", experiences: ["35 years exp", "Advanced surgery", "Orthopedic procedures"] },
                        { image: DocService1, name: "Dr. Johnson", experiences: ["33 years exp", "General surgery", "Trauma care"] }
                    ]
                },
                {
                    name: "Surgery Service",
                    description: "Expert surgeons for high-precision procedures.",
                    Readmore: "Read More",
                    Reserve: "Reserve Now",
                    CardDoctor: [
                        { image: DocSurgery, name: "Dr. Adams", experiences: ["35 years exp", "Advanced surgery", "Orthopedic procedures"] },
                        { image: DocService2, name: "Dr. Johnson", experiences: ["33 years exp", "General surgery", "Trauma care"] },
                        { image: DocService3, name: "Dr. Smith", experiences: ["30 years exp", "Chronic diseases", "Medical emergencies"] },
                        { image: DocService1, name: "Dr. Brown", experiences: ["28 years exp", "Health Check-ups", "Vaccination"] }
                    ]
                },
                {
                    name: "Hematology Service",
                    description: "Experts in blood diseases and hematological disorders.",
                    Readmore: "Read More",
                    Reserve: "Reserve Now",
                    CardDoctor: [
                        { image: DocHematologue, name: "Dr. Smith", experiences: ["30 years exp", "Chronic diseases", "Medical emergencies"] },
                        { image: DocService1, name: "Dr. Brown", experiences: ["28 years exp", "Health Check-ups", "Vaccination"] },
                        { image: DocService2, name: "Dr. Adams", experiences: ["35 years exp", "Advanced surgery", "Orthopedic procedures"] },
                        { image: DocService3, name: "Dr. Johnson", experiences: ["33 years exp", "General surgery", "Trauma care"] }
                    ]
                },
                {
                    name: "Radiology Service",
                    description: "Medical imaging for accurate diagnosis.",
                    Readmore: "Read More",
                    Reserve: "Reserve Now",
                    CardDoctor: [
                        { image: DocRadiologue, name: "Dr. Smith", experiences: ["30 years exp", "Chronic diseases", "Medical emergencies"] },
                        { image: DocRadio, name: "Dr. Brown", experiences: ["28 years exp", "Health Check-ups", "Vaccination"] },
                        { image: DocService3, name: "Dr. Adams", experiences: ["35 years exp", "Advanced surgery", "Orthopedic procedures"] },
                        { image: DocService1, name: "Dr. Johnson", experiences: ["33 years exp", "General surgery", "Trauma care"] }
                    ]
                }
            ];
            setServices(initialServices);
            localStorage.setItem('servicesData', JSON.stringify(initialServices));
        }
    }, []);

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="HomeServices">
            <div className="SearchServices">
                <div className="ISearch">
                    <label style={{ fontSize: "25px", fontWeight: "540", marginRight: "40px" }}>
                        Search for your service:
                    </label>
                    <input
                        style={{ marginRight: "70px" }}
                        type="text"
                        id="inSearch"
                        placeholder="Search Services"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {filteredServices.map((service, index) => (
                <div key={index} className="ServicesList">
                    <div className="ServicesName">
                        <div className="name1">
                            <h1>{service.name}</h1>
                        </div>
                        <div className="name2">
                            <button id="ReadMoreS" onClick={() => navigate(`/readmore/${service.name}`)}>
                                {service.Readmore}
                            </button>
                            <button id="ReserveS" onClick={() => navigate(`/reserve?service=${service.name}`)}>
                                {service.Reserve}
                            </button>
                        </div>
                    </div>
                    <div className="ServicesCard">
                        <SwipeToSlide doctors={service.CardDoctor} />
                    </div>
                </div>
            ))}
        </div>
    );
}
