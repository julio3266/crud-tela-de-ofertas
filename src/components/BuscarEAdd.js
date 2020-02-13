import React from 'react'
import {Grid, Paper, Button} from '@material-ui/core'
import {Link} from 'react-router-dom';
import '../../src/App.css'


const style = {
    marginTop: 7,
    marginLeft: 5,
}

function BuscarEAdd() {    
        return(
           <div>
               <Paper elevation={5} style={{paddingBottom: 10}}  >
                    <Grid style={style} container  >    
                        <Grid item={4}>
                           <Button variant="contained" syze="large" color="primary" style={style}>
                                <Link to="Cadastro" style={{color: "inherit", textDecoration: 'none' }}>
                                    Cadastrar
                                </Link>
                            </Button>     
                        </Grid>                            
                    </Grid>          
                </Paper>
           </div>
        )
    }


export default BuscarEAdd