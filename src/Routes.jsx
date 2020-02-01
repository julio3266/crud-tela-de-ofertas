import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'
import NavBar from './components/NavBar'
import TableList from './components/TableList'
import Table from './components/Table'
import { Link } from '@material-ui/core'

export default props => (
    <Router history={hashHistory}>
        <Route path='/form-cadastro' component={Link} />
        <Route path='/Home' component={Adm} />
        <Redirect from='*' to='/Home' />
    </Router>
)

