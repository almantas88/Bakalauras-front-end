import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
  { cardID: 222, firstName: "Balmantas", lastName: "Gaižauskas" },
  { cardID: 333, firstName: "Rikantas", lastName: "Gaižauskas" },
  { cardID: 444, firstName: "Jonas", lastName: "Gaižauskas" },
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

export default function StickyHeadTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [allRows, setAllRows] = useState(rows);
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (text) => {
    console.log(searchText);
    setSearchText(text);
    console.log(searchText);
    const filteredRows = rows.filter((row) => {
      return row.firstName.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(searchText);
    setAllRows(filteredRows);
  };

  useEffect(() => {
    onSearchChange(searchText);
  }, [searchText]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Container sx={{ width: "95%", overflow: "hidden" }}>
        <h2>Paieška:</h2>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <TextField
            fullWidth
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              id="outlined-basic"
              label="Kortelės ID"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
            fullWidth
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              id="outlined-basic"
              label="Vardas"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
            fullWidth
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              id="outlined-basic"
              label="Pavardė"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
          <Button sx={{
            height: '100%'
          }} variant="contained" size="large">Išvalyti laukus</Button>

          </Grid>
        </Grid>
      </Container>

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
              {allRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions" ? (
                              <>
                                <Button
                                  onClick={() => props.handleShowUserInfo(row)}
                                >
                                  Informacija
                                </Button>
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
          count={allRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
