import React from 'react';
import{ Grid, TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom'
import CustomFormLogin from '../Custon/CustomFormLogin.css'

export default function FormLogin(props){
    return(
        <Grid 
         container
         spacing={2}
         direction="column"
         alignItems="center"
         justify="center"
         style={{ minHeight: '100vh'  }}
        >
            <Grid item xs={7}>
                    <TextField 
                    className="inputLogin"
                    style={{marginBottom: 10}}
                    fullWidth
                    variant="outlined"
                    label="Usuário"
                    color="secondary"
                    />
                    <TextField
                    style={{marginBottom: 10}}
                        fullWidth  
                    variant="outlined"
                    type="password"
                    label="Senha"
                    color="secondary"
                    />
            </Grid>      
            <Grid  item md={3}>
                <Button variant="contained" style={{ marginRight: 5 }} color="primary" size="medium">Entrar</Button>
                <Button variant="contained" color="secondary" size="medium">Cadastrar</Button>
            </Grid>
         
        </Grid>
    );
  }

    
 