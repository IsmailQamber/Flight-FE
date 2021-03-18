import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// components
import Deposits from "./Deposits";
import Orders from "./Orders";
import Profile from "../Profile";
import Copyright from "./Copyright";
import { useStyles } from "./Styles";
import Title from "./Title";

// Review: make it arrow function
export default function UserProfile({ flightId }) {
  const classes = useStyles();
  console.log(flightId);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Title>User Profile</Title>

          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                Edit User Data
                <Profile />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
