import React, {useState, useEffect} from 'react';
import {Link, Redirect } from 'react-router-dom';
import firebase from '../../storage/firebase';
import { useSelector } from 'react-redux';
import '../DetalhesVeiculo/VeiculoDetalhes.css';
import NavBar from '../../Components/NavBar/NavBar'


export default function VeiculoDetalhes(props){

    const [veiculo, setVeiculo] = useState({});
    const [urlImg, setUrlImg] = useState();    
    const usuarioLogado = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState(1);
    const [excluido, setExcluido] = useState(0);
    
    function remover(){
        firebase.firestore().collection('ofertas').doc(props.match.params.id).delete().then(() => {
            setExcluido(1);
        })
    }

    useEffect(() => {     
        if(carregando){        
            firebase.firestore().collection('ofertas').doc(props.match.params.id).get().then(resultado => {
                setVeiculo(resultado.data())
                firebase.firestore().collection('ofertas').doc(props.match.params.id).update('visualizacoes', resultado.data().visualizacoes + 1)
                firebase.storage().ref(`imagens/${resultado.data().foto}`).getDownloadURL().then(url => {
                    setUrlImg(url)
                    setCarregando(0);
                });    
        });  
    }else{
        firebase.storage().ref(`imagens/${veiculo.foto}`).getDownloadURL().then(url => setUrlImg(url))
    }      
    },[])

    return(
        <>
        <NavBar />

        {excluido ? <Redirect to='/' /> : null}


        <div className="container-fluid">
            {

            carregando ? <div className="row mt-5"> <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only"></span></div> </div>
            :
            <div>
            <div className="row">
                <img src={urlImg} className="img-fluid w-50 mr-auto ml-auto " alt="Banner" />

                 <div className="col-12 text-right mt-1 visualiacoes">
                 <i class="fas fa-eye"></i> <span>{veiculo.visualizacoes + 1}</span>
                 </div>

                 <h3 className="mx-auto mt-5 titulo"><strong></strong></h3>


            </div>

            <div className="row mt-5 d-flex justify-content-around ">
                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                    <i className="fas fa-ticket-alt fa-2x"></i>
                    <h5><strong>Marca</strong></h5>
                    <span className="mt-3">{veiculo.marca}</span>
                </div>
                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                    <i className="fas fa-ticket-alt fa-2x"></i>
                    <h5><strong>Modelo</strong></h5>
                    <span className="mt-3">{veiculo.modelo}</span>
                </div>

                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                    <i className="fas fa-calendar-alt fa-2x"></i>
                    <h5><strong>data</strong></h5>
                    <span className="mt-3">{veiculo.data}</span>
                </div>

                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                    <i className="fas fa-clock fa-2x"></i>
                    <h5><strong>Ano</strong></h5>
                    <span className="mt-3">{veiculo.ano}</span>
                </div>
            </div>

            <div className="row box-detalhes mt-5">
                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-clock fa-2x"></i>
                        <h5><strong>Placa:</strong></h5>
                        <span className="mt-3">{veiculo.placa}</span>
                </div>
                
              
            </div>

            {
                usuarioLogado === veiculo.usuario ? 
                <Link to={`/editarveiculo/${props.match.params.id}`} className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
                : ''
            }


            {
                usuarioLogado === veiculo.usuario ? <button onClick={remover} type="button" className="btn btn-light btn-lg btn-block mt-3 mb-5 btn-cadastro">Remover Veiculo </button>
                : null
            }

            </div>

            }
        </div>

    </>
    )
}