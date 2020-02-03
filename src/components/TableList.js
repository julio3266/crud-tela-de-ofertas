import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div style={{ padding: 20 }} className={classes.root}>
      <Grid container spacing={3}>   
        <Grid item xs={6}>       
          <TextField id="input-search" label="Buscar" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Button   size="large" className="btn-form" variant="contained" color="primary">  
            <Link to="cadastro" style={{color: "inherit" }}>
              Adicionar
            </Link>
          </Button>
        </Grid>    
      </Grid>
    </div>
  );
}

         