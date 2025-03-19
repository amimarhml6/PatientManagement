import './ContactHome.css';


export default function ContactHome() {
    return (
        <div className="contact-home">
            <div className="contact-background">
                <div className="ContactText">
                    <h2 style={{fontSize:"35px" , margin:"0px" , padding:"10px"}}>Contact Us</h2>
                    <p>Got a question, a suggestion, or a project in mind? Our team is here to help!
                        Fill out the form below and we'll get back to you as soon as possible.
                        You can adapt it to suit your needs!
                    </p>
                </div>
                
            </div>

            <div className="contact-form">
                <input type="email" placeholder="Your Email" className="input-field" />
                <textarea placeholder="Your Content Here" className="textarea-field"></textarea>
                <button className="send-button">Send</button>
            </div>

            <div className="contact-person">
                
            </div>
        </div>
        
    );
}
