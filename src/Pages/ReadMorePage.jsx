import Navbar from "../Component/Navbar/Navbar";
import ReadMore from "../Component/ReadMore/ReadMore";
import FeedBack from '../Component/HomePage/ClientFeedBack/ClientFeedBack'
import Footer from '../Component/Footer/Footer'
export default function ReadMorePage() {
    return (
        <div>
            <Navbar/>
            <ReadMore/>
            <FeedBack/>
            <Footer/>
        </div>
    );
}