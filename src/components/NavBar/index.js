import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Styles

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {
  AirplanemodeActive,
  AirplanemodeActiveRounded,
  HomeOutlined,
} from "@material-ui/icons";

// Actions
import { logout } from "../../store/actions/authActions";
import { fetchFlights } from "../../store/actions/flightActions";
import { useStyles } from "./Styles";

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  // are we using this ??
  // I dont think so!!
  //Review: remove!!
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleLogout = () => {
    if (user) {
      dispatch(logout());
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton>
              <HomeOutlined />
            </IconButton>
          </Link>

          {user && !user.isAirline ? (
            <Link to="/flights">
              <IconButton onClick={dispatch(fetchFlights())}>
                <AirplanemodeActive />
              </IconButton>
            </Link>
          ) : (
            ""
          )}

          {user && user.isAirline ? (
            <Link to="/airlineflights">
              <IconButton onClick={dispatch(fetchFlights())}>
                <AirplanemodeActiveRounded />
              </IconButton>
            </Link>
          ) : (
            ""
          )}

          <Typography variant="h6" className={classes.title}>
            Flights Website
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {user ? (
                <div>
                  <Link to="/">
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Link>
                  <Link to="/user">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/signup">
                    <MenuItem>SignUp</MenuItem>
                  </Link>
                  <Link to="/signin">
                    <MenuItem>SignIn</MenuItem>
                  </Link>
                </div>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
