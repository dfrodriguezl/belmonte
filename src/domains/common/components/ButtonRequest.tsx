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
    padding: '5px 20px',
    fontWeight: 'bolder'
  }
}))

const ButtonRequest = () => {
  const classes = styles();

  return (
    <Button variant="outlined" className={classes.button}>
      Haz tu pedido
    </Button>
  )
}

export default ButtonRequest;