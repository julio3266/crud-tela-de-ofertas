import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Cadastro from './Pages/Cadastro'
import NotFound from './Pages/NotFound'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cadastro' component={Cadastro} />
            <Route exact path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Routes;