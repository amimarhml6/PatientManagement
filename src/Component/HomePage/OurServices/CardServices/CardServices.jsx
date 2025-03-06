import './CardServices.css'
import image from '../../../../assets/dentist.jpg'
export default function CardServices() {
    return (
        <div className='card-services'>
          
            <div className="image">
                <img src={image} ></img>
            </div>
            <div className="card-text">
                <h1>Dentist</h1>
                <p>Our Dentist team are highly qualified and experienced in their field. They are always ready to help you.</p>
            </div>
            <div className="card-button">
                <button>Read More</button>
            </div>
            
        </div>
    );
}