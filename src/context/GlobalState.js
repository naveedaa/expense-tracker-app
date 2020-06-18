import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[]
}

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);

function removeTransaction(id){
    dispatch({
        type: 'REMOVE_TRANSACTION',
        payload:id
    })
}    
function Addtransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}    
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            removeTransaction,
            Addtransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )

}
