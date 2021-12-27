import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { deleteBook } from "../../services/bookServices";
import { MessageContext } from "../../context/messageContext";
import { BooksContext } from "../../context/booksContext";

export default function DeleteBook(props) {
  const [allBooksList, setAllBooksList, handleDeleteBookContext] =
    useContext(BooksContext);

  const [
    error,
    setError,
    showError,
    setShowError,
    severity,
    setSeverity,
    closeError,
  ] = useContext(MessageContext);

  const handleDeleteUser = async () => {
    try {
      const { data } = await deleteBook({bookID: props.bookInfo.bookID});
      handleDeleteBookContext(props.bookInfo.bookID);
      setSeverity("success");
      setError("Knyga buvo sėkmingai panaikinta!");
      setShowError(true);
      props.closeConfirmation();
    } catch (error) {
      console.log(error.response.data);
      setSeverity("error");
      setError(error.response.data.msg);
      setShowError(true);
    }
  };

  return (
    <div className="addUserContainer">
      <Container
        className="addUserForm"
        sx={{
          width: 500,
          height: 320,
          marginTop: "120px",
          backgroundColor: "#F5F5F5",
          borderRadius: "1%",
        }}
      >
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <h2 className="centerHeader">
              Ar tikrai norite panaikinti šią knygą?
            </h2>
          </Grid>
          <Grid item xs={12}>
            <h3 className="centerHeader">
              Knygos id - {props.bookInfo.bookID}
            </h3>
            <h3 className="centerHeader">
              {props.bookInfo.title}-{props.bookInfo.author}
            </h3>
          </Grid>
          <Grid align="right" item xs={6}>
            <Button
              size="large"
              color="error"
              variant="contained"
              onClick={handleDeleteUser}
            >
              Ištrinti
            </Button>
          </Grid>
          <Grid align="left" item xs={6}>
            <Button
              size="large"
              variant="contained"
              onClick={props.handleChange}
            >
              Atšaukti
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
