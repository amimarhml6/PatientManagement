import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./ReservationHome.css";
import ReservationDentist from "../../../assets/ReservationDentist.svg";  
import ReservationGeneralist from "../../../assets/ReservationGeneralist.svg";
import ReservationSurgery from "../../../assets/ReservationSurgey.svg";
import ReservationHema from "../../../assets/ReservationHematologue.svg";
import ReservationRadiologue from "../../../assets/ReservationRadiologue.svg";

export default function ReservationHome() {
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedService = queryParams.get("service") || "";

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        service: selectedService,
        date: "",
        time: ""
    });

    const [availableTimes, setAvailableTimes] = useState([]);

    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const serviceImages = {
        "Dentist Service": ReservationDentist,
        "Generalist Service": ReservationGeneralist,
        "Surgery Service": ReservationSurgery,
        "Hematologue Service": ReservationHema,
        "Radiologue Service": ReservationRadiologue
    };

    useEffect(() => {
        generateTimeSlots();
    }, []);

    const generateTimeSlots = () => {
        const slots = [];
        let hour = 8;
        let minute = 0;
        while (hour < 18) {
            slots.push(`${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`);
            minute += 30;
            if (minute >= 60) {
                minute = 0;
                hour++;
            }
        }
        setAvailableTimes(slots);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Réservation soumise :", formData);
    };
    const isLogged = JSON.parse(localStorage.getItem("Login"));


    return (
        <div className="Reservation">
             
            <div className="left">
            {isLogged ? (""):(<p style={{color:"red"}}>Please Go to Login Page</p>)}
                <h2 style={{color:"#1B5C9E"}}>Book your <span style={{color:"#1BB13C"}}>appointment</span></h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} required />
                    <input type="text" name="surname" placeholder="Last Name" value={formData.surname} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                    <input type="text" name="service" value={formData.service} disabled />

                    <input 
                        type="date" 
                        name="date" 
                        min={new Date(Date.now() + 86400000).toISOString().split("T")[0]} 
                        value={formData.date} 
                        onChange={handleChange} 
                        required 
                    />

                    <select name="time" value={formData.time} onChange={handleChange} required>
                        <option value="">Select a time</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>

                    

                    {(isLogged)?(
                        <button type="submit">Reserve Now</button>
                    ):(
                        <button type="submit" onClick={() => navigate('/login')}>Reserve Now</button>
                    )}
                </form>
            </div>

            <div className="right">
                <img src={serviceImages[formData.service] } alt="Réservation" />
            </div>
        </div>
    );
}
