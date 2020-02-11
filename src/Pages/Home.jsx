import React, {Component} from 'react'
import BuscarEAdd from '../components/BuscarEAdd'
import Tabela from '../components/Tabela'
class Home extends Component {
    render(){
        return(
            <>
                <BuscarEAdd />
                <Tabela />
            </>
        )
    }
}

export default Home