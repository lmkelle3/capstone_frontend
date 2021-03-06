import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

///Drawer imports
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {
  MenuList,
  MenuItem,
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";

//Link Imports
// import { Link as RouterLink, MemoryRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    color: "black",
    textDecoration: "none"
  }
}));

const TopNav = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    ///TopNav
    <AppBar className={classes.colorPrimary} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {/* <MenuIcon /> */}
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </Button>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {/* {sideList("left")} */}
            {/* Navigation List */}

            <Paper elevation={0}>
              <List aria-label="main mailbox folders">
                <Link to="/" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItem>
                </Link>
                <Link to="/claims" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Claims Center" />
                  </ListItem>
                </Link>
                {/* <Link to="/messages" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                  </ListItem>
                </Link> */}
              </List>
              <Divider />
              {/* <List aria-label="secondary mailbox folders">
                <ListItemLink to="/trash" primary="Trash" />
                <ListItemLink to="/spam" primary="Spam" />
              </List> */}
            </Paper>
          </Drawer>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Oopsie-Daisy Insurance Co.
        </Typography>
        <Button color="inherit" href="/">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
