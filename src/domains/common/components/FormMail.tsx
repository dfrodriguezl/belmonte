import { Fragment, useState } from 'react';
import { Typography, Grid, Input, InputAdornment, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { RegisterContainer } from 'domains/core/containers';
import { ImgVideo } from '.';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  containerForm: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'flex-start',
    },
  },
  input: {
    margin: '5px 0 10px 0',
    height: 30,
    borderRadius: 50,
    width: '70%',
    borderColor: '#707070',
    borderWidth: '2px',
    paddingLeft: 10,
    '&:focus': {
      outline: 'none'
    },
    backgroundColor: 'white',
    fontSize: 14
  },
  iconButton: {
    padding: '5px',
  },
  icon: {
    color: 'white',
    background: 'black',
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
      background: 'gray'
    },
  },
  endText: {
    fontSize: 13,
    color: '#908F8C'
  },
  button: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: '#FF6C6C',
    color: 'white',
    textTransform: 'none',
    padding: '0 25px',
    marginRight: '3px',
    '&:hover': {
      backgroundColor: '#FF6C6C'
    },
  },
  boldText: {
    fontWeight: 'bolder'
  },
  textCenter: {
    textAlign: 'center'
  },
  fontText: {
    fontSize: 15
  },
  inputSmall: {
    width: '100%'
  },
  itemText: {
    textTransform: 'capitalize',
    color: '#000000'
  },
  buttonGreen: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: '#50A01E',
    color: 'white',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#FF6C6C'
    },
    padding: '0px 10px'
  },

})
);

interface StateProps {
  status?: any;
  message?: any;
  onValidated?: any;
}

type Props = StateProps;
const FormMail = (props: Props) => {
  const classes = useStyles();
  const { status, onValidated } = props;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hover, setHover] = useState(false);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();

  const handleChange1 = (e: any) => {
    setFirstName(e.target.value)
  }

  const handleChange2 = (e: any) => {
    setLastName(e.target.value)
  }

  const handleChange3 = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(smallScreen){
      setFirstName(email);
      setLastName(email);
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        FNAME: firstName,
        LNAME: lastName,
      });
    }else{
      email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        FNAME: firstName,
        LNAME: lastName,
      });
    }
    
  }


  return (
    <RegisterContainer>
      {/* <Grid item container sm={12} xs={10} className={classes.containerForm}> */}
        {/* <Typography>
          <h2 style={{ lineHeight: 1.2, fontWeight: 'bold' }} className={smallScreen ? classes.textCenter : ''}>Pastas Artesanales para recetas fescas y sanas en la puerta de tu casa*.</h2>
          {smallScreen ? null :
            <h4 style={{ lineHeight: 1.0, fontWeight: 'normal' }}> Real state developers and property owners access <br /> <span className={classes.boldText}>an instant property feasibility & pre-design housing project.</span></h4>}
        </Typography> */}
      {/* </Grid> */}
      {/* {smallScreen ?
        <ImgVideo></ImgVideo> : null} */}
      {/* <Grid item sm={12} xs={12} style={{ alignSelf: 'flex-end' }}> */}
        {/* <form
          action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          onSubmit={handleSubmit}
        > */}
          {/* {status === "success" || status === "error" ?
            history.push("/waiting/" + firstName + "_" + lastName) : null} */}
          {/* {!smallScreen ?
            <Fragment>
              <Input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" onChange={handleChange1} className={classes.input} disableUnderline required />
              <Input type="text" name="LNAME" id="mce-LNAME" placeholder="Last Name" onChange={handleChange2} className={classes.input} disableUnderline required />
            </Fragment>
            : null} */}

          {/* <div>
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <input type="text" name="b_3c39cbec5fc9d998a5b584676_4064b46da9" />
          </div> */}
          {/* {smallScreen ? <p className={clsx(classes.textCenter, true && classes.fontText, true)}>Generate a custom multifamily development on your lot in real time</p> : null} */}
          {/* <Input type="text" name="EMAIL" id="mce-EMAIL"
            onChange={handleChange3}
            placeholder={!smallScreen ? "Enter email to sign up" : "Enter your email"}
            // className={classes.input}
            className={smallScreen ? clsx(classes.input, true && classes.inputSmall, true) : classes.input}
            disableUnderline
            required
            endAdornment={
              !smallScreen ?
                <InputAdornment position="end">
                  <Button
                    className={classes.button}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    type="submit"
                    name="subscribe"
                  >
                    Join us
                  </Button>
                </InputAdornment> 
                : 
                null
            }
          /> */}
          {/* {smallScreen ? <Grid xs={12} container justify="center">
            <Button className={classes.buttonGreen} type="submit" name="subscribe">
              <p className={classes.itemText}>Get Started</p>
            </Button>
          </Grid> : null} */}
        {/* </form> */}
        {/* {!smallScreen ?
          <p className={classes.endText}>We are currently in beta, sign up to our waiting list.</p> : null} */}
      {/* </Grid> */}
    </RegisterContainer>

  )
}

export default FormMail;