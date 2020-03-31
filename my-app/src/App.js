import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from '../src/store/';
import { Provider } from 'react-redux';


/*PAGES*/
import CadastroUser from './view/new-user/CadastroUser';
import Login from './view/login/Login';
import Home from './view/home/Home';
import RecoverPassword from './view/RecallSenha/RecoverPassword';
import CadastroVeiculo from './view/CadastroVeiculo/CadastroVeiculo';
import VeiculoDetalhes from './view/DetalhesVeiculo/VeiculoDetalhes';



function App() {
  return (
    <>
      <Provider store={store}>
          <Router>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/admin/:parametro' component={Home} />
              <Route exact path='/veiculodetalhes/:id' component={VeiculoDetalhes} />
              <Route exact path='/new-user' component={CadastroUser} />
              <Route exact path='/recuperar-senha' component={RecoverPassword} />
              <Route exact path='/novo-veiculo' component={CadastroVeiculo} />
          </Router>
          
      </Provider>
    </>
    
  );
}

export default App;
