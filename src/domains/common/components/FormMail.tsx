import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { RegisterContainer } from 'domains/core/containers';

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
  const { onValidated } = props;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));


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
    
    </RegisterContainer>

  )
}

export default FormMail;