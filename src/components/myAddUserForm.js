import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignUp(props) {
  return (
    <div className="addUserContainer">
      <Container
        className="addUserForm"
        sx={{
          width: 500,
          height: 600,
          backgroundColor: "#F5F5F5",
        }}
      >
        <Grid
          container
          spacing={2}
          justify="center"
        >
          <Grid item xs={10}>
            <h2>Pridėti vartotoją</h2>
          </Grid>
          <Grid item xs={2} onClick={props.handleChange}>
            <CloseIcon sx={{ fontSize: 40, color: "#252525", padding: 1 }} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Kortelės id"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Vardas"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Pavardė"
              variant="outlined"
            />
          </Grid>
          <Grid align="center" item xs={12}>
            <Button variant="contained">Pridėti</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
