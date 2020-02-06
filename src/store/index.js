import { combineReducers } from 'redux'
import { modeloReducer } from '../store/modeloReducer'
const mainReducer = combineReducers({
    tabela: modeloReducer
})

export default mainReducer