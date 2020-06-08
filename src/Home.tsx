import React, { useState, useEffect } from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import { TwitterShareButton, TwitterIcon } from 'react-share';
const axios = require('axios').default;

export default function Home() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
    content: {
      boxSizing: 'content-box',
      display: 'inline-block',
      width: '100%',
      position: 'absolute',
      top: '40%',
      transform: 'translate(-50%, -50%)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  const [data, setData] = useState([]);
  const updateQuote = () => {
    if (data) {
      var quote = data[Math.floor(Math.random() * data.length)];
      setQuote(quote);
    }
  };
  const getData = () => {
    axios
      .get('/api/getSuggestions')
      .then(function (response: any) {
        if (response && response.data) {
          setData(response.data);
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const [quote, setQuote] = useState({ text: '' });
  const handleClick = () => {
    updateQuote();
  };
  useEffect(updateQuote, [data]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={classes.root}>
      {quote &&
        <div className={classes.content}>
          <Typography gutterBottom variant="h5">
            {quote.text}
          </Typography>
          <div>
            <TwitterShareButton
              url="test.com"
              title={quote.text}
              hashtags={['spreadKindness']}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Generate Ideas
        </Button>
        </div>
      }
    </div>
  );
}
