import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@material-ui/core/";
import logo from "../assets/friends-logo.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
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

function AddFriend() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [age, setAge] = useState(0);
  const [notes, setNotes] = useState("");

  const addFriend = () => {
    // console.log(name + email + phoneNumber + age + notes);
    Axios.post("http://localhost:3001/friends/add", {
      name,
      email,
      phoneNumber,
      age,
      notes,
    })
      .then(() => {
        console.log("Friend successfully added");
        history.push("/friends");
      })
      .catch(() => {
        console.log("Friend unsuccessfully added");
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.root} style={{ height: "100%" }}>
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
                Add a Friend!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          required
          id="outlined-name"
          label="Name"
          variant="outlined"
          color="primary"
          margin="dense"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-email"
          label="Email"
          variant="outlined"
          color="primary"
          margin="dense"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          id="outlined-phone-number"
          label="Phone Number"
          variant="outlined"
          color="primary"
          margin="dense"
          type="number"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <TextField
          id="outlined-age"
          label="Age"
          variant="outlined"
          color="primary"
          margin="dense"
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <TextField
          id="outlined-notes"
          label="Notes"
          variant="outlined"
          color="primary"
          margin="dense"
          onChange={(event) => {
            setNotes(event.target.value);
          }}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        style={{ marginTop: 10, color: "white" }}
        onClick={addFriend}
      >
        ADD FRIEND
      </Button>
    </div>
  );
}

export default AddFriend;
