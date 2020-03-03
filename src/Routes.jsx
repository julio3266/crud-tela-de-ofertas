import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Cadastro from './Pages/Cadastro'
import Login from './Pages/Login'
import Ofertas from './Pages/Ofertas'
import UserCadastro from './Pages/UserCadastro'
class Routes extends Component {
    render(){
        return (         
                <Switch>
                    <Route  path='/login' component={Login} />
                    <Route  path='/UserCadastro' component={UserCadastro} />
                    <Route  exact path='/' component={Home} />
                    <Route  path='/Cadastro' component={Cadastro} />
                    <Route  path='/ofertas' component={Ofertas} />
                    <Route  path='*' component={NotFound} />
                </Switch>     
        )
    }
}
export default Routes