import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: "flex",
    justifyContent: "center",
    height: 56,
    backgroundColor: theme.palette.background.paper
  }
}));

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Fragment>
      <div className={classes.appBarSpacer} />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Fragment>
  );
};
export default BottomNav;
