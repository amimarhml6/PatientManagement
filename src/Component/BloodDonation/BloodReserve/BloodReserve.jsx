import './BloodReserve.css'
import ReserveForm from './FormReserve/FormReserve'

export default function BloodReserve() {
    return (
        <div className='Blood-Donation'>
            <h1 style={{color:'#1B5C9E',fontSize:"35px"}}>Reserve <span style={{color:'#1BB13C'}}>Now</span></h1>
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