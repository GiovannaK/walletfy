import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import {styles} from './styles';
import Expense from '../../../assets/expense.png';
import Earning from '../../../assets/earning.png';
import Report from '../../../assets/report.png';
import { useNavigation } from '@react-navigation/native';

type Props = {
  route: any
}

export const Category = ({route}: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.container}
    >
      {route.params.idUser && (
        <>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Expenses" as never, {idUser: route.params.idUser} as never)}
        >
        <Image
          source={Expense}
          style={styles.image}
          resizeMode="stretch"
        />
        <Text style={styles.text}>Gastos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Earnings" as never, {idUser: route.params.idUser} as never)}
        >
          <Image
            source={Earning}
            style={styles.image}
            resizeMode="stretch"
          />
          <Text style={styles.text}>Ganhos</Text>
        </TouchableOpacity>
        </>
      )}
    </View>
  )
}