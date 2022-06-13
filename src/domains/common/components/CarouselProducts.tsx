import { Typography, Grid, makeStyles } from '@material-ui/core';
import { Home1 } from 'assets';
import { Productos } from 'domains/core/models';
import React, { Fragment } from 'react';
import Carousel from 'react-material-ui-carousel'

const styles = makeStyles(() => ({
  container: {
    backgroundColor: '#0E3411',
    padding: '10px 10px',
    color: 'white',
    textAlign: 'right'
  }
}))

const CarouselProducts = () => {

  return (
    <Carousel>
      {Productos.map((producto, i) => {
        return <Item producto={producto} key={i} />
      })}
    </Carousel>
  )

};

const Item = (props: any) => {
  const { producto } = props;
  const classes = styles();

  return (
    <Fragment>
      <img src={producto.img} alt="Home 2" style={{ display: 'inline-block' }} width="50%" height="40%" />
      <img src={Home1} alt="Home 1" style={{ display: 'inline-block' }} width="50%" height="100%" />
      <Grid className={classes.container}>
        <Typography variant="subtitle1">{producto.name}</Typography>
        <Typography variant="subtitle2">{producto.subtitle}</Typography>
      </Grid>
    </Fragment>
  )
}

export default CarouselProducts;