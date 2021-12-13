import React, { useState, memo, forwardRef, useImperativeHandle } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import InfoAboutUserBox from "./infoAboutUser";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const columns = [
  {
    id: "cardID",
    label: "Kortelės ID",
    minWidth: 50,
  },
  { id: "firstName", label: "Vardas", minWidth: 120 },
  { id: "lastName", label: "Pavardė", minWidth: 120 },
  { id: "grade", label: "Klasė", minWidth: 5 },
  {
    id: "actions",
    label: "Veiksmai",
    minWidth: 100,
    align: "right",
  },
];

const UsersTable = forwardRef((props, ref) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [showUserInfo, setshowUserInfo] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });

  useImperativeHandle(ref, () => ({
    setToFirstPage,
  }));

  const handleChangePage = (event, newPage) => {
    console.log(props.allRowsForShowing);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleShowUserInfo = (row) => {
    setUserInfo({
      cardID: row.cardID,
      firstName: row.firstName,
      lastName: row.lastName,
    });
    console.log(userInfo);
    showUserInfo ? setshowUserInfo(false) : setshowUserInfo(true);
  };

  const setToFirstPage = () => {
    setPage(0);
  };

  return (
    <>
      {props.isLoading ? (
        <CircularProgress sx={{ display: "flex", margin: "150px auto" }} />
      ) : 

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
              {props.allRowsForShowing
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.cardID}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions" ? (
                              <>
                                <Button onClick={() => handleShowUserInfo(row)}>
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
          count={props.allRowsForShowing.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper> }
      {showUserInfo ? (
        <InfoAboutUserBox
          userInfo={userInfo}
          handleChange={handleShowUserInfo}
        />
      ) : null}
    </>
  );
});

export default memo(UsersTable);
