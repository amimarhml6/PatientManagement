import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow,
  TableHead, Paper, IconButton, Select, MenuItem, Box, TextField
} from '@mui/material';
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@mui/icons-material';

const statusStyles = {
    Completed: { color: "#1B5C9E", border: "2px solid #1B5C9E", borderRadius: "8px", minHeight: "50px", height: "20px" },
    Pending: { color: "orange", border: "2px solid orange", borderRadius: "8px", minHeight: "50px", height: "20px" },
    Confirmed: { color: "#1BB13C", border: "2px solid #1BB13C", borderRadius: "8px", minHeight: "50px", height: "20px" }
};

const TablePaginationActions = ({ count, page, rowsPerPage, onPageChange }) => {
  const handleFirstPage = (event) => onPageChange(event, 0);
  const handleBack = (event) => onPageChange(event, page - 1);
  const handleNext = (event) => onPageChange(event, page + 1);
  const handleLastPage = (event) => onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPage} disabled={page === 0}><FirstPage /></IconButton>
      <IconButton onClick={handleBack} disabled={page === 0}><KeyboardArrowLeft /></IconButton>
      <IconButton onClick={handleNext} disabled={page >= Math.ceil(count / rowsPerPage) - 1}><KeyboardArrowRight /></IconButton>
      <IconButton onClick={handleLastPage} disabled={page >= Math.ceil(count / rowsPerPage) - 1}><LastPage /></IconButton>
    </Box>
  );
};

export default function TableBlood({ searchQuery, statusFilter }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [appointments, setAppointments] = useState([]);
  const emailUser = localStorage.getItem('userConnected');

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('Bloodappointment')) || [];
    const filteredRows = storedAppointments.filter(row => row.email === emailUser);
    setAppointments(filteredRows.sort((a, b) => new Date(`${a.date} ${a.hour}`) - new Date(`${b.date} ${b.hour}`)));
  }, []);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => { setRowsPerPage(parseInt(event.target.value, 10)); setPage(0); };

  const handleStatusChange = (index, newStatus) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].Statut = newStatus;
    setAppointments(updatedAppointments);
    localStorage.setItem('Bloodappointment', JSON.stringify(updatedAppointments));
  };


  const filteredAppointments = appointments.filter(row => 
    (row.lastName.toLowerCase().includes(searchQuery) || row.email.toLowerCase().includes(searchQuery)) &&
    (statusFilter === "" || row.Statut === statusFilter)
  );

  return (
    <TableContainer component={Paper} sx={{ 
      borderRadius: 2, 
      boxShadow: 3, 
      p: 2, 
      width: { xs: '95%', sm: '90%', md: '1150px' }, 
      margin: 'auto', 
      marginTop: '20px' 
    }}>

      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            {["First Name", "Last Name", "Email", "Number", "Blood Group", "Date and Time", "Status"].map(header => (
              <TableCell key={header} sx={{ fontWeight: 'bold' }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ? filteredAppointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : filteredAppointments).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.bloodGroup}</TableCell>
              <TableCell>{row.date} {row.hour}</TableCell>
              <TableCell>
                <Select
                  value={row.Statut}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  sx={{ ...statusStyles[row.Statut], border: `2px solid ${statusStyles[row.Statut].color}`, boxShadow: "none", '& fieldset': { border: "none" } }}
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
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={filteredAppointments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
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
