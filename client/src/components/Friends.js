import { useState, useEffect } from "react";
import Axios from "axios";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: 325,
  },
  avatar: {
    backgroundColor: "#E5528F",
  },
}));

function Friends() {
  const classes = useStyles();

  const [listOfFriends, setListOfFriends] = useState([]);

  // Display Friendslist

  useEffect(() => {
    Axios.get("http://localhost:3001/friends/")
      .then((response) => {
        setListOfFriends(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Delete Friend

  // const deleteEmployee = (id) => {
  //   Axios.delete(`http://localhost:3001/employees/delete/${id}`).then(
  //     (response) => {
  //       setEmployeeList(
  //         employeeList.filter((employee) => {
  //           return employee.id != id;
  //         })
  //       );
  //     }
  //   );
  // };

  const deleteFriend = (id) => {
    Axios.delete(`http://localhost:3001/friends/${id}`).then((response) => {
      setListOfFriends(
        listOfFriends.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        {listOfFriends.map((val) => {
          return (
            <div key={val._id} style={{ margin: 20 }}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="name" className={classes.avatar}>
                      {val.name.charAt(0)}
                    </Avatar>
                  }
                  title={val.name}
                  subheader={val.email}
                />
                <CardContent>
                  <Typography gutterBottom variant="body2" component="h2">
                    Phone Number: {val.phoneNumber}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Age: {val.age}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => {
                      deleteFriend(val._id);
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Friends;
