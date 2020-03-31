import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../login/login.css';
import firebase from '../../storage/firebase';
import 'firebase/auth';
import { useSelector, useDispatch} from 'react-redux';

export default function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    
    const dispatch = useDispatch();
    
    function logar(){

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso')    
            setTimeout(() =>{
                dispatch({type: 'LOG_IN', usuarioEmail: email})       
            },2000);            
        }).catch(erro => {
            setMsgTipo('erro')
        });      
            
    }    
 
    return(
        <div className="login-content d-flex align-items-center">   
            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}
            <form className="form-signin mx-auto">
                    <div className="text-center mb-4">
                        <i class="far fas fa-mug-hot text-white fa-5x"></i>
                        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>          
                    </div>
                
                    
                    <input onChange={(e) => setEmail(e.target.value)}  type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />          
                    <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />          
                
                    <button onClick={logar} className="btn btn-primary btn-block" type="button">Logar</button>

                    <div className="msg-login text-white text-center my-3">
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você está conectado! &#128526; </span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546; </span>}    
                    </div>

                    <div className="opcoes-login  text-center ">
                    <Link to='/new-user' className="mx-2">cadastrar</Link>
                    </div>
                
                    <div className="opcoes-login  text-center ">
                    <Link to="/recuperar-senha" className="mx-2">Recuperar Senha</Link>
                    </div>
            </form>   
        </div>        
    )
}