import React, {useState, useEffect} from 'react'
import { Grid, Typography, Card, CardContent, CardActionArea, CardMedia} from '@material-ui/core'
import firebase from '../Config/firebase'

export default function ExibeOferta({key, marca,img, modelo, data}){
    const [urlImagem, setUrlImagem] = useState();
    
    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url));
    }, [urlImagem]);
    
    return(
        <Grid 
        spacing={1}
        style={{ marginTop: 80 }}
        container 
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
        > 
                <Grid item sm={3}>
                    <Card>
                        <CardActionArea>
                                <CardMedia
                                component="img"
                                image={urlImagem}
                                title="Onix Joy"        
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                {marca}, {modelo}
                                    </Typography>
                                    <Typography  variant="body2" color="textSecondary" component="p">
                                        {data}
                                    </Typography>
                                    
                                </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
         
        
            </Grid>
            
    )
}