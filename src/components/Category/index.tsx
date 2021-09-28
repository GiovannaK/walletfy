import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import {styles} from './styles';
import Expense from '../../../assets/expense.png';
import Earning from '../../../assets/earning.png';
import Report from '../../../assets/report.png';



export const Category = () => {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.card}>
        <Image
          source={Expense}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.card}>
        <Image
          source={Earning}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.card}>
        <Image
          source={Report}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
    </View>
  )
}