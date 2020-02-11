import React, {useState, useEffect} from 'react'
import '../../src/App.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import firebase from '../Config/firebase'

function Tabela(key, marca, modelo, data) {
    const [ofertas, setOfertas] = useState([]);
    const listaofertas = []
    useEffect(()=>{
        firebase.firestore().collection('ofertas').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaofertas.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setOfertas(listaofertas);
        })
    })

    return(
    <Paper elevation={2} style={{ marginTop: 20 }}>
        <Grid contianer>
            <Grid item={12}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell  size="medium" align="center">Marca</TableCell>
                            <TableCell  size="medium" align="center">Modelo</TableCell>
                            <TableCell  size="medium" align="center">Data de criação</TableCell>
                            <TableCell  size="medium" align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                ofertas.map(item => 
                                {  return( 
                                    <TableRow>
                                        <TableCell  size="medium" align="center" key={item.marca}>{item.marca}</TableCell>
                                        <TableCell  size="medium" align="center" key={item.modelo}>{item.modelo}</TableCell>
                                        <TableCell  size="medium" align="center" key={item.data}>{item.data}</TableCell>
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