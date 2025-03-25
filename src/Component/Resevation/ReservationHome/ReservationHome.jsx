import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./ReservationHome.css";
import ReservationDentist from "../../../assets/ReservationDentist.svg";  
import ReservationGeneralist from "../../../assets/ReservationGeneralist.svg";
import ReservationSurgery from "../../../assets/ReservationSurgey.svg";
import ReservationHema from "../../../assets/ReservationHematologue.svg";
import ReservationRadiologue from "../../../assets/ReservationRadiologue.svg";

export default function ReservationHome({onAddAppointment}) {
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedService = queryParams.get("service") || "";
    const emailUser = localStorage.getItem("userConnected")

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: emailUser,
        phoneNumber: "",
        service: selectedService,
        date: "",
        hour: "",
        Statut:"Pending"
    });
    const [Submits, setSubmits] = useState(false);
    const isLogged = JSON.parse(localStorage.getItem("Login"));

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
        onAddAppointment(formData);
        setFormData({
            firstname: "",
            lastname: "",
            email: emailUser,
            phoneNumber: "",
            service: selectedService,
            date: "",
            hour: "",
            Statut:"Pending"
        });
        setSubmits(true);
        setTimeout(() => {
            setSubmits(false);
        }, 5000);
        
    };



    return (
        <div className="Reservation">
             
            <div className="left">
            
                <h2 style={{color:"#1B5C9E"}}>Book your <span style={{color:"#1BB13C"}}>appointment</span></h2>
                <form onSubmit={handleSubmit}>
               
                    <div className="form-row">
                        <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
                        <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
                    </div>

                    <input type="email" name="email" placeholder="Email" value={formData.email} disabled />
                    <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
                    <input type="text" name="service" value={formData.service} disabled />

                     
                    <div className="form-row">
                        <input 
                            type="date" 
                            name="date" 
                            min={new Date(Date.now() + 86400000).toISOString().split("T")[0]} 
                            value={formData.date} 
                            onChange={handleChange} 
                            required 
                        />
                        <select name="hour" value={formData.hour} onChange={handleChange} required>
                            <option value="">Select a hour</option>
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>

                    {isLogged ? (""):(<p style={{color:"red",fontWeight: "500",padding:"10px 0px 0px 0px"}}>Please Go to Login Page</p>)}
                    {Submits && <p style={{ color: "#1BB13C", textAlign: "center", fontWeight: "500",padding:"10px 0px 0px 0px"}}>Reservation Successfully</p>}
                    
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
