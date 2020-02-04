import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import {useHistory} from 'react-router-dom'




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
   button: {
    margin: theme.spacing(1),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();
  const [Marca, setMarca] = useState('')
  const [Modelo, setModelo] = useState('')
  const [ Date, setDate ] = useState('')
  const [ Ano, setAno] = useState('')
  const [ Preço, setPreco] = useState('')
  const submit = (event) => {
    event.preventDefault();
    console.log(`Marca: Chev - ${Marca}, Modelo - ${Modelo},  Data de Criação - ${Date}, Ano - ${Ano}, Preço - ${Preço}` )
  }
  const history = useHistory();
  function goBackHome() {
    history.goBack();
  }

  return (
    <div>
       
      <Typography align="center" color="primary" variant="h2" gutterBottom>Cadastro</Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField 
          id="outlined-basic" 
          fullWidth label="Marca" 
          variant="outlined" 
          value={Marca}
            onChange={ e => setMarca(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
         <TextField id="outlined-basic" 
          fullWidth label="Modelo"
          variant="outlined" 
          value={Modelo}
          onChange={e => setModelo(e.target.value)}      
          />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic"
            fullWidth label="Ano"
            variant="outlined" 
            value={Ano}
            onChange={e => setAno(e.target.value)}
            />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" 
            fullWidth label="Preço"
            variant="outlined" 
            value={Preço}
            onChange={e => setPreco(e.target.value)}
           />
        </Grid>
        <Grid item xs={4}>
         <TextField id="outlined-basic" 
         fullWidth label="Cor" 
         variant="outlined" />
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
          <TextField id="outlined-basic" 
            fullWidth label="Data de Criação" 
            variant="outlined"
            value={Date}
            onChange={e => setDate(e.target.value)}
            />
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
            onClick={submit}
            >
            Cadastrar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={goBackHome}
            >
            Cancelar
          </Button>
        
        </div>

      </div>
    </div>
  );
}