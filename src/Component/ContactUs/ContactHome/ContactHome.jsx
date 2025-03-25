import './ContactHome.css';
import { useState, useEffect } from "react";

export default function ContactHome() {

    const [ContactData, setContactData] = useState({
        email: "",
        Textarea: ""
    });

    const [Submits, setSubmits] = useState(false);


    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem("ContactData")) || [];
        console.log("Contacts chargés :", storedContacts);
    }, []);

    const handleChange = (e) => {
        setContactData({ ...ContactData, [e.target.name]: e.target.value });
    };

    function handlSubmit(e) {
        e.preventDefault();

        const storedContacts = JSON.parse(localStorage.getItem("ContactData")) || [];
        storedContacts.push(ContactData);
        localStorage.setItem("ContactData", JSON.stringify(storedContacts));
        console.log("Contact soumis :", ContactData);
        setContactData({
            email: "",
            Textarea: ""
        });

         
        setSubmits(true);
        setTimeout(() => {
            setSubmits(false);
        }, 5000);
    }

    return (
        <div className="contact-home">
            <div className="contact-background">
                <div className="ContactText">
                    <h2 style={{ fontSize: "35px", margin: "0px", padding: "10px" }}>Contact Us</h2>
                    <p>Got a question, a suggestion, or a project in mind? Our team is here to help!
                        Fill out the form below and we'll get back to you as soon as possible.
                        You can adapt it to suit your needs!
                    </p>
                </div>
            </div>

            <form className="contact-form" onSubmit={handlSubmit}>
                {Submits && <p style={{ color: "#1BB13C", textAlign: "center", fontWeight: "500" ,marginRight:"50px"}}>Contact Sent Successfully (response before 24h)</p>}
                <input type="email" placeholder="Your Email" name="email" className="input-field" value={ContactData.email} onChange={handleChange} required />
                <textarea placeholder="Your Content Here" name="Textarea" className="textarea-field" value={ContactData.Textarea} onChange={handleChange} required></textarea>
                <button className="send-button">Send</button>
            </form>

            <div className="contact-person"></div>
        </div>
    );
}
