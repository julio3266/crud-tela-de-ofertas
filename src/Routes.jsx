import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Cadastro from './Pages/Cadastro'

class Routes extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Cadastro' component={Cadastro} />
                    <Route exact path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routes