import React from 'react'
import {Text, View} from 'react-native';
import { styles } from './styles';

export const CardDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleExpense}>Total de Gastos no ano atual</Text>
      <View style={styles.card}>
        <Text style={styles.amountExpense}>R$ 2000</Text>
      </View>
      <Text style={styles.titleEarning}>Hello</Text>
      <View style={styles.card}>
        <Text style={styles.amountEarning}>R$ 2000</Text>
      </View>
    </View>
  )
}
