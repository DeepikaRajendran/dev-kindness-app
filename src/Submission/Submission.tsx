import React, {useState} from 'react';
import {
  TextField,
  makeStyles,
  createStyles,
  Theme,
  Box,
  Button,
  Snackbar,
} from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';
const axios = require('axios').default;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
    },
    content: {
      width: '100%',
      position: 'absolute',
      display: 'inline-block',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    width: {
      width: '50%',
    },
    margin: {
      margin: '2%',
    },
  })
);
export default function Submission() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post('/api/CreateSuggestion', {
        id: uuidv4(),
        submittedBy: name,
        text: quote,
      })
      .then(function(response: any) {
        if (response.status === 201) {
          setName('');
          setQuote('');
        }
      })
      .catch(function(error: any) {
        console.log(error);
      });
  };
  return (
    <Box flexDirection="column" className={classes.root}>
      <div className={classes.content}>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              className={classes.width}
              id="name"
              label="Name"
              value={name}
              onChange={e => {
                setName((e.target as HTMLInputElement).value);
              }}
            />
          </div>
          <div>
            <TextField
              className={classes.width}
              id="quote"
              multiline
              label="Quote"
              value={quote}
              onChange={e => {
                setQuote((e.target as HTMLInputElement).value);
              }}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!name || !quote}
              className={classes.margin}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
}
