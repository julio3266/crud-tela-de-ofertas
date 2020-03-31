import React, {useState, useEffect} from 'react';
import '../ListProdutos/ListaProdutos.css';
import {Link} from 'react-router-dom';
import firebase from '../../storage/firebase';

export default function ListaProdutos({id,img, marca, modelo, ano, visualizacoes}){
    
    const [urlImagem, setUrlImagem] = useState();
    
    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url));
    }, [urlImagem]);
    return(
        <>
        
        <div className="col-md-3 col-sm-12 mt-3 text-white">
            <img src={urlImagem} className="img-fluid img-cartao" alt="Imagem do Evento" />

            <div className="card-body">
                <h5>{marca}</h5>
                <p className="card-text text-justify">
                    {modelo}
                </p>
                
                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to={'/veiculodetalhes/' + id} className="btn btn-sm btn-detalhes">+ detalhes</Link>                    
                    </div>

                    <div className="col-6 text-right">
                        <i class="fas fa-eye "></i> <span>{visualizacoes}</span>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}