import { useState, useEffect } from 'react';
import ServiceTable from './ServiceTable';
import './ServicesManage.css';
import { Button, TextField } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

export default function ServicesManage() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [newDoctor, setNewDoctor] = useState({ name: '', image: '', experiences: ['', '', '',''] });
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedServices = localStorage.getItem('servicesData');
        if (storedServices) {
            setServices(JSON.parse(storedServices));
        }
    }, []);

    const handleAddDoctor = () => {
        if (!selectedService) {
            alert('Please select a service first!');
            return;
        }
        if (!newDoctor.name || !newDoctor.image || newDoctor.experiences.filter(e => e).length < 3) {
            alert('Please fill in all required fields');
            return;
        }
    
        setServices(prevServices => {
            const updatedServices = prevServices.map(service => {
                if (service.name === selectedService) {
                    return {
                        ...service,
                        CardDoctor: [...service.CardDoctor, { name: newDoctor.name, image: newDoctor.image, experiences: newDoctor.experiences }]
                    };
                }
                return service;
            });
    
            localStorage.setItem('servicesData', JSON.stringify(updatedServices));  
            return updatedServices;
        });
    
        setNewDoctor({ name: '', image: '', experiences: ['', '', '', ''] });
        setShowForm(false);
    };

    return (
        <div className='services-manage'>
            <div className='service-text'>
                <h1 style={{color:"#1B5C9E",fontSize:"35px",marginBottom:"15px"}}>Services <span style={{color:"#1BB13C"}}>Management</span></h1>
                <p style={{color:"black",fontSize:"23px"}}>List of all the Doctors:</p>
            </div>
            <div className='service-functions'>
                <div className='fun-select'>
                    <select 
                        className='service-select' 
                        value={selectedService} 
                        onChange={(e) => setSelectedService(e.target.value)}
                    >
                        <option value=''>All Services</option>
                        {services.map(service => (
                            <option key={service.name} value={service.name}>{service.name}</option>
                        ))}
                    </select>
                    <TextField 
                        label="Search by Full Name" 
                        variant="outlined" 
                        size="small" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        style={{ width: '300px' }}
                    />
                    <Button 
                        variant='contained' 
                        color='primary'     
                        onClick={() => {
                            console.log("Button clicked!");
                            if (!selectedService) {
                                alert("Please select a service first!");
                                return;
                            }
                            setShowForm(true);
                            console.log("showForm updated to:", true);
                        }}
                    >
                        Add Doctor
                    </Button>
                </div>

                {showForm && (
                    <form className='fun-form'>
                        <input 
                            type='text' 
                            placeholder='Full Name' 
                            value={newDoctor.name} 
                            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })} 
                        />
                        <div className='exp-group'>
                            {newDoctor.experiences.map((exp, index) => (
                                <input 
                                    key={index} 
                                    type='text' 
                                    placeholder={`Experience ${index + 1}`} 
                                    value={exp} 
                                    onChange={(e) => {
                                        const newExperiences = [...newDoctor.experiences];
                                        newExperiences[index] = e.target.value;
                                        setNewDoctor({ ...newDoctor, experiences: newExperiences });
                                    }} 
                                />
                            ))}
                        </div>
                        <div className='upload-section'>
                            <Button component='label' variant='contained' startIcon={<UploadIcon />}>
                                Upload Image
                                <input 
                                    type='file' 
                                    hidden 
                                    onChange={(e) => setNewDoctor({ ...newDoctor, image: URL.createObjectURL(e.target.files[0]) })} 
                                />
                            </Button>
                            {newDoctor.image && <img src={newDoctor.image} alt='Doctor' className='preview-image' />}
                        </div>
                        <Button variant='contained' color='success' onClick={handleAddDoctor}>
                            Add Now
                        </Button>
                    </form>
                )}
            </div>
            <div className='service-table'>
            <ServiceTable selectedService={selectedService} services={services} searchTerm={searchTerm} setServices={setServices} />

            </div>
        </div>
    );
}
