import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';






const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                
                   <Grid container>
                       
                        <Typography variant="h6" color="inherit">
                            toolbar
                        </Typography>
                   
                   
                        <Button   className="btn-admin" variant="contained" color="primary">
                            <Link   to="home"  href="/Admin"    color="inherit">
                                 Administração
                            </Link>
                            
                         </Button>
           
                        <Button  className="btn-ofer" variant="contained" color="primary">
                            Ofertas
                         </Button>
                    </Grid>
            </Toolbar>
        </AppBar>
        </div>
    );
}
export default NavBar;