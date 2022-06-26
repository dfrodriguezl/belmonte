import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography, Button, makeStyles } from '@material-ui/core';
import { Product } from 'domains/core/models';
import React, { Fragment } from 'react';

const styles = makeStyles(() => ({
  media: {
    width: '80%',
    margin: 'auto'
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
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
  cardActions:{
    justifyContent: 'center'
  }
}));


interface OwnProps {
  producto?: Product
}

type Props = OwnProps;
const ProductTile = (props: Props) => {
  const { producto } = props;
  const classes = styles();

  const goToWpp = (message:string) => {
    window.open("https://wa.me/573508214036?text=" + message, "_blank");
  }

  return (
    <Card className={classes.card} key={producto?.id}>
      <CardMedia image={producto?.img} title={producto?.name} component="img" className={classes.media} />
      <CardHeader>{producto?.name}</CardHeader>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {producto?.name}
        </Typography>
        <Typography variant="caption">
          {producto?.ingredients?.map((ingredient) =>
            <Fragment>
              {ingredient}
              <br />
            </Fragment>
          )}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.buttonCatalog} onClick={() => goToWpp(producto?.message!)}>Pedir</Button>
      </CardActions>
    </Card>
  )

}

export default ProductTile;