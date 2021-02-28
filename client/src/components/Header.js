import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              + Friends
            </Link>
          </Typography>
          <div>
            <Link
              to="/friends"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton aria-label="friends" color="inherit">
                <GroupIcon />
              </IconButton>
            </Link>
            <Link
              to="/addfriend"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton aria-label="add friend" color="inherit">
                <PersonAddIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
