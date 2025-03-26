import { useState } from "react";
import TableApp from "./TableApp/TableApp";
import TableBlood from "./TableBlood/TableBlood";
import "./AppointmentTables.css";

export default function AppointmentTables() {
    const [selectedTable, setSelectedTable] = useState("AppointmentCare");
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    return (
        <div className="Appointment-Tables" style={{marginTop:"70px"}}>
            <h1 style={{marginLeft:"50px",marginBottom:"20px",color:"#1B5C9E",fontSize:"32px"}}>Admin <span style={{color:"#1BB13C"}}>dashboard</span></h1>
            <p style={{marginLeft:"50px",marginBottom:"25px",color:"black",fontSize:"20px"}}>List of all the Appointment Patients and their Status</p>

            
            <div className="Functions">
                
                <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
                    <option value="AppointmentCare">Appointment Care</option>
                    <option value="BloodDonation">Appointment Blood Donation</option>
                </select>

               
                <input
                    type="text"
                    placeholder="Search by Email or Last Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

               
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

           
            <div className="TableApp">
                {selectedTable === "AppointmentCare" ? (
                    <TableApp searchQuery={searchQuery} statusFilter={statusFilter} />
                ) : (
                    <TableBlood searchQuery={searchQuery} statusFilter={statusFilter} />
                )}
            </div>
        </div>
    );
}
