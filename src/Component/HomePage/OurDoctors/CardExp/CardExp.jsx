import './CardExp.css';

export default function CardExp({ expList = [] }) {  
    const filteredExp = Array.isArray(expList) ? expList.filter(exp => exp) : [];
    
    console.log("Exp list:", expList);

    return (
        <div className='card-Exp'>
            {filteredExp.map((exp, index) => (
                <div key={index} className="exp-item">{exp}</div>
            ))}
        </div>
    );
}

