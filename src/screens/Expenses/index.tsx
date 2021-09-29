import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../../components/Header'
import { styles } from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Card } from '../../components/Card';
import { theme } from '../../global/styles/theme';

export const Expenses = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleSection}>
        <FontAwesome name="filter" size={50} style={styles.icon}/>
        <Text style={styles.title}>Meus Gastos</Text>
      </View>
      <View style={styles.panelContainer}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Mês Atual</Text>
          <Text style={styles.panelInfo}>R$ 2000,00</Text>
        </View>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Ano Atual</Text>
          <Text style={styles.panelInfo}>R$ 2000,00</Text>
        </View>
      </View>
      <Card color={theme.colors.expenses}/>
    </View>
  )
}
