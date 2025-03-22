import { useState } from "react";
import "./FormReserve.css";

export default function FormReserve() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        numero: "",
        email: "",
        groupeSanguin: "",
        date: "",
        heure: "",
    });

 
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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données du formulaire:", formData);
        
    };

    return (
        <div className="form-container">
            <h1 style={{color:'#1B5C9E' , marginBottom:"10px"}}>Book a blood donation</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name :</label>
                <input type="text" name="nom" required onChange={handleChange} />

                <label>Last Name :</label>
                <input type="text" name="prenom" required onChange={handleChange} />

                <label>Number :</label>
                <input type="tel" name="numero" required onChange={handleChange} />

                <label>Email :</label>
                <input type="email" name="email" required onChange={handleChange} />

                <label>Blood group :</label>
                <select name="groupeSanguin" required onChange={handleChange}>
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

                <label>Date :</label>
                <input type="date" name="date" required min={minDate} onChange={handleChange} />

                <label>Hour :</label>
                <select name="heure" required onChange={handleChange}>
                    <option value="">Select a time...</option>
                    {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>

                <button type="submit" className="Blood-btnn">Reserve</button>
            </form>
        </div>
    );
}
