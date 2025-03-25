import { useState } from "react";
import "./FormReserve.css";
import { useNavigate } from 'react-router-dom';


export default function FormReserve({onAddAppointments}) {
    const navigate = useNavigate();
    const emailUser = localStorage.getItem("userConnected")
    const [formsData, setformsData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: emailUser,
        bloodGroup: "",
        date: "",
        hour: "",
        Statut:"Pending"
    });

    const isLogged = JSON.parse(localStorage.getItem("Login"));

    const today = new Date();
    today.setDate(today.getDate() + 1);
    const minDate = today.toISOString().split("T")[0];

    const generateTimeSlots = () => {
        const slots = [];
        for (let h = 8; h < 18; h++) {
            slots.push(`${h}:00`, `${h}:30`);
        }
        return slots;
    };
    const timeSlots = generateTimeSlots();

    const handleChange = (e) => {
        setformsData({ ...formsData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formsData);
        onAddAppointments(formsData);
        
        setformsData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: emailUser,
            bloodGroup: "",
            date: "",
            hour: "",
            Statut:"Pending"
        })
    };

    return (
        <div className="blood-form-container">
            {isLogged ? (""):(<p style={{color:"red"}}>Please Go to Login Page</p>)}
            <h1 className="blood-form-title" style={{color:"#1B5C9E"}}>Book a <span style={{color:"#1BB13C"}}>Blood Donation</span> </h1>
            <form onSubmit={handleSubmit} className="blood-grid-form">
                <div className="blood-form-group">
                    <label>First Name:</label>
                    <input type="text" name="firstName" required value ={formsData.firstName} onChange={handleChange} />
                </div>
                <div className="blood-form-group">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" required value ={formsData.lastName} onChange={handleChange} />
                </div>

                <div className="blood-form-group blood-full-width">
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" required value ={formsData.phoneNumber} onChange={handleChange} />
                </div>

                <div className="blood-form-group blood-full-width">
                    <label>Email:</label>
                    <input type="email" name="email" value ={formsData.email} required disabled />
                </div>

                <div className="blood-form-group blood-full-width">
                    <label>Blood Group:</label>
                    <select name="bloodGroup" required onChange={handleChange} value={formsData.bloodGroup}>
                        <option value="">Select...</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div className="blood-form-group">
                    <label>Date:</label>
                    <input type="date" name="date" required min={minDate} onChange={handleChange} value={formsData.date} />

                </div>
                <div className="blood-form-group">
                    <label>Hour:</label>
                    <select name="hour" required onChange={handleChange} value={formsData.hour}>
                        <option value="">Select a time...</option>
                        {timeSlots.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                {(isLogged)?(
                    <button type="submit" className="blood-btn">Reserve</button>
                ):(
                    <button type="submit" className="blood-btn" onClick={() => navigate('/login')}>Reserve</button>
                )}
                
            </form>
        </div>
    );
}
