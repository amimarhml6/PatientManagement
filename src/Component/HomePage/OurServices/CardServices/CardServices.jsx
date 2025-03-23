import { useNavigate } from 'react-router-dom';
import './CardServices.css';

export default function CardServices({ image, name, desc }) {
    const navigate = useNavigate();

    const handleReadMore = () => {
        const formattedName = encodeURIComponent(name);
        console.log("Navigating to:", `/readmore/${formattedName}`);
        navigate(`/readmore/${formattedName}`);
    };

    return (
        <div className='card-services'>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="card-text">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
            <div className="card-button">
                <button onClick={handleReadMore}>Read More</button>
            </div>
        </div>
    );
}
