import React from 'react';
import { Login } from './src/screens/Login';
import {StatusBar} from 'react-native'
import { DashBoard } from './src/screens/DashBoard';
import { NewExpense } from './src/screens/NewExpense';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NewExpense />
    </>
  );
}

