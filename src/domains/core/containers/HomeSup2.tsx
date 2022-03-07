import React from 'react';
import { Container, Grid, Box, Paper, makeStyles, Button, Theme, useTheme, useMediaQuery, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ArrowForward } from '@material-ui/icons';
import { basicVolume, interior, Step21, Home1, Home2 } from 'assets';

const styles = makeStyles((theme: Theme) => ({
  image: {
    height: 200,
    width: 300,
    backgroundColor: 'transparent',
    margin: 'auto'
  },
  title: {
    paddingTop: 40,
  },
  step: {
    color: 'black',
    fontSize: 20,
    paddingTop: 25,
  },
  stepTitle: {
    fontSize: 24,
    color: 'black'
  },
  stepBody: {
    fontSize: 18,
    paddingBottom: 30,
    color: '#666666'
  },
  JoinContainer: {
    backgroundColor: '#F7F7F7',
    marginTop: 40,
    marginBottom: 40,
    paddingLeft: 40,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      paddingLeft: 0,
    },

  },
  buttonJoin: {
    color: "#FF6C6C",
    textTransform: 'none',
    fontSize: 18,
    height: "100%",
    [theme.breakpoints.down('sm')]: {
      justifySelf: 'center'
    }
  },
  phrase: {
    fontSize: 17,
    color: "#696969"
  },
  svg: {
    width: '100%',
  },
  circle: {
    width: '300px',
    height: '300px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    border: '1px solid #707070',
    boxShadow: '0 3px 6px -2px #00000029',
    marginBottom: 20
  },
  centerText: {
    textAlign: 'center'
  },
  imgSmall:{
    width: '100%',
    marginTop: 40
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
    padding: '0px 10px',
    marginBottom: 15
  },
  background: {
    background: '#ffffff'
  },
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0
  },
  textContent:{
    color: '#0E3411',
    textAlign: 'center',
    padding: '20px 50px'
  }
}));

const HomeSup2 = () => {
  const classes = styles();

  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('register') > -1;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const goToWaiting = () => {
    if (isWaiting) {
      handleScroll()
    } else {
      history.push('/register')
    }
  }

  const toGetStarted = () => {
    window.scrollTo(0,0);
  }

  return (
    <div >
      <Container className={classes.containerStyle}>
        {!smallScreen ?
          <Grid container>
            <Grid item xs={12} className={classes.title}>
              <Box component="h2" color="primary">GENERATE YOUR PROJECT PRE-DEVELOPMENT IN THREE STEPS</Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Paper elevation={0} className={classes.image}>
                <img src={basicVolume} alt="" className={classes.svg} />
              </Paper>
              <div className={classes.step}>
                <Box component="span" >Step One</Box>
              </div>
              <div className={classes.stepTitle}>
                <Box component="h4" >Validate model generated by REA</Box>
              </div>
              <div className={classes.stepBody}>
                <Box component="span" fontSize={16}>
                  Generate the pre-project model for your housing project and calculate on realtime: units, living area, floor occupation density.
                </Box>
              </div>
            </Grid>
            <Grid item sm={12} md={4}>
              <Paper elevation={0} className={classes.image}>
                <img src={Step21} alt="" className={classes.svg} />
              </Paper>
              <div className={classes.step}>
                <Box component="span" >Step Two</Box>
              </div>
              <div className={classes.stepTitle}>
                <Box component="h4" >Review presentations made by REA</Box>
              </div>
              <div className={classes.stepBody}>
                <Box component="span" fontSize={16}>
                  Visualise the Investor & Client presentations. Review information, edit and complement teasers.
                </Box>
              </div>
            </Grid>
            <Grid item sm={12} md={4}>
              <Paper elevation={0} className={classes.image}>
                <img src={interior} alt="" className={classes.svg} />
              </Paper>
              <div className={classes.step}>
                <Box component="span" >Step Three</Box>
              </div>
              <div className={classes.stepTitle}>
                <Box component="h4" >Download documents and pitch</Box>
              </div>
              <div className={classes.stepBody}>
                <Box component="span" fontSize={16}>
                  Download presentations and make show your project to potential investors, banks and clients.
                </Box>
              </div>
            </Grid>
            <Grid item container xs={12} sm={12} className={classes.JoinContainer} justify="center" style={{ maxWidth: '100%' }}>

              <Grid item xs={10} className={classes.phrase} >
                <Box component="p">
                  Generate and analyse an automated preliminary deisgn of collective housing project in three simple steps.
                </Box>

              </Grid>

              <Grid item xs={4} sm={2} justify='center'>
                <Button
                  endIcon={<ArrowForward />}
                  className={classes.buttonJoin}
                  onClick={() => goToWaiting()}
                >
                  Join us
                </Button>
              </Grid>



            </Grid>
          </Grid> :
          <Grid container justify="center" className={classes.background} xs={12}>
            <img src={Home1} alt="Home 1" style={{display: 'inline-block'}} width="30%"/>
            <img src={Home2} alt="Home 2" style={{display: 'inline-block'}} width="50%"/>
            {/* <Typography className={classes.textContent}>Pastas Artesanales para recetas frescas y sanas en la puerta de tu casa*.</Typography> */}
            {/* <Grid className={classes.circle}>
              <img src={basicVolume} alt="" className={classes.imgSmall} />
              <Typography variant="subtitle1" className={classes.centerText}>Basic volume</Typography>
              <Typography variant="subtitle2" className={classes.centerText}>Step One</Typography>
            </Grid>
            <Button className={classes.buttonGreen} onClick={() => toGetStarted()}>
              <p className={classes.itemText}>Get Started</p>
            </Button> */}
          </Grid>
        }

      </Container>
    </div>
  );
}

export default HomeSup2;