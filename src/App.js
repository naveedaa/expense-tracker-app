import React from 'react';
import './App.css';

//import Global Provider
import { GlobalProvider } from './context/GlobalState' 

// import components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountData } from './components/AccountData';
// import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionData } from './components/TransactionData'
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountData />
        <TransactionData />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
