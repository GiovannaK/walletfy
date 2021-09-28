import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import {styles} from './styles';
import Expense from '../../../assets/expense.png';
import Earning from '../../../assets/earning.png';
import Report from '../../../assets/report.png';



export const Category = () => {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <Image
          source={Expense}
          style={styles.image}
          resizeMode="stretch"
        />
        <Text style={styles.text}>Gastos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <Image
          source={Earning}
          style={styles.image}
          resizeMode="stretch"
        />
        <Text style={styles.text}>Ganhos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <Image
          source={Report}
          style={styles.image}
          resizeMode="stretch"
        />
        <Text style={styles.text}>Relatórios</Text>
      </TouchableOpacity>
    </View>
  )
}