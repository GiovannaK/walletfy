import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  color: string
}

export const Card = ({color}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>Gasto 1</Text>
          <Text style={styles.date}>20/04/2020</Text>
          <Text style={{
            color: color,
            fontSize: 18,
            fontWeight: 'bold'
          }}>R$ 200</Text>
          <Text style={styles.category}>Categoria</Text>
          <Text style={styles.month}>Mensal</Text>
          <FontAwesome name="edit" size={40} style={styles.icon}/>
        </View>
      </View>
    </View>
  )
}
