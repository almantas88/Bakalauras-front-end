import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";


const columns = [
  {
    id: "cardID",
    label: "Kortelės ID",
    minWidth: 100,
  },
  { id: "firstName", label: "Vardas", minWidth: 100 },
  { id: "lastName", label: "Pavardė", minWidth: 100 },
  {
    id: "actions",
    label: "Veiksmai",
    minWidth: 170,
    align: "right",
  },
];

const rows = [
  { cardID: 111, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 222, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 333, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 444, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 555, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 666, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 777, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 888, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 999, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 100, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 110, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 120, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 130, firstName: "Almantas", lastName: "Gaižauskas" },
  { cardID: 140, firstName: "Almantas", lastName: "Gaižauskas" },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleInfoButton = (id) => {
    console.log(id);
  };

  return (
    <>
    <Paper className="userTable" sx={{ width: "95%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "actions" ? (
                            <>
                              <Button onClick={() => handleInfoButton(row.cardID)}>Informacija</Button>
                              <Button>Redaguoti</Button>
                              <Button>Ištrinti</Button>
                            </>
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    
    
    </>
  );
}
