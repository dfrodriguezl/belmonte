import { Container, Grid, GridList, GridListTile, makeStyles, Theme, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { ProductTile } from 'domains/common/components';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageContainer } from '.';
import { Productos } from '../models';

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
  },
  buttonCatalog: {
    color: 'white',
    borderRadius: 50,
    borderColor: '#0E3411',
    textTransform: 'none',
    borderWidth: 2,
    background: '#0E3411',
    padding: '5px 40px',
    fontWeight: 'bolder'
  },
  containerList: {
    padding: '40px 20px'
  }
}));


const ListProducts = () => {
  const classes = styles();
  const history = useHistory();
  const isWaiting = history.location.pathname.indexOf('register') > -1;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer background={smallScreen ? "home-list" : "waiting-back"}>
      <Grid container className={classes.containerList}>
        <GridList cellHeight={'auto'}>
          {Productos.map((producto, index) =>
            <GridListTile>
              <ProductTile producto={producto} />
            </GridListTile>
          )}

        </GridList>
      </Grid>
    </PageContainer>

  )
}

export default ListProducts;