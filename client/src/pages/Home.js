import React from "react";
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
  },
  card: {
    margin: 200,
  },
  media: {
    margin: 20,
    height: 180,
    width: 180,
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={logo}
            title="Friends Logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              + Friends
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              MERN
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Home;
