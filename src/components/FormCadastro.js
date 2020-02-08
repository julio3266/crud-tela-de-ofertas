import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import '../App.css'
import metodosTabela from '../app/metodosTabela'
import {Link} from 'react-router-dom';


const estadoInicial = {
    marca: '',
    modelo: '',
    data: ''
}
class FormCadastro extends React.Component {     
  state = estadoInicial;
  constructor() {
    super()
    this.products = new metodosTabela();
  }

  onChange = (event) => {
   const valor = event.target.value
   const nomeDoCampo = event.target.name
     this.setState({ [nomeDoCampo]: valor })
  }
  onSubmit = (event) => {
    const produto = {
      marca: this.state.marca,
      modelo: this.state.modelo,
      data: this.state.data
    }
    this.products.salvar(produto)
    console.log('save of sucess!')
  }
 
  render() {
  return (
    <div>  
      <Typography align="center" color="primary" variant="h3" gutterBottom>Cadastro</Typography>
      <Grid className="FormCadastro" container spacing={2}>
        <Grid item xs={4}>
          <TextField 
          id="outlined-basic" 
          fullWidth label="Marca" 
          variant="outlined" 
          onChange={this.onChange}
          name="marca"
          value={this.state.marca}
          />
        </Grid>
        <Grid item xs={4}>
         <TextField id="outlined-basic" 
          fullWidth label="Modelo"
          variant="outlined" 
          onChange={this.onChange}
          name="modelo"
          value={this.state.modelo}    
          />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic"
            fullWidth label="Ano"
            variant="outlined"           
            />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" 
            fullWidth label="Preço"
            variant="outlined"    
           />
        </Grid>
        <Grid item xs={4}>
         <TextField id="outlined-basic" 
         fullWidth label="Cor" 
         variant="outlined" />
        </Grid>
        <Grid  item xs={4}>
          <TextField  id="outlined-basic" 
          fullWidth label="Quilometragem"
           variant="outlined" />
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
            onChange={this.onChange}
            name="data"
            value={this.state.datecreate}
            />
        </Grid>
        <div>
          <Grid item xs={1}>
            <Button
              className="btn-cadastro"
                variant="contained"
                startIcon={<SaveIcon/>}
                color="primary"
                size="large" 
                onClick={this.onSubmit}
                >
                Cadastrar
              </Button>      
            </Grid>
          </div>
          <div>
            <Grid item lg={1} >
            <Button  
              className="btn-cadastro"
                variant="contained"
                startIcon={<DeleteIcon/>}
                color="primary"
                size="large"   
                
                >
                <Link to="/"  style={{color: "inherit" }}>
                    Cancelar
                </Link>
              </Button>      
            </Grid>
          </div>
      </Grid>      
    </div>
  );
  } 
}
export default FormCadastro