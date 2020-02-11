import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import '../../src/App.css'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper'

const style = {
    marginTop: 40

}
function BuscarEAdd() {  
        return(
           <div>
               <Paper elevation={5} >
                    <Grid style={style} container spacing={4}>   
                        <Grid md item={11}>
                            <form style={{marginTop: 20, marginLeft: 10}} noValidate autoComplete="off">
                                <TextField styke={style} label="Buscar" variant="outlined" />
                            </form>
                        </Grid>
                        <Grid item={1}>
                            <Fab style={{ marginTop: 20, marginRight: 10 }} color="primary">
                                <Link to="Cadastro" style={{color: "inherit" }}>
                                    <AddIcon />
                                </Link>  
                            </Fab>  
                        </Grid>    
                                  
                    </Grid>          
                </Paper>
           </div>
        )
    }


export default BuscarEAdd