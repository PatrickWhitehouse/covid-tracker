import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

function Cards({ data }) {
  if (!data) {
    return "Fetching data...";
  }
  const { confirmed, recovered, deaths } = data;
  return (
    <Grid container spacing={3} justify="center">
      <Grid item component={Card} align="center">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="body2">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} align="center">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="body2">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} align="center">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="body2">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default Cards;
