const ACTIONS = {
    LISTAR: 'TABLE_LISTAR',
    ADD: 'TABLE_SALVAR',
    REMOVER: 'TABLE_REMOVER'
}
const ESTADO_INICIAL = {
    tabela: []
}
export const modeloReducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type) {
        case ACTIONS.LISTAR:
            return {...state, tarefas: action.tabela}
            default:
                return {state}
    }
}