import React, {useState} from 'react';
import {Grid, Paper, Typography, Button, TextField, CircularProgress} from '@material-ui/core'
import firebase from '../Config/firebase';
import 'firebase/auth';

export default function CadastrarUsuario(){
    
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();
    
    function cadastrar(){
        setCarregando(1);
        setMsgTipo(null);

        if(!email || !senha) {
            setMsgTipo('erro')
            setMsg('Informe um e-mail e senha válidos para cadastrar!')
            return;
        }
            firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado => {
                setCarregando(0);
                setMsgTipo('sucesso');
            }).catch(erro => {
                setCarregando(0);
                setMsgTipo('erro')
                    switch(erro.message) 
                    {
                    case 'Password should be at least 6 characters':
                        setMsg('A senha deve ter pelo menos 6 caracteres!');  
                        break;
                    case 'The email address is already in use by another account.':
                        setMsg('Este email já está sendo utilizado por outro usuário!'); 
                        break; 
                    case 'The email address is badly formatted.':
                        setMsg('O formato do seu email é inválido!'); 
                        break;
                    default:
                        setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                        break; 
                    }
            });
        }

    return(
        <Paper style={{ marginTop:40 }} elevation={3}>
            <Typography variant="h4" align="center">Cadastro</Typography>
            <Grid
             container
             spacing={2}
             direction="column"
             alignItems="center"
             justify="center"
             style={{ minHeight: '80vh'  }}
            >
                <Grid item xs={8}>
                    <TextField 
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: 300 }}
                    variant="outlined"
                    label="Usuário"
                    type="email"
                    /> 
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    onChange={(e) => setSenha(e.target.value)}
                    style={{ width: 300 }}
                    variant="outlined"
                    label="Senha"
                    type="password"
                    />
                </Grid>
                <Grid  item md={3}>
                    {
                        carregando ? <div><CircularProgress color="secondary" /></div>
                        : <Button onClick={cadastrar} variant="contained" color="secondary" size="large">Cadastrar</Button>
                    }
                </Grid>
                <Grid item md={3}>
                    {msgTipo === 'sucesso' && <Typography style={{ marginTop: 20, fontWeight: "bold" }} color="primary">Cadastro efetuado com sucesso!</Typography>}  
                    {msgTipo === 'erro' && <Typography style={{ marginTop: 20, fontWeight: "bold" }} color="error">{msg}</Typography>}
                </Grid>
            </Grid>
        </Paper>
    )
}