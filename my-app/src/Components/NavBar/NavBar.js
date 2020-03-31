import React from 'react';
import '../NavBar/navbar.css';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';

export default function NavBar(){

    const dispatch = useDispatch();

    return(
        <nav className="navbar navbar-expand-lg">
                <i class="far fas fa-mug-hot text-white fa-2x"></i>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link ml-2" to="/">Home</Link></li> 

                    {           
                        useSelector(state => state.usuarioLogado) > 0 ?                  
                    <>                        
                        <li className="nav-item"><Link className="nav-link" to="/novo-veiculo">Cadastrar Veículo</Link></li> 
                        <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})   }>Sair</Link></li> 
                    </>
                    :
                    <>
                    <li className="nav-item "><Link className="nav-link" to="/new-user">Cadastrar</Link></li> 
                    <li className="nav-item "><Link className="nav-link" to="/login">Login</Link></li> 
                    </>
                    }
                    
                </ul>
            </div>
        </nav>
    
    )
}