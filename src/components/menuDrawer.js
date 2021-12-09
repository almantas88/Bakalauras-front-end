import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ListIcon from "@mui/icons-material/List";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/authServices";
import { logout } from "../services/authServices";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [user, setUser] = React.useState();

  const getFullNameCapitalized = (firstName, lastName) => {
    const capFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const capLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return `${capFirstName} ${capLastName}`;
  }

  useEffect( () => {
    try {
      const user = getCurrentUser();
      console.log(user);
      if(!user) window.location = "/unauthorized";
      else
      setUser(user);
    } catch (error) {
      window.location = "/unauthorized";
    }
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link className="link" to="/users">
          <ListItem button key={"Vartotojai"} >
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary={"Vartotojai"} />
          </ListItem>
        </Link>

        <Link className="link" to="/books">
          <ListItem button key={"Knygos"} >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary={"Knygos"} />
          </ListItem>
        </Link>

        <Link className="link" to="/books">
          <ListItem button key={"Knygų išdavimas"}>
            <ListItemIcon>
              <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText primary={"Knygų išdavimas"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Atsijungti"} onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={"Atsijungti"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="header">
      <React.Fragment key={"left"}>
        <Button id="menu-btn" onClick={toggleDrawer("left", true)}>
          <ListIcon className="menu-icon" /> Meniu
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
      
      <Link className="link" to="/">
        <h1 id="logo-img"> Bibliotekos sitema(logo)</h1>
      </Link>
      {user ? <h3 className="userName">{getFullNameCapitalized(user.firstName, user.firstName)}</h3> : null }
    </div>
  );
}
