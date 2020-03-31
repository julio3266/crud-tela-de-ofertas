import React, {useState} from 'react';
import '../CadastroVeiculo/CadastroVeiculo.css';
import NavBar from '../../Components/NavBar/NavBar';
import {useSelector} from 'react-redux'; 
import firebase from '../../storage/firebase';


const storage = firebase.storage();
const db = firebase.firestore();

export default function CadastroVeiculo(props){
    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();
    const [cor, setCor] = useState();
    const [quilometragem, setQuilometragem] = useState();
    const [data, setData] = useState();   
    const [valor, setValor] = useState(); 
    const [cidade, setCidade] = useState();
    const [fotoAtual, setFotoAtual] = useState();    
    const [fotoNova, setFotoNova] = useState();    
    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    
    function cadastrar(){
        setMsgTipo(null);
        setCarregando(1);
        storage.ref(`imagens/${fotoNova.name}`).put(fotoNova).then(() => {
            db.collection('ofertas').add({
                marca: marca,
                modelo: modelo,
                cor: cor,
                quilometragem: quilometragem,
                data: data,
                valor: valor,
                usuario: usuarioEmail, 
                visualizacoes: 0,
                foto: fotoNova.name,
                publico: 1,
                criacao: new Date()
            }).then(() => {
                setMsgTipo('sucesso');
                setCarregando(0);
            }).catch(erro => {
                setMsgTipo('erro');
                setCarregando(0);
        });
    });
}

    return(
        <>
        <NavBar/>
        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="mx-auto font-weight-bold text-white">{props.match.params.id ? 'Atualizar Veiculo' : 'Novo Veículo'}</h3>
            </div>

            <form>
            <div className="form-group row">
                    <div className="col-6  text-white">
                        <label>Marca:</label>
                        <select onChange={(e) => setMarca(e.target.value)} className="form-control" >
                            <option disabled selected value>-- Selecione a marca --</option>
                            <option>Audi</option>
                            <option>volkswagen</option>
                            <option>ford</option>
                            <option>hyundai</option>
                            <option>KIA</option>
                            <option>Land Rover</option>
                        </select> 
                    </div>

                    <div className="col-6 text-white">
                        <label>Modelo:</label>
                        <input onChange={(e) => setModelo(e.target.value)} type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-6  text-white">
                        <label>Cor:</label>
                        <select onChange={(e) => setCor(e.target.value)}  className="form-control" >
                            <option disabled selected value>-- Selecione a cor do veículo --</option>
                            <option>Branco</option>
                            <option>Prata</option>
                            <option>Preto</option>
                            <option>Cinza</option>
                            <option>Vermelho</option>
                        </select>                   
                    </div>

                    <div className="col-6 text-white">
                         <label>Quilometragem:</label>
                        <input onChange={(e) => setQuilometragem(e.target.value)}  type="number" className="form-control" placeholder="KM" />
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-6  text-white">
                        <label>Data:</label>
                        <input onChange={(e) => setData(e.target.value)} type="date"  className="form-control "/>
                    </div>

                    <div className="col-6 text-white">
                        <label>Preço:</label>
                        <input onChange={(e) => setValor(e.target.value)} type="text"  className="form-control"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-6  text-white">
                        <label>Placa:</label>
                        <input type="text"  className="form-control"  placeholder="XXX-XXX"/>
                    </div>

                    <div className="col-6 text-white">
                        <label>Cidade:</label>
                        <input onChange={(e) => setCidade(e.target.value)} type="number"  className="form-control"/>
                    </div>
                </div>

                <div className="form-group  text-white">
                    <label>Upload da Imagem {props.match.params.id  ? '(caso queira manter a mesma foto, não precisa escolher uma nova imagem!)' : null}:</label>
                    <input onChange={(e) => setFotoNova(e.target.files[0]) }  type="file" className="form-control text-white text-white"/>
                </div>

                <div className="row">               
                {
                    carregando > 0 ? <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading...</span></div>
                    : <button  onClick={cadastrar}  type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">{props.match.params.id ? 'Atualizar Veiculo ' : 'Publicar Veículo'}</button>
                }
                </div>
                
            </form>

            <div className="msg-login text-center mt-2">
                {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Veículo Publicado &#128526; </span>}
                {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possível publicar o Veículo! &#128546; </span>}               
            </div>
        </div>
        </>
    )
}