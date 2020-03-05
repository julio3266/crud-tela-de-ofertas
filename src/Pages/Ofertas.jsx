import React, {useState, useEffect} from 'react'
import ExibeOfertas from '../components/ExibeOfertas'
import firebase from '../Config/firebase'

export default function Ofertas(){
  const [buscar, setBuscar] = useState('');
  const [ofertas, setOfertas] = useState([]);
  const listaofertas = [];
  useEffect(()=>{
      
      firebase.firestore().collection('ofertas').get().then(async (resultado) => {
          await resultado.docs.forEach(doc => {
              if(doc.data().modelo.indexOf(buscar) >= 0)
              {
              listaofertas.push({
                  id: doc.id,
                  ...doc.data()
              })
            }
          })
          setOfertas(listaofertas);
      })
  })
    return(
        <>
         {ofertas.map (item => <ExibeOfertas key={item.id} modelo={item.modelo} marca={item.marca} fotoNova={item.fotoNova} data={item.data} />)}
        </>
    )
} 