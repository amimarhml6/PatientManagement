import './CardDoctor.css';
import CardExp from '../CardExp/CardExp';

export default function CardDoctor({ image, name, Exp1, Exp2, Exp3, Exp4}) {
    
    const expList = [Exp1, Exp2, Exp3, Exp4];

    return (
        <div className='card-Doctos'>
            <div className="images">
                <img src={image} alt={name} />
            </div>
            <div className="card-textDoc">
                <h1>{name}</h1>
                <CardExp expList={expList} />
            </div>
        </div>
    );
}
