import React, {useState} from 'react';
import {Paper, makeStyles, Button, Typography} from '@material-ui/core';
const axios = require('axios').default;
export default function Home() {
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
      textAlign: 'center',
      verticalAlign: 'middle'
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
  const classes = useStyles();
  const getData = () => {
    axios
      .get('/api/getSuggestions')
      .then(function(response: any) {
        if (response && response.data) {
          var quote =
            response.data[Math.floor(Math.random() * response.data.length)];
          setQuote(quote);
        }
      })
      .catch(function(error: any) {
        console.log(error);
      });
  };
  const [quote, setQuote] = useState({text: ''});
  const handleClick = () => {
    getData();
  };

  return (
    <Paper className={classes.paper}>
      <Typography gutterBottom variant="h4">
        {quote.text}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Generate Ideas
      </Button>
    </Paper>
  );
}
