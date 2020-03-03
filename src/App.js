import React, {Component} from 'react'
import NavBar from './components/NavBar'
import Routes from './Routes'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes />
        </div>
      </BrowserRouter>
    )
  }
}

export default App