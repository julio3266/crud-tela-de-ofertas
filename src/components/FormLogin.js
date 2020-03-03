import React, {useState} from 'react';
import{ Grid, TextField, Button, Typography} from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';
import CustomFormLogin from '../Custon/CustomFormLogin.css';
import {useSelector, useDispatch} from 'react-redux'
import firebase from '../Config/firebase';
import 'firebase/auth';

export default function FormLogin(props){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();
    function logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            //Sucess
            setMsgTipo('sucesso');
            dispatch({type: "LOG_IN", usuarioEmail: email})
        }).catch(erro => {
            setMsgTipo('erro');
        });
    }

    return(
        <Grid 
         container
         spacing={2}
         direction="column"
         alignItems="center"
         justify="center"
         style={{ minHeight: '100vh'  }}
        >
            
                {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/Admin' /> : null}
            
            <Grid item xs={7}>
                    <TextField 
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputLogin"
                    style={{marginBottom: 10}}
                    fullWidth
                    type="email"
                    variant="outlined"
                    label="Usuário"
                    color="secondary"
                    />
                    <TextField
                    onChange={(e) => setSenha(e.target.value)}
                    style={{marginBottom: 10}}
                        fullWidth  
                    variant="outlined"
                    type="password"
                    label="Senha"
                    color="secondary"
                    />
            </Grid>      
            <Grid  item md={3}>
                <Button onClick={logar} type="button" variant="contained" style={{ marginRight: 5 }} color="primary" size="medium">Entrar</Button>
                <Button variant="contained" color="secondary" size="medium">
                    <Link style={{ textDecoration: "none", color: "inherit" }} to='UserCadastro'>Cadastrar</Link>
                </Button>
                
                {msgTipo === 'sucesso' && <Typography style={{ marginTop: 20, fontWeight: "bold" }} color="primary">Logado com sucesso!</Typography>}  
                {msgTipo === 'erro' && <Typography style={{ marginTop: 20, fontWeight: "bold" }} color="error">Usuário ou email inválidos!</Typography>}
                
                
            </Grid>

        </Grid>
    );
  }

    
 