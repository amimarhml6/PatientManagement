 import Table from './TableComponent/TableComponent'
 import './ReservationHistory.css'
export default function ReservationHistory(){
    return(
        <div className="Reservation-History">
            <h1 style={{textAlign:"center",marginTop:"30px",color:"#1B5C9E"}}>Reservation <span style={{color:"#1BB13C"}}>History</span></h1>
            <div className="table">
                <Table />
            </div>
            <div className="t" > 
                <ul style={{padding:"15px 20px",marginLeft:"40px",display:"inline-block"
            }}>
                    <li><span style={{color:"#1BB13C"}}>Confirmed</span> means your appointment has been approved.</li> 
                    <li><span style={{color:"orange"}}>Pending</span> means your appointment is waiting for approval.</li> 
                    <li><span style={{color:"#1B5C9E"}}>Completed</span> means you have attended your appointment.</li> 
                </ul>
                

            </div>
        </div>
    )
}