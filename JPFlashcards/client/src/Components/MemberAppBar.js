import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button, MenuList, MenuItem 
} from '@material-ui/core';
import '../Styles/HorizontalMenu.css';

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button href="/memberhome">
            Member's Area
          </Button>
          <Button href="/addflashcard">
            Create New Flashcard
          </Button>
          <Button href="/study">
            Study Flashcards
          </Button>
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