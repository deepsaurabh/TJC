import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MyAutoComplete from '../../blocks/Search/MyAutoComplete'
import Header from '../../blocks/Header/Header'
import Footer from '../../blocks/Footer/Footer'

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h3: {
                fontSize: 37
            },
        },
    },
});

const useStyles = makeStyles((theme) => ({
    quotePaper: {
        backgroundImage: `url("https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        height: 500,
        width: '70%',
        margin: 20,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    },
    paperFlex: {
        display: 'flex',
    },
    searchPaper: {
        width: '30%',
        margin: 20
    },
    quote: {
        color: '#ffffff',
        // fontWeight: 'bold',
        fontStyle: 'italic',
        textShadow: '5px 5px 5px rgba(0,0,0,1);',
        marginTop: '10%',
        // marginBottom: 'auto',
        padding: 'auto'
    },
    quoteWriter: {
        color: '#ffffff',
        textShadow: '7px 7px 7px rgba(0,0,0,1);',
        padding: 'auto',
        marginRight: '3%',
        marginTop: '22%'
    }
}));
export default function HomePage() {

    const classes = useStyles();
    return (
        <div>
            <Header />
            <div className={classes.paperFlex} >
                <Paper elevation={24} className={classes.quotePaper}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3' align='center' className={classes.quote}>
                            "Hire for passion and intensity, there is training for everything else."
                    </Typography>
                        <Typography variant='h3' align='right' className={classes.quoteWriter}>
                            - Nolan Bushnell
                    </Typography>
                    </ThemeProvider>
                </Paper>
                <Paper elevation={10} className={classes.searchPaper}>
                    <div style={{ maxHeight: '100%' }}>
                        <MyAutoComplete />
                    </div>
                </Paper>
            </div>
            <Footer/>
        </div>
    )
}