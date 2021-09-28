import React from 'react'
import { Text, View } from 'react-native'
import { ChartComponent } from '../../components/ChartsComponent'
import { Header } from '../../components/Header'
import { TopBar } from '../../components/TopBar'
import { styles } from './styles'

export const DashBoard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopBar />
      <ChartComponent />
    </View>
  )
}
