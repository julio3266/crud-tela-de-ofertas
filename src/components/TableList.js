import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core'


import css from '../App.css'


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: 250,
      marginTop: theme.spacing.unit * 3
      
    },   
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="input-search" label="Buscar" variant="outlined" />
        <Button component={Link} to="#/form-cadastro" size="large" className="btn-form" variant="contained" color="primary">
        Adicionar
      </Button>
      </form>
      
    </div>
    
    
      
  );
}

