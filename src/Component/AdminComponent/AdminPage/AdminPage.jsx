import React, { useState} from 'react';
import './AdminPage.css';
import AdminTable from './AdminTable/AdminTable';

export default function AdminPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [admins, setAdmins] = useState(() => {
        return JSON.parse(localStorage.getItem('AdminsUser')) || [];
    });



 
    const handleAddAdmin = (e) => {
        e.preventDefault();
        
        if (!fullName.trim() || !email.trim()) {
            alert("Full Name and Email are required!");
            return;
        }
    
         
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
         
        const userExists = users.some(user => 
            user.fullName.toLowerCase() === fullName.toLowerCase() && 
            user.email.toLowerCase() === email.toLowerCase()
        );
    
        if (!userExists) {
            alert("Impossible d'ajouter cet admin : email ou nom inexistant !");
            return;
        }
    
        
        const adminExists = admins.some(admin => admin.email.toLowerCase() === email.toLowerCase());
        if (adminExists) {
            alert("Cet admin est déjà ajouté !");
            return;
        }
    
         
        const newAdmin = { fullName, email };
        const updatedAdmins = [...admins, newAdmin];
    
        setAdmins(updatedAdmins);
        localStorage.setItem('AdminsUser', JSON.stringify(updatedAdmins));
        
         
        setFullName('');
        setEmail('');
    };
    

    return (
        <div className='Admin-Page'>
            <h1 style={{ marginLeft: "50px", marginBottom: "20px", color: "#1B5C9E", fontSize: "32px" }}>
                Admin <span style={{ color: "#1BB13C" }}>Management</span>
            </h1>
            <p style={{ marginLeft: "50px", marginBottom: "25px", color: "black", fontSize: "20px" }}>
                List of all the Admins
            </p>

            <form className='AdminForm' onSubmit={handleAddAdmin}>
                <input
                    type="text"
                    className='in-admin'
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    className='in-admin'
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className='btn-admin'>Add Admin</button>
                
            </form>
            <div className="AdminTabels">
                <AdminTable admins={admins} setAdmins={setAdmins} />
            </div>
        </div>
    );
}
