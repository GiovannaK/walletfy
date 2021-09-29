import React from 'react';
import { Login } from './src/screens/Login';
import {StatusBar} from 'react-native'
import { DashBoard } from './src/screens/DashBoard';
import { NewExpense } from './src/screens/NewExpense';
import { NewEarning } from './src/screens/NewEarning';
import { UpdateExpense } from './src/screens/UpdateExpense';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <UpdateExpense />
    </>
  );
}

