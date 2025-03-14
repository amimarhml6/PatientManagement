import './CardExp.css';

export default function CardExp({ expList }) {
    
    const validExp = expList.filter(exp => exp);

    return (
        <div className='card-Exp'>
            {validExp.map((exp, index) => (
                <div key={index} className="exp-item">{exp}</div>
            ))}
        </div>
    );
}
