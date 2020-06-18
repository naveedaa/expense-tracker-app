import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState' 
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountData } from './components/AccountData';
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
