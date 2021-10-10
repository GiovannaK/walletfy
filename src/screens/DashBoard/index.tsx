import React from 'react'
import { Text, View } from 'react-native'
import { CardDashboard } from '../../components/CardDashboard'
import { ChartComponent } from '../../components/ChartsComponent'
import { Header } from '../../components/Header'
import { TopBar } from '../../components/TopBar'
import { styles } from './styles'

export const DashBoard = ({navigation, route}: any) => {
  return (
    <View style={styles.container}>
      <Header />
      <TopBar route={route}/>
      <ChartComponent route={route}/>
    </View>
  )
}
