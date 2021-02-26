import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import logo from "../assets/friends-logo.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  card: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  media: {
    margin: 30,
    height: 150,
    width: 150,
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Card>
          <CardActionArea component={Link} to="/Friends">
            <CardMedia
              className={classes.media}
              image={logo}
              title="Friends Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                + Friends
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default Home;
