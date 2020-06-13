import React from 'react'
import Header from '../../blocks/Header/Header'
import { Typography, Paper, Divider } from '@material-ui/core'
import Footer from '../../blocks/Footer/Footer'

export default function About() {
    return (
        <div>
            <Header />
            <Paper style={{ margin: '2%', display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                <div style={{ width: '40%' }}>
                    <Typography variant="h3" align="center" color="primary" style={{ color: "#2ACE5E" }}>
                        Who we are?
                </Typography>
                </div>
                <Divider orientation="vertical" flexItem style={{ margin: 15 }} />
                <div style={{ width: '60%' }}>
                    <Typography variant="h6" align="left" style={{ margin: 15 }}>
                        thejobscentral portal is a startup recruiting firm provides workforce solutions for 
                        professionals from freshers to leadership level, and technical positions. 
                        Offering recruitment services to small, mid and large scale companies around 
                        the nation.
                    </Typography>
                </div>
            </Paper>
            <Paper style={{ margin: '2%', display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                <div style={{ width: '60%' }}>
                    <Typography variant="h6" align="left" style={{ margin: 15 }}>
                    With industry and talent acquisition experience and a drive to provide best Career Consulting services, the firm offers partnership to Business service firm for talent hiring across India. 
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" align="left" style={{ margin: 15 }}>
                    We're dedicated people in hiring the good candidates. Our believe is in recruiting and selecting expertise to match job candidates with positions where they will succeed, which will help them to reach their maximum potential.
                    </Typography>
                </div>
                <Divider orientation="vertical" flexItem style={{ margin: 15 }} />
                <div style={{ width: '40%' }}>
                    <Typography variant="h3" align="center" color="primary" style={{ color: "#2ACE5E" }}>
                    What we do?
                </Typography>
                </div>
            </Paper>
            <Paper style={{ margin: '2%', display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                <div style={{ width: '40%' }}>
                    <Typography variant="h3" align="center" color="primary" style={{ color: "#2ACE5E" }}>
                    Why work with us?
                </Typography>
                </div>
                <Divider orientation="vertical" flexItem style={{ margin: 15 }} />
                <div style={{ width: '60%' }}>
                    <Typography variant="h6" align="left" style={{ margin: 15 }}>
                    We consider our self as Career Consultants and belief in long term relationship both with the clients and the employee even after the placement to ensure their long term success.
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" align="left" style={{ margin: 15 }}>
                    We commit ourselves to establishing long-term strategic relationships with our clients. 
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" align="left" style={{ margin: 15 }}>
                    We are passionate, dedicated and driven to excel in Staffing field and provide recruitment solutions to fill the right talent for positions at all levels.
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" align="left" style={{ margin: 15 }}>
                    We believe in the ethics of transparency, hard work and value-based services. 
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" align="left" style={{ margin: 15 }}>
                    We value Humanity, respect people and care for our community.
                    </Typography>
                </div>
            </Paper>
            <Footer/>
        </div>
    )
}