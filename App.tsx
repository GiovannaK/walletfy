import React from 'react';
import { Login } from './src/screens/Login';
import {StatusBar} from 'react-native'
import { DashBoard } from './src/screens/DashBoard';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <DashBoard />
    </>
  );
}

