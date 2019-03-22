import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button, MenuList, MenuItem 
} from '@material-ui/core';
import '../Styles/HorizontalMenu.css';
import { 
  Router, Route, Switch, Redirect, Link 
} from 'react-router-dom';

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button href="/studysession">
            Study Flashcards
          </Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  button: {
    margin: 10
  },
  root: {
    flexGrow: 1,
  }
}

export default withStyles(styles)(SimpleAppBar);