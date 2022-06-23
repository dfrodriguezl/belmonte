import { Button, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const styles = makeStyles((theme: Theme) => ({
  button: {
    color: '#0E3411',
    marginTop: -20,
    borderRadius: 50,
    borderColor: '#0E3411',
    textTransform: 'none',
    borderWidth: 2,
    background: '#ffffff',
    padding: '5px 40px',
    fontWeight: 'bolder'
  }
}))

interface OwnProps {
  actionButton?: any;
  message?: String;
}

type Props = OwnProps;
const ButtonRequest = (props: Props) => {
  const classes = styles();
  const messageWpp = 'Hola Belmonte!!!, quiero hacer mi pedido, que tienes para esta semana?';
  const { message } = props;

  const goToWpp = () => {
    window.open("https://wa.me/573508214036?text=" + message, "_blank");
  }

  return (
    <Button variant="outlined" className={classes.button} onClick={() => goToWpp()}>
      Pídelo &nbsp; <ShoppingCartIcon fontSize="small" />
    </Button>
  )
}

export default ButtonRequest;