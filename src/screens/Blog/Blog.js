import React from 'react'
import Header from '../../blocks/Header/Header'
import { Typography, Paper } from '@material-ui/core'
import Footer from '../../blocks/Footer/Footer'

export default function About() {
    return (
        <div>
            <Header />
            <Paper style={{ margin: '2%' }}>
                <Typography variant="h3" color="primary" style={{ color: "#2ACE5E" }}>
                    This is blogs page, will be updated soon...
                </Typography>
            </Paper>
            <Footer/>
        </div>
    )
}