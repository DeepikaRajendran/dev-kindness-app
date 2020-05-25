import React, { useState } from 'react';
import { Paper, makeStyles, ButtonBase, Button, Typography } from '@material-ui/core';
import data from './data/data.json';
export default function Home(){
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
      const classes = useStyles();
      const [quote, setQuote] = useState(data[Math.floor(Math.random()*data.length)]);
      const handleClick = () => { 
        setQuote(data[Math.floor(Math.random()*data.length)]);
      }
      
    return (
        <Paper className={classes.paper}>
        <ButtonBase className={classes.image}>
          <img
            className={classes.img}
            alt="complex"
            src={quote.image}
          />
        </ButtonBase>

        <Typography gutterBottom variant="subtitle1">
          {quote.quote}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>Generate Ideas</Button>
      </Paper>
    );
}
