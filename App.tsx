import React from 'react';
import { Login } from './src/screens/Login';
import {StatusBar} from 'react-native'
import { DashBoard } from './src/screens/DashBoard';
import { NewExpense } from './src/screens/NewExpense';
import { NewEarning } from './src/screens/NewEarning';
import { UpdateExpense } from './src/screens/UpdateExpense';
import { UpdateEarning } from './src/screens/UpdateEarning';
import { Expenses } from './src/screens/Expenses';
import { Earnings } from './src/screens/Earnings';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Earnings />
    </>
  );
}

