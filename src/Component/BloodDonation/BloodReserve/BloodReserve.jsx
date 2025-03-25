import './BloodReserve.css'
import ReserveForm from './FormReserve/FormReserve'

export default function BloodReserve({onAddAppointments}) {
    return (
        <div className='Blood-Donation'>
            
            <div className="Blood-Info">
                <div className="Blood-left">
                    <ReserveForm onAddAppointments={onAddAppointments}/>
                </div>
                <div className="Blood-right">
                     
                    
                </div>
            </div>
            
        </div>
    );
}