import React, {useState, useEffect} from 'react'
import{TableBody, TableHead, TableCell, TableRow, IconButton, Grid, Paper, Table, TextField, Button } from '@material-ui/core';
import firebase from '../Config/firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Redirect, Link } from 'react-router-dom';
import '../../src/App.css'


function Tabela(key, marca, modelo, data) {
    const [buscar, setBuscar] = useState('');
    const [ofertas, setOfertas] = useState([]);
    const [excluir, setExcluir] = useState(0);
    const listaofertas = []
    
    function remover(id){
        firebase.firestore().collection('ofertas').doc().delete().then(() =>{
            setExcluir(1);
        })
    }
    useEffect(()=>{
        
        firebase.firestore().collection('ofertas').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                if(doc.data().modelo.indexOf(buscar) >= 0)
                {
                listaofertas.push({
                    id: doc.id,
                    ...doc.data()
                })
              }
            })
            setOfertas(listaofertas);
        })
    })

    return(
        
    <Paper elevation={2} style={{ marginTop: 20 }}>
        {excluir ? <Redirect to='/'/> : null}
        <Grid>
            <Grid md item={8}>
                <form style={{marginTop: 30}} noValidate autoComplete="off">
                    <TextField onChange={(e) => setBuscar(e.target.value)} style={{ marginTop: 20, marginLeft: 3 }}   label="Buscar" variant="outlined" />
                </form>
            </Grid>
            <Grid item={12}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell  size="small" align="center">Marca</TableCell>
                            <TableCell  size="small" align="center">Modelo</TableCell>
                            <TableCell  size="small" align="center">Data de criação</TableCell>
                            <TableCell  size="small" align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                ofertas.map(item => 
                                {  return( 
                                    <TableRow>
                                        <TableCell  size="small" align="center" key={item.marca}>{item.marca}</TableCell>
                                        <TableCell  size="small" align="center" key={item.modelo}>{item.modelo}</TableCell>
                                        <TableCell  size="small" align="center" key={item.data}>{item.data}</TableCell>
                                        <TableCell  size="medium" align="center" >
                                           
                                            <IconButton aria-label="delete" >
                                                    <DeleteIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton>
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                            
                                        </TableCell>
                                    </TableRow>
                                )})
                            } 
                    </TableBody>
                </Table>
            </Grid>    
        </Grid>
    </Paper>
    )
}

export default Tabela