import React from 'react';
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

export default function AdminTable({ admins, setAdmins }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRemoveAdmin = (index) => {
    if (index < 2) {
        alert("You can't remove this admin!");
        return;
    }

    const updatedAdmins = admins.filter((_, i) => i !== index);
    setAdmins(updatedAdmins);
    localStorage.setItem('AdminsUser', JSON.stringify(updatedAdmins));
};


  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, p: 2, width: '90%', margin: 'auto', marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            {['Full Name', 'Email', 'Actions'].map((header) => (
              <TableCell key={header} sx={{ fontWeight: 'bold' }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((admin, index) => (
            <TableRow key={index}>
              <TableCell>{admin.fullName}</TableCell>
              <TableCell>{admin.email}</TableCell>
              <TableCell>
                <Button 
                  variant="contained" 
                  color="error" 
                  onClick={() => handleRemoveAdmin(index)}
                >
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
              count={admins.length}
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
