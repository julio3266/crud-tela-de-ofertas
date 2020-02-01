import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormCadastro from './components/FormCadastro'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/FormCadastro" component={FormCadastro}  />
            <Route exact path="/Admin"  />
        </Switch>
    </BrowserRouter>
)

export default Routes;