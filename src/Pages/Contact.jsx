import Navbar from "../Component/Navbar/Navbar";
import ContactHome from "../Component/ContactUs/ContactHome/ContactHome";
import ContactInfo from "../Component/ContactUs/ContactInfo/ContactInfo";
import Footer from "../Component/Footer/Footer";

export default function Contact() {
    return (
        <div>
            <Navbar/>
            <ContactHome/>
            <ContactInfo/>
            <Footer/>
        </div>
    );
}