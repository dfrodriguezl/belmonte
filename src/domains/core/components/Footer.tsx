import React from 'react';
import { compose } from 'recompose';
import { Container, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#E3E3E3'
    },
    footer: {
      fontSize: 12,
      padding: theme.spacing(2, 2),
      lineHeight: '16px',
      '& a': {
        color: 'white',
        opacity: '89%'
      }
    },
    links: {
      marginRight: 6
    },
    colorIcon: {
      color: '#0E3411',
      marginTop: 15
    },
    colorIconBold: {
      color: '#0E3411',
      fontWeight: 'bolder'
    }
  })
);

type Props = RouteComponentProps;
const Footer = (props: Props) => {
  const classes = useStyles()
  const messageWpp = 'Hola Belmonte!!!, quiero hacer mi pedido, que tienes para esta semana?';


  return (
    <Grid container item className={classes.root} xs={12}>
      <Container maxWidth="lg">
        <footer className={classes.footer}>
          <Grid container>
            <Grid item container xs={12} sm={6} justify='center'>
              <a href="https://www.instagram.com/belmonteartesanal/" className={classes.links} target="_blank" rel="noreferrer">
                <InstagramIcon fontSize='large' className={classes.colorIconBold} />
              </a>
              <br />
            </Grid>
            <Grid item container xs={12} justify='center'>
              <a href={"https://wa.me/573508214036?text=" + messageWpp} target="_blank" rel="noreferrer">
                <Typography variant="subtitle1" className={classes.colorIcon}>Whatsapp | 350 821 4036</Typography>
              </a>
            </Grid>
            <Grid item container xs={12} justify='center' className={classes.colorIconBold}>
              <Typography variant="h6">B E L M O N T E</Typography>
            </Grid>
          </Grid>
        </footer>
      </Container>
    </Grid>
  );
}

const container = compose<Props, {}>(
  withRouter,
)(Footer)

export default container;
