import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



class NavBar extends Component {
    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            CRUD
                        </Typography>
                        <Button to='/' color="inherit">Admin</Button>
                        <Button  color="inherit">Ofertas</Button>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default NavBar