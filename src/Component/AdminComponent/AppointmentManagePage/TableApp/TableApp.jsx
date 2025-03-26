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
  Select,
  MenuItem,
} from '@mui/material';

const statusStyles = {
  Completed: { color: "#1B5C9E", border: "2px solid #1B5C9E", padding: "0px", borderRadius: "8px",minHeight: "50px",height: "20px"},
  Pending: { color: "orange", border: "2px solid orange", padding: "0px", borderRadius: "8px" ,minHeight: "50px",height: "20px"},
  Confirmed: { color: "#1BB13C", border: "2px solid #1BB13C", padding: "0px", borderRadius: "8px" ,minHeight: "50px",height: "20px"}
};

export default function TableApp({ searchQuery, statusFilter }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    storedAppointments.sort((a, b) => new Date(`${a.date} ${a.hour}`) - new Date(`${b.date} ${b.hour}`));
    setAppointments(storedAppointments);
  }, []);

  const handleChangeStatus = (index, newStatus) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].Statut = newStatus;
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === '' || appointment.Statut === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, p: 2, width: '90%', margin: 'auto', marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            {['First Name', 'Last Name', 'Email', 'Phone Number', 'Service', 'Date & Time', 'Status'].map((header) => (
              <TableCell key={header} sx={{ fontWeight: 'bold' }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredAppointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.firstname}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell>{row.date} {row.hour}</TableCell>
              <TableCell>
                <Select
                  value={row.Statut}
                  onChange={(e) => handleChangeStatus(index, e.target.value)}
                  sx={{ ...statusStyles[row.Statut] ,
                    border: `2px solid ${statusStyles[row.Statut].color}`,  
                    boxShadow: "none",
                    '& fieldset': { border: "none" } }}
                >
                  {Object.keys(statusStyles).map(status => (
                    <MenuItem key={status} value={status}>{status}</MenuItem>
                  ))}
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={filteredAppointments.length}
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
