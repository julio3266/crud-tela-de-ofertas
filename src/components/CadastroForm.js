import React, { useState } from 'react'
import firebase from '../Config/firebase'
import { Link } from 'react-router-dom'
import {TextField, Grid, Typography, Button, Paper} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const style ={
    height: 90,
    width: 150,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',    
}

const db = firebase.firestore();

function CadastroForm() {
    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();
    const [data, setData] = useState();
    
    function cadastrar() {
        db.collection('ofertas').add({
            marca: marca,
            modelo: modelo,
            data: data
        })
    }
        return(
            <div>
                 <Paper  elevation={3}>
                    <Typography style={{ marginTop: 30,  }}  align="center" color="primary" variant="h3" gutterBottom>Cadastro</Typography>
                    
                                <Grid   direction="column"
                                        alignItems="center"
                                        container
                                        style={{ marginTop: 70 }} >
                                <Grid md item={12}>
                                    <form    noValidate autoComplete="off">
                                        <TextField style={style} variant="outlined" onChange={(e) =>setMarca(e.target.value)} label="Marca" />
                                        <TextField style={style} variant="outlined" onChange={(e) => setModelo(e.target.value)} label="Modelo" />
                                        <TextField style={style} variant="outlined" onChange={(e) => setData(e.target.value)} label="Data de Criação" />
                                        <TextField type="number" style={style} variant="outlined" label="Ano" />
                                    </form>
                                </Grid>
                                <Grid md item={12}>
                                    <form  noValidate autoComplete="off">
                                        <TextField type="number" style={ style} variant="outlined" label="Preço" />
                                        <TextField style={style} variant="outlined" label="Cor" />
                                        <TextField type="number" style={ style} variant="outlined" label="Quilometragem" />
                                        <TextField style={ style} variant="outlined" label="Placa" />
                                    </form>
                                </Grid>
                                <Grid md item={12}>
                                    <form  noValidate autoComplete="off">
                                        <TextField style={style} variant="outlined" label="Cidade" />         
                                    </form>
                                </Grid>
                                <Grid md item={12}>
                                        <Button
                                        style={{ marginBottom: 20, }}
                                            variant="contained"
                                            color="default"
                                            startIcon={<CloudUploadIcon />}
                                         >
                                            Upload
                                        </Button>        
                                   
                                </Grid>
                                <Grid item md={2} style={{  marginBottom: 10  }}>
                                <Button 
                                    onClick={cadastrar}
                                    style={{ marginRight: 5 }}
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    startIcon={<SaveIcon />}
                                    >
                                    Save
                                </Button>   
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="medium"
                                    startIcon={<DeleteIcon />}
                                        >
                                        <Link to='/' style={{ color:'inherit',  textDecoration: 'none' }}>Cancelar</Link>
                                </Button>
                            </Grid>
                            </Grid>
                        </Paper>                                           
                </div>           
        )
    }

export default CadastroForm