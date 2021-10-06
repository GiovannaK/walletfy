import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns'
import moment from 'moment';

type Props = {
  color: string,
  item: any
}

export const Card = ({color, item}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{moment.unix(item.date.seconds).format('DD/MM/YYYY')}</Text>
          <Text style={{
            color: color,
            fontSize: 18,
            fontWeight: 'bold'
          }}>R$ {item.amount}</Text>
          {item.isMonthly && (
            <Text style={styles.month}>Mensal</Text>
          )}
          <TouchableOpacity onPress={() => navigation.navigate("UpdateExpense" as never)}>
            <FontAwesome name="edit" size={40} style={styles.icon}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
