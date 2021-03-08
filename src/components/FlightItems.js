import { IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { AirplanemodeActiveTwoTone, Book, Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FlightItems = ({ flight }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AirplanemodeActiveTwoTone />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={flight.name} secondary={flight.time} />
        <ListItemText primary={flight.destination} secondary={flight.date} />
        <IconButton>
          <Book />
        </IconButton>
      </ListItem>
    </List>
  );
};
export default FlightItems;
