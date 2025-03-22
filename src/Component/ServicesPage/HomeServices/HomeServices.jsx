import { useState } from 'react';
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
    const [searchTerm, setSearchTerm] = useState('');

    const services = [
        {
            name: "Dentist Service",
            Readmore: "ReadMore",
            Reserve: "Reserve Now",
            CardDoctor: [
                { image: DocDentist, name: "Jhon Doe", Exp1: "12 years exp", Exp2: "Dental surgery", Exp3: "Aesthetic orthodontics", Exp4: "Dental care" },
                { image: DocService2, name: "Jane Doe", Exp1: "10 years exp", Exp2: "Tooth extraction", Exp3: "Braces", Exp4: "Whitening" },
                { image: DocService3, name: "Dr. Smith", Exp1: "30 years exp", Exp2: "Chronic diseases", Exp3: "Medical emergencies" },
                { image: DocService1, name: "Dr. Brown", Exp1: "28 years exp", Exp2: "Health Check-ups", Exp3: "Vaccination" }
            ]
        },
        {
            name: "Generalist Service",
            Readmore: "ReadMore",
            Reserve: "Reserve Now",
            CardDoctor: [
                { image: DocGeniralist, name: "Dr. Smith", Exp1: "30 years exp", Exp2: "Chronic diseases", Exp3: "Medical emergencies" },
                { image: DocService3, name: "Dr. Brown", Exp1: "28 years exp", Exp2: "Health Check-ups", Exp3: "Vaccination" },
                { image: DocService2, name: "Dr. Adams", Exp1: "35 years exp", Exp2: "Advanced surgery", Exp3: "Orthopedic procedures" },
                { image: DocService1, name: "Dr. Johnson", Exp1: "33 years exp", Exp2: "General surgery", Exp3: "Trauma care" }
            ]
        },
        {
            name: "Surgery Service",
            Readmore: "ReadMore",
            Reserve: "Reserve Now",
            CardDoctor: [
                { image: DocSurgery, name: "Dr. Adams", Exp1: "35 years exp", Exp2: "Advanced surgery", Exp3: "Orthopedic procedures" },
                { image: DocService2, name: "Dr. Johnson", Exp1: "33 years exp", Exp2: "General surgery", Exp3: "Trauma care" },
                { image: DocService3, name: "Dr. Smith", Exp1: "30 years exp", Exp2: "Chronic diseases", Exp3: "Medical emergencies" },
                { image: DocService1, name: "Dr. Brown", Exp1: "28 years exp", Exp2: "Health Check-ups", Exp3: "Vaccination" }
            ]
        },
        {
            name: "Hematologue Service",
            Readmore: "ReadMore",
            Reserve: "Reserve Now",
            CardDoctor: [
                { image: DocHematologue, name: "Dr. Smith", Exp1: "30 years exp", Exp2: "Chronic diseases", Exp3: "Medical emergencies" },
                { image: DocService1, name: "Dr. Brown", Exp1: "28 years exp", Exp2: "Health Check-ups", Exp3: "Vaccination" },
                { image: DocService2, name: "Dr. Adams", Exp1: "35 years exp", Exp2: "Advanced surgery", Exp3: "Orthopedic procedures" },
                { image: DocService3, name: "Dr. Johnson", Exp1: "33 years exp", Exp2: "General surgery", Exp3: "Trauma care" }
            ]
        },
        {
            name: "Radiologue Service",
            Readmore: "ReadMore",
            Reserve: "Reserve Now",
            CardDoctor: [
                { image: DocRadiologue, name: "Dr. Smith", Exp1: "30 years exp", Exp2: "Chronic diseases", Exp3: "Medical emergencies" },
                { image: DocRadio, name: "Dr. Brown", Exp1: "28 years exp", Exp2: "Health Check-ups", Exp3: "Vaccination" },
                { image: DocService3, name: "Dr. Adams", Exp1: "35 years exp", Exp2: "Advanced surgery", Exp3: "Orthopedic procedures" },
                { image: DocService1, name: "Dr. Johnson", Exp1: "33 years exp", Exp2: "General surgery", Exp3: "Trauma care" }
            ]
        }
    ];

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="HomeServices">
            <div className="SearchServices">
                <div className="ISearch">
                    <label style={{fontSize:"25px", fontWeight:"540",marginRight:" 40px"}}>Search for your service : </label>
                    <input 
                        style={{marginRight:" 70px"}}
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
                            <button id="ReadMoreS">{service.Readmore}</button>
                            <button id="ReserveS">{service.Reserve}</button>
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
