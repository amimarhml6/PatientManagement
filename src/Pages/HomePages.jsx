import Navbar from "../Component/Navbar/Navbar";
import Home from "../Component/HomePage/Home/Home";
import OurServices from "../Component/HomePage/OurServices/OurServices";
import Footer from "../Component/Footer/Footer";
import FocusOnSelect from '../Component/HomePage/OurServices/FocusOnSelect/FocusOnSelect'
export default function HomePages() {
    return (
        <div className="home-pages">
            <Navbar/>
            <Home/>
            <OurServices/>
            <Footer/>
        </div>
    );
}