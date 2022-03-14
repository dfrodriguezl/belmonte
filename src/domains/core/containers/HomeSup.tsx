import React from 'react';
import { Container, Grid, makeStyles,Theme, useTheme, useMediaQuery, Typography, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Home1, Home2 } from 'assets';
import ButtonRequest from 'domains/common/components/ButtonRequest';
import MessageIcon from '@material-ui/icons/Message';

const styles = makeStyles((theme: Theme) => ({
  background: {
    background: '#ffffff'
  },
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0
  },
  textContent: {
    color: '#0E3411',
    textAlign: 'center',
    padding: '20px 100px'
  },
  textDomicilio: {
    marginTop: 15,
    padding: '10px 10px',
    paddingRight: '80px'
  },
  avatar: {
    position: 'absolute',
    bottom: -60,
    right: 30,
    background: '#0E3411',
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));

const HomeSup = () => {
  const classes = styles();

  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('register') > -1;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const messageWpp = 'Hola Belmonte!!!, quiero hacer mi pedido, que tienes para esta semana?';

  return (
    <div className={!smallScreen ? isWaiting ? "home-sub-1-waiting" : "home-sub-1" : "home-sub-1-small"}>
      <Container className={classes.containerStyle}>
        {smallScreen ?
          <Grid item container justify="center" className={classes.background}>
            <Typography className={classes.textContent}>Pastas Artesanales para recetas frescas y sanas en la puerta de tu casa*.</Typography>
            <Grid xs={12} item container justify="center">
              <a href={"https://wa.me/573508214036?text=" + messageWpp} target="_blank" rel="noreferrer">
                <img src={Home2} alt="Home 2" style={{ display: 'inline-block' }} width="40%" height="80%" />
                <img src={Home1} alt="Home 1" style={{ display: 'inline-block' }} width="60%" height="80%" />
                <Grid xs={12} container item justify="center">
                  <ButtonRequest />
                </Grid>
                <Typography variant="subtitle2" className={classes.textDomicilio}>Servicio domicilio incluido en Bogotá: Rosales, Usaquén, Cedritos y Chia *.</Typography>
              </a>
              <a href={"https://wa.me/573508214036?text=" + messageWpp} target="_blank" rel="noreferrer">
                <Avatar className={classes.avatar} >
                  <MessageIcon fontSize='large' />
                </Avatar>
              </a>
            </Grid>
          </Grid> : ''
        }

      </Container>
    </div>
  );
}

export default HomeSup;
