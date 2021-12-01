import * as React from "react";
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
import ListIcon from '@mui/icons-material/List';
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const atsijungti = () => {
    console.log("atsijungiama");
  };

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
        <Link className='link' to="/users">
          <ListItem button key={"Vartotojai"} onClick={atsijungti}>
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary={"Vartotojai"} />
          </ListItem>
        </Link>

        <Link className='link' to="/books">
        <ListItem button key={"Knygos"} onClick={atsijungti}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={"Knygos"} />
        </ListItem>
        </Link>

        <Link className='link' to="/books">
        <ListItem button key={"Knygų išdavimas"} onClick={atsijungti}>
          <ListItemIcon>
            <AutoStoriesIcon />
          </ListItemIcon>
          <ListItemText primary={"Knygų išdavimas"} />
        </ListItem>
        </Link>


      </List>
      <Divider />
      <List>
        <ListItem button key={"Atsijungti"} onClick={atsijungti}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={"Atsijungti"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='header'>
      <React.Fragment key={"left"}>
        <Button id='menu-btn' onClick={toggleDrawer("left", true)}><ListIcon className="menu-icon" /> Meniu</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
      <Link className='link' to="/">
      <h1 id='logo-img'> Bibliotekos sitema(logo)</h1>
      </Link>
    </div>
  );
}
