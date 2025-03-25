import Navbar from "../Component/Navbar/Navbar";
import BloodHome from "../Component/BloodDonation/BloodHome/BloodHome";
import BloodReserve from '../Component/BloodDonation/BloodReserve/BloodReserve'
import BloodHistory from '../Component/BloodDonation/BloodHistory/BloodHistory'
import Footer from '../Component/Footer/Footer'
import { useState ,useEffect} from "react"

export default function BloodDonation() {

    const [Bloodappointment, setBloodAppointment] = useState([]);

    useEffect(() => {
        const savedAppointment = JSON.parse(localStorage.getItem("Bloodappointment")) || [];
        setBloodAppointment(savedAppointment);
    }, []);
    
    const addBloodAppointment = (newAppointment) => {
        
        setBloodAppointment((prev) => {
            const updatedAppointments = [...prev, newAppointment];
            localStorage.setItem("Bloodappointment", JSON.stringify(updatedAppointments));
            return updatedAppointments;
        });
    };

    return (
        <div>
            <Navbar/>
            <BloodHome/>
            <BloodReserve onAddAppointments={addBloodAppointment}/>
            <BloodHistory/>
            <Footer/>
        </div>
    );
}