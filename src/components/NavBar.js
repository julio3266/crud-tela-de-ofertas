import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


class NavBar extends Component {
    render(){
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            CRUD
                        </Typography>
                        <Button color="inherit" >
                            <Link style={{ textDecoration: 'none' }} to="/">Admin</Link>
                        </Button>
                        <Button  color="inherit">Ofertas</Button>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default NavBar