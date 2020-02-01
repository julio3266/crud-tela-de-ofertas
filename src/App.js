import React, { Component } from 'react'
import NavBar from './components/NavBar'
import TableList from './components/TableList'
import Table from './components/Table'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <TableList />
        <Table />
      </div>
    )
  }
}
export default App