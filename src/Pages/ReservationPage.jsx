// import Navbar from "../Component/Navbar/Navbar";
// import ReservationHome from '../Component/Resevation/ReservationHome/ReservationHome'
// import ReservationHistory from '../Component/Resevation/ReservationHistory/ReservationHistory'
// import Footer from '../Component/Footer/Footer'

// export default function ReservationPage() {
//     return (
//         <div>
//             <Navbar/>
//             <ReservationHome/>
//             <ReservationHistory/>
//             <Footer/>
//         </div>
//     );
// }
import { useState ,useEffect} from "react";
import Navbar from "../Component/Navbar/Navbar";
 import ReservationHome from '../Component/Resevation/ReservationHome/ReservationHome'
 import ReservationHistory from '../Component/Resevation/ReservationHistory/ReservationHistory'
import Footer from '../Component/Footer/Footer';

export default function ReservationPage() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(savedAppointments);
    }, []);
    
    const addAppointment = (newAppointment) => {
        setAppointments((prev) => {
            const updatedAppointments = [...prev, newAppointment];
            localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
            return updatedAppointments;
        });
    };
    
    
 

    return (
        <div>
            <Navbar />
            <ReservationHome onAddAppointment={addAppointment} />
            <ReservationHistory  />
            <Footer />
        </div>
    );
}
