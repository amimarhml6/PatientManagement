import Navbar from "../Component/Navbar/Navbar";
import BloodHome from "../Component/BloodDonation/BloodHome/BloodHome";
import BloodReserve from '../Component/BloodDonation/BloodReserve/BloodReserve'
import Footer from '../Component/Footer/Footer'
export default function BloodDonation() {
    return (
        <div>
            <Navbar/>
            <BloodHome/>
            <BloodReserve/>
            <Footer/>
        </div>
    );
}