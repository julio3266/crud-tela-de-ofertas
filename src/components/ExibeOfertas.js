import React, {useState, useEffect} from 'react'
import { Grid, Typography, Card, CardHeader, CardContent, CardActionArea, CardMedia} from '@material-ui/core'
import firebase from '../Config/firebase'

export default function ExibeOferta(key, marca, modelo, data){
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
<div>
    
        <Grid 
        spacing={1}
        style={{ marginTop: 80 }}
        container 
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
        > 
       {
        ofertas.map(item => 
            <Grid item sm={3}>
                <Card>
                   <CardActionArea>
                        <CardMedia
                            component="img"
                            image="https://via.placeholder.com/100x50"
                            title="Onix Joy"        
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Modelo 1
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            
                        </CardContent>
                   </CardActionArea>
               </Card>
            </Grid>
                )}
            
          
         
        
            </Grid>
        
            </div>
    )
}