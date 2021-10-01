import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { DashBoard } from '../screens/DashBoard';
import { Earnings } from '../screens/Earnings';
import { Expenses } from '../screens/Expenses';
import { Login } from '../screens/Login';
import { NewEarning } from '../screens/NewEarning';
import { NewExpense } from '../screens/NewExpense';
import { UpdateEarning } from '../screens/UpdateEarning';
import { UpdateExpense } from '../screens/UpdateExpense';


export type AppRouteType = {
  Login: undefined,
  Dashboard: undefined,
  Expenses: undefined,
  Earnings: undefined,
  NewEarning: undefined,
  NewExpense: undefined,
  UpdateEarning: undefined,
  UpdateExpense: undefined
}

const stack = createStackNavigator<AppRouteType>();

export const AppRoutes = () => {
  return (
    <stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Dashboard" component={DashBoard} />
      <stack.Screen name="Expenses" component={Expenses} />
      <stack.Screen name="Earnings" component={Earnings} />
      <stack.Screen name="NewEarning" component={NewEarning} />
      <stack.Screen name="NewExpense" component={NewExpense} />
      <stack.Screen name="UpdateEarning" component={UpdateEarning} />
      <stack.Screen name="UpdateExpense" component={UpdateExpense} />
    </stack.Navigator>
  )
}