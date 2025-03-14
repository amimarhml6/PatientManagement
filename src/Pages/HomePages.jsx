import Navbar from "../Component/Navbar/Navbar";
import Home from "../Component/HomePage/Home/Home";
import OurServices from "../Component/HomePage/OurServices/OurServices";
import Footer from "../Component/Footer/Footer";
import FocusOnSelect from '../Component/HomePage/OurServices/FocusOnSelect/FocusOnSelect'
import WhyChooseUs from "../Component/HomePage/WhyChooseUs/WhyChooseUs";
import OurDoctors from "../Component/HomePage/OurDoctors/OurDoctors";

export default function HomePages() {
    return (
        <div className="home-pages">
            <Navbar/>
            <Home/>
            <OurServices/>
            <WhyChooseUs/>
            <OurDoctors/>
            <Footer/>
        </div>
    );
}