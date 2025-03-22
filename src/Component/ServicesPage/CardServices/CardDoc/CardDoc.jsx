import './CardDoc.css';
import CardExp from '../../../HomePage/OurDoctors/CardExp/CardExp';

export default function CardDoctor({ image, name, Exp1, Exp2, Exp3, Exp4}) {
    
    const expList = [Exp1, Exp2, Exp3, Exp4];

    return (
        <div className='card-Doc'>
            <div className="imag">
                <img src={image} alt={name} />
            </div>
            <div className="card-textD">
                <h1>{name}</h1>
                <CardExp expList={expList} />
            </div>
        </div>
    );
}
