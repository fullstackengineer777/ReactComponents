import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";

// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "primary" : example}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            AppBar
          </Typography>
          <IconButton color="inherit" onClick={() => setExample("default")}>
            1
          </IconButton>
          <IconButton color="inherit" onClick={() => setExample("primary")}>
            2
          </IconButton>
          <IconButton color="inherit" onClick={() => setExample("secondary")}>
            3
          </IconButton>
          <IconButton color="inherit" onClick={() => setExample("transparent")}>
            4
          </IconButton>
          <IconButton color="inherit" onClick={() => setExample("customColor")}>
            5
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => setExample("customHeight")}
          >
            6
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Typography>
        This content doesn't appear below the AppBar because we added an
        additional Toolbar component above, this is the recommended approach.{" "}
      </Typography>
      <Typography>
        Change the AppBar example by clicking on one of the numbers above.
      </Typography>
      <Typography>
        <ul>
          <li> 1: color: default </li>
          <li> 2: color: primary </li>
          <li> 3: color: secondary </li>
          <li> 4: color: transparent </li>
          <li> 5: custom color class </li>
          <li> 6: custom height class </li>
        </ul>
      </Typography>
    </React.Fragment>
  );
}