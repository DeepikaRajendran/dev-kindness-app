import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  Link as RouterLink,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Submission from './Submission/Submission';
import { Button } from '@material-ui/core';
import Home from './Home';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    textAlign: 'center'
  },
  image: {
    width: 428,
    height: 428,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  
}));


function App(this: any) {
  const classes = useStyles();
 


  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Dev Kindness
            </Typography>

            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/submission">
              Submit your ideas
            </Button>
          </Toolbar>
        </AppBar>       
      </div>
      <switch>
        <Route path="/submission">
          <Submission />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
