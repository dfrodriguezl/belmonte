import { Button, makeStyles, Theme } from '@material-ui/core';
import React from 'react';


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
}

type Props = OwnProps;
const ButtonRequest = (props: Props) => {
  const classes = styles();
  const messageWpp = 'Hola Belmonte!!!, quiero hacer mi pedido, que tienes para esta semana?';

  const goToWpp = () => {
    window.open("https://wa.me/573508214036?text=" + messageWpp, "_blank");
  }

  return (
    <Button variant="outlined" className={classes.button} onClick={() => goToWpp()}>
      Haz tu pedido
    </Button>
  )
}

export default ButtonRequest;