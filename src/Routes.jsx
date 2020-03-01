import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Cadastro from './Pages/Cadastro'
import Login from './Pages/Login'
class Routes extends Component {
    render(){
        return (         
                <Switch>
                    <Route  exact path='/' component={Home} />
                    <Route exact path='/EditarProduto' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/Cadastro' component={Cadastro} />
                    <Route exact path='*' component={NotFound} />
                </Switch>     
        )
    }
}
export default Routes