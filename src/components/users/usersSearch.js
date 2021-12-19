import React, { useState, useEffect, useRef, useContext} from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import UsersTable from "./usersTable";
import { UsersContext } from "../../context/usersContext";


export default function UsersSearch(props) {

  const [allUserslist, setAllUsersList, handleDeleteUser] =
  useContext(UsersContext);

  const [allRowsForShowing, setAllRowsForShowing] = useState(props.usersList);
  const [searchTextFirstName, setSearchTextFirstName] = useState("");
  const [searchTextCardId, setSearchTextCardId] = useState("");
  const [searchTextLastName, setSearchTextLastName] = useState("");

  const childRef = useRef();

  const handleSearchButton = () => {
    var filteredRows = allUserslist;

    

    filteredRows = filteredRows.filter((row) => {
      return row.cardID.toLowerCase().includes(searchTextCardId.toLowerCase());
    });

    filteredRows = filteredRows.filter((row) => {
      return row.lastName
        .toLowerCase()
        .includes(searchTextLastName.toLowerCase());
    });

    filteredRows = filteredRows.filter((row) => {
      return row.firstName
        .toLowerCase()
        .includes(searchTextFirstName.toLowerCase());
    });
    console.log(filteredRows);
    setAllRowsForShowing(filteredRows);
    childRef.current.setToFirstPage()

  };

  const handleClearButton = () => {
    setSearchTextFirstName("");
    setSearchTextLastName("");
    setSearchTextCardId("");
    setAllRowsForShowing(allUserslist);
    childRef.current.setToFirstPage()
  };

  const handleChangeFirstName = (text) => {
    setSearchTextFirstName(text);
  };

  const handleChangeLastName = (text) => {
    setSearchTextLastName(text);
  };

  const handleChangeCardId = (text) => {
    setSearchTextCardId(text);
  };

  useEffect(() => {
    setAllUsersList(allUserslist);
    setAllRowsForShowing(allUserslist);
  }, [allUserslist]);


  return (
    <>
      <Container sx={{ overflow: "hidden" }}>
        <h2>Paieška:</h2>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              value={searchTextCardId}
              onChange={(event) => {
                handleChangeCardId(event.target.value);
              }}

              label="Kortelės ID"
              variant="outlined"
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              value={searchTextFirstName}
              onChange={(event) => {
                handleChangeFirstName(event.target.value);
              }}

              label="Vardas"
              variant="outlined"
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              value={searchTextLastName}
              onChange={(event) => {
                handleChangeLastName(event.target.value);
              }}

              label="Pavardė"
              variant="outlined"
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={1.3}>
            <Button
              sx={{
                height: "100%",
              }}
              autoComplete='disabled'
              variant="contained"
              size="medium"
              startIcon={<SearchIcon />}
              onClick={() => {
                handleSearchButton();
              }}
            >
              Ieškoti
            </Button>
          </Grid>

          <Grid item xs={1}>
            <Button
              sx={{
                height: "100%",
              }}
              variant="contained"
              size="medium"
              startIcon={<DeleteOutlineIcon />}
              onClick={() => {
                handleClearButton();
              }}
            >
              Išvalyti
            </Button>
          </Grid>
        </Grid>
      </Container>

      <UsersTable
      ref={childRef}
        allRows={allUserslist}
        allRowsForShowing={allRowsForShowing}
        handleShowUserInfo={props.handleChange}
        isLoading={props.isLoading}
      />
    </>
  );
}
