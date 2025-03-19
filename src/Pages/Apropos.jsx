import Navbar from "../Component/Navbar/Navbar";
import HomeApropos from '../Component/Apropos/AproposHome/AproposHome'
import AproposDes from "../Component/Apropos/AproposDes/AproposDes";
import Footer from "../Component/Footer/Footer";

export default function Apropos() {
    return (
        <div>
            <Navbar/>
            <HomeApropos/> 
            <AproposDes/>
            <Footer/>
        </div>
    );
}