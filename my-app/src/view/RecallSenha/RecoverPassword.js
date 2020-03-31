import React, {useState} from 'react';
import '../RecallSenha/RecoverPassword.css';
import NavBar from '../../Components/NavBar/NavBar';
import firebase from '../../storage/firebase';

export default function RecoverPassword() {
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link no seu email para você redefinir sua senha!');
        }).catch(erro => {
            setMsg('Verifique se o email está correto!');
        })
    }
    return(
        <>
        <NavBar />
            <form className="text-center form-login mx-auto mt-5">                
                <h3 className="mb-3 font-weight-bold text-white">Recuperar Senha</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />

                <div className="msg my-4 text-center">
                    <span>{msg}</span>
                </div>

                <button onClick={recuperarSenha} type="button" className="btn btn-light btn-lg btn-block btn-enviar">Recuperar Senha</button>
            </form>
    </>       
    )
}