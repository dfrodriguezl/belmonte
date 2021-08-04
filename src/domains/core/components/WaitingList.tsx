import React, {useState,Fragment} from 'react';
import { Typography, Grid, TextField,Input, Fab, InputAdornment, IconButton} from '@material-ui/core';
import { RegisterContainer } from 'domains/core/containers';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      padding: 20,
    }
})
)

export default function WaitingList() {
    const classes = useStyles();

    return (
        <RegisterContainer>
            <Grid item sm={12} style={{alignSelf:'flex-end'}}>
                <Typography>
                    <h2>You have <br/> <span style={{textDecoration: 'underline'}}>Joined REA's waiting list!.</span></h2>
                    <p>Hi xxxxxxx </p> 
                    <p>Thank you for your interest in <span style={{fontWeight: 'bold'}}>rea</span>!<br/>We are so grateful for and overwhelmed by the number of people<br/>
                        that have signed up to be earley testers.<br/>We will be in touch when we are ready to release <span style={{fontWeight: 'bold'}}>rea</span> in your
                        country.<br/>Thank you for being part of the <span style={{fontWeight: 'bold'}}>rea</span> team.<br/><br/>Let's build the future together!</p> 
                </Typography>
            </Grid>
            {/* <Grid item sm={12} style={{alignSelf:'flex-end'}}>
                <form
                action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                >
                <Input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" className={classes.input} disableUnderline required/>
                <Input type="text" name="LNAME" id="mce-LNAME" placeholder="Last Name" className={classes.input} disableUnderline required/>
                <div>
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                </div>
                <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
                    <input type="text" name="b_3c39cbec5fc9d998a5b584676_4064b46da9" /> 
                </div>
                <Input type="text" name="EMAIL" id="mce-EMAIL"
                    placeholder="Enter email to sign up" 
                    className={classes.input} 
                    disableUnderline
                    required
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton className={classes.iconButton} type="submit" name="subscribe"> 
                            <ArrowForwardIcon className={classes.icon}></ArrowForwardIcon>
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </form>
                <p className={classes.endText}>We are currently in beta, sign up to our waiting list.</p>
            </Grid> */}
        </RegisterContainer>
    )
}