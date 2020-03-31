import React, {useState, useEffect} from 'react';
import '../home/home.css';
import NavBar from '../../Components/NavBar/NavBar';
import ListaProdutos from '../../Components/ListProdutos/ListaProdutos'
import firebase from '../../storage/firebase';
import { useSelector } from 'react-redux';

export default function Home({match}) {
    const [veiculos, setVeiculos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    let listaveiculos = []; 
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    

    useEffect(() => {
        if(match.params.parametro){
            firebase.firestore().collection('ofertas').where('usuario','==',usuarioEmail).get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                   if(doc.data().modelo.indexOf(pesquisa) >= 0)
                   {
                    listaveiculos.push({
                       id: doc.id,
                       ...doc.data()
                   })
                   }
               })
       
               setVeiculos(listaveiculos);
           });   
        }else{
            firebase.firestore().collection('ofertas').get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                   if(doc.data().modelo.indexOf(pesquisa) >= 0)
                   {                   
                    listaveiculos.push({
                       id: doc.id,
                       ...doc.data()
                   })
                   }
               })
       
               setVeiculos(listaveiculos);
           });
        }
               
    
    });
  
    return(
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row p-3">
                    {veiculos.map( item=> <ListaProdutos id={item.id} marca={item.marca} img={item.foto} modelo={item.modelo}  ano={item.ano} visualizacoes={item.visualizacoes} />)}
                </div>
            </div>
            
        </>
    )
}