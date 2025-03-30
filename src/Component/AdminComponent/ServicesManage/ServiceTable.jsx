import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  TableHead,
  Paper,
  Button
} from '@mui/material';

export default function ServiceTable({ selectedService, services, searchTerm ,setServices}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const filteredDoctors = services
      .filter(service => !selectedService || service.name === selectedService)
      .flatMap(service => 
        service.CardDoctor.map(doctor => ({
          ...doctor, 
          serviceName: service.name,
          experiences: Array.isArray(doctor.experiences) ? doctor.experiences : []
        }))
      )
      .filter(doctor => doctor.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
    setDoctors(filteredDoctors);
  }, [selectedService, services, searchTerm]);  

  const handleRemoveDoctor = (doctorName, serviceName) => {
    setServices(prevServices => {
      const updatedServices = prevServices.map(service => {
        if (service.name === serviceName) {
          return {
            ...service,
            CardDoctor: service.CardDoctor.filter(doc => doc.name !== doctorName)
          };
        }
        return service;
      });
  
      localStorage.setItem('servicesData', JSON.stringify(updatedServices));
      return updatedServices;
    });
  };
  

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, p: 2, width: '90%', margin: 'auto', marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            {['Image', 'Full Name', 'Experience', 'Service', 'Actions'].map((header) => (
              <TableCell key={header} sx={{ fontWeight: 'bold' }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((doctor, index) => (
            <TableRow key={index}>
              <TableCell><img src={doctor.image} alt={doctor.name} width='50' /></TableCell>
              <TableCell>{doctor.name}</TableCell>
              <TableCell>{Array.isArray(doctor.experiences) ? doctor.experiences.join(', ') : "Aucune expérience"}</TableCell>
              <TableCell>{doctor.serviceName}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleRemoveDoctor(doctor.name, doctor.serviceName)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={doctors.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, newPage) => setPage(newPage)}
              onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
              sx={{
                "& .MuiTablePagination-root": { color: "black" },
                "& .MuiTablePagination-caption": { color: "black", fontWeight: "bold" },
                "& .MuiTablePagination-toolbar": { color: "black" },
                "& .MuiSelect-select": { color: "black" },
                "& .MuiSvgIcon-root": { color: "black" },
                "& .MuiInputBase-root": { color: "black" },
                "& .MuiTablePagination-displayedRows": { color: "black", fontWeight: "solid" },
                "& .MuiTypography-root": { color: "black", fontWeight: "bold" },
                "& .MuiTablePagination-selectLabel": { color: "black", fontWeight: "solid" }
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
