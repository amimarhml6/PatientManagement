import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';



function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0}>
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0}>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const statusStyles = {
  Completed: {
    color: "#1B5C9E",
    backgroundColor: "transparent",
    border: "2px solid #1B5C9E",
    padding: "7px 15px",
    fontSize:"17px",
    fontWeight:500,
    borderRadius: "10px",
    textAlign: "center",
    display: "Inline-block",
  },
  Pending: {
    color: "orange",
    backgroundColor: "transparent",
    border: "2px solid orange",
    padding: "7px 15px",
    fontSize:"17px",
    fontWeight:500,
    borderRadius: "10px",
    textAlign: "center",
    display: "Inline-block",
    
  },
  Confirmed: {
    color: "#1BB13C",
    backgroundColor: "transparent",
    border: "2px solid #1BB13C",
    padding: "7px 15px",
    fontSize:"17px",
    fontWeight:500,
    borderRadius: "10px",
    textAlign: "center",
    display: "Inline-block",
  },
  Default: {
    color: "grey",
    backgroundColor: "transparent",
    border: "2px solid grey",
    padding: "7px 15px",
    fontSize:"17px",
    fontWeight:500,
    borderRadius: "10px",
    textAlign: "center",
    display: "Inline-block",
  }
};



export default function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emailUser = localStorage.getItem('userConnected');
    const storedAppointments = JSON.parse(localStorage.getItem('Bloodappointment')) || []; 
    const filteredRows = storedAppointments.filter(row => row.email === emailUser);
    const sortedRows = [...filteredRows].sort((a, b) => 
      new Date(`${a.date} ${a.hour}`) - new Date(`${b.date} ${b.hour}`)
  );

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;



 


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, p: 2, backgroundColor: "white", width: "1150px", marginLeft: "38px", marginTop: "25px", marginBottom: "30px" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            {['First Name', 'Last Name', 'Email', 'Number', 'Blood Group', 'Date and Time', 'Status'].map((header) => (
              <TableCell key={header} sx={{ fontWeight: 'bold' }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            
        {(rowsPerPage > 0 ? sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : sortedRows).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.bloodGroup}</TableCell>
              <TableCell>{row.date} {row.hour}</TableCell>
              <TableCell sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span style={statusStyles.Pending }>{row.Statut}</span>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={filteredRows.length}
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
                "& .MuiTablePagination-displayedRows": { color: "white", fontWeight: "solid" },
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
