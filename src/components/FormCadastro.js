import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(4),
      width: 200,
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      
        <Grid container>
          <Grid item  sm={4} md={4} lg={4}>
               <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                variant="filled"
                />  
          </Grid>
         <Grid item  sm={4} >
               <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                variant="filled"
                />
          </Grid>
      </Grid>
    </form>
    
  );
}