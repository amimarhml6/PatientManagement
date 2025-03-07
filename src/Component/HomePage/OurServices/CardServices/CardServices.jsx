import './CardServices.css'

export default function CardServices({image , name , desc}) {
    return (
        <div className='card-services'>
          
            <div className="image">
                <img src={image} ></img>
            </div>
            <div className="card-text">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
            <div className="card-button">
                <button>Read More</button>
            </div>
            
        </div>
    );
}