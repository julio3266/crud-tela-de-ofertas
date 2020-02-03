import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      <Typography align="center" color="primary" variant="h2" gutterBottom>Cadastro</Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField id="outlined-basic" fullWidth label="Marca" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
         <TextField id="outlined-basic" fullWidth label="Modelo" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" fullWidth label="Ano" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" fullWidth label="Preço" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
         <TextField id="outlined-basic" fullWidth label="Cor" variant="outlined" />
        </Grid>
        <Grid  item xs={4} >
          <TextField  id="outlined-basic" fullWidth label="Quilometragem" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" fullWidth label="Placa" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" fullWidth label="Cidade" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" fullWidth label="Cidade" variant="outlined" />
        </Grid>
        <Divider className={classes.divider} />
        <Grid item xs={7}>
              <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
        </Grid>
       
      </Grid>
        <Divider className={classes.divider} />
     
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
            <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            >
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
}