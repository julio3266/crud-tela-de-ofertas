import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Cadastro from './Pages/Cadastro'
import Ofertas from './Pages/Ofertas'
import UserCadastro from './Pages/UserCadastro'
import store from '../src/Store/'
import { Provider } from 'react-redux'
import Admin from './Pages/Admin';
class Routes extends Component {
    render(){
        return (         
                <Switch>
                    <Provider store={store}>
                        <Route exact exact path='/' component={Home} />
                        <Route exact path='/Admin' component={Admin}/>
                        <Route exact path='/UserCadastro' component={UserCadastro} />
                        <Route exact path='/Cadastro' component={Cadastro} />
                        <Route exact path='/ofertas' component={Ofertas} />
                    </Provider>
                </Switch>     
        )
    }
}
export default Routes