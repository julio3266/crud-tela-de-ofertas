import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import metodosTabela from '../app/metodosTabela'

export class consultaProdutos extends React.Component {
  state = {
    produtos : []
  }

  constructor() {
    super()
    this.product = new metodosTabela();
  }
  componentDidMount() {
    const produtos = this.product.getProdutos();
    this.setState({ produtos })
  }
  render(){
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>        
              <TableCell align="center">Modelo</TableCell>
              <TableCell align="center">Marca</TableCell>
              <TableCell align="center">Data de criação</TableCell>
              <TableCell align="center">Ações</TableCell>        
           </TableRow>
          </TableHead>
          <TableBody>     
              {
              this.state.produtos.map( produto =>
                {return(
                  <TableRow>        
                     <TableCell align="center">{produto.modelo}</TableCell>
                     <TableCell align="center">{produto.marca}</TableCell>
                     <TableCell align="center">{produto.data}</TableCell>
                     <TableCell align="center"></TableCell>  
                  </TableRow> 
                )}
              )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default consultaProdutos