import React from 'react'
import { Paper, TextField, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Header from '../../blocks/Header/Header'
import Footer from '../../blocks/Footer/Footer'

const useStyles = makeStyles((theme) => ({
    paper: {
        // margin: theme.spacing(10, 30),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#197b38',
        color: 'white'
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

export default function () {

    const classes = useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header/>
                <Grid container component="main">
                    <Grid item xs={12} sm={10} md={6} style={{ margin: 'auto', marginTop: '2%' }}>
                        <Paper elevation={10} className={classes.paper}>
                            <Typography variant="h5">
                                Enter Registration Details
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
                                    name="organisation"
                                    label="organisation"
                                    id="organisation"
                                    autoComplete="organisation"
                                    size="small"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="designation"
                                    label="designation"
                                    id="designation"
                                    autoComplete="designation"
                                    size="small"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="email"
                                    label="Organisation Email"
                                    id="email"
                                    autoComplete="Organisation email"
                                    size="small"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
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
                                    Sign In
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer/>
            </ThemeProvider>
        </div>
    )
}