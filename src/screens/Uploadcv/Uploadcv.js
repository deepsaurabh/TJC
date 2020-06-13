import React from 'react'
import { Button, Paper, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Footer from '../../blocks/Footer/Footer'
import Header from '../../blocks/Header/Header'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formPaper: {
    margin: 50,
    maxWidth: '70%',
    padding: 30

  },
  formDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: green[900] },
  },
});

export default function Uploadcv() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <div className={classes.formDiv}>
      <Paper className={classes.formPaper}>
        <Typography variant="h5" >
          CV Upload Form
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            size="small"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            size="small"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            autoFocus
            size="small"
          />
          <TextField
          id="currentLocation"
          required
          fullWidth
          margin="normal"
          autoComplete="location"
          autoFocus
          select
          label="Current Job Location"
          value="Noida"
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          size="small"
          />
          <TextField
          id="Desired Job Location"
          required
          fullWidth
          margin="normal"
          autoComplete="location"
          autoFocus
          select
          label="Desired Job Location"
          value="Delhi"
          // onChange={}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          size="small"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Job Title"
            name="title"
            autoComplete="title"
            autoFocus
            size="small"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="linkedin"
            label="LinkedIN"
            name="linkedin"
            autoComplete="linkedin"
            autoFocus
            size="small"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            size="small"
          >
            Upload
            </Button>
        </form>
      </Paper>
      </div>
      <Footer/>
    </ThemeProvider>
  )
}