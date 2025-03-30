import './CardDoc.css';
import CardExp from '../../../HomePage/OurDoctors/CardExp/CardExp';

export default function CardDoctor({ image, name, experiences = []}) {
    
    console.log("Doctor experiences:", experiences);

    return (
        <div className='card-Doc'>
            <div className="imag">
                <img src={image} alt={name} />
            </div>
            <div className="card-textD">
                <h1>{name}</h1>
                <CardExp expList={experiences} />
            </div>
        </div>
    );
}
