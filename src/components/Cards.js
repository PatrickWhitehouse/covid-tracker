import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

function Cards({ data }) {
  if (!data) {
    return "Fetching data...";
  }
  return (
    <Grid container spacing={3} justify="center">
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h6">Data</Typography>
          <Typography variant="h6" color="textSecondary">
            Date
          </Typography>
          <Typography variant="body2">Number of cases: </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default Cards;
