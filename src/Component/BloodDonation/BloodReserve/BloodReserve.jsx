import './BloodReserve.css'
import ReserveForm from './FormReserve/FormReserve'

export default function BloodReserve() {
    return (
        <div className='Blood-Donation'>
            
            <div className="Blood-Info">
                <div className="Blood-left">
                    <ReserveForm/>
                </div>
                <div className="Blood-right">
                     
                    
                </div>
            </div>
            
        </div>
    );
}