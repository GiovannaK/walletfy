import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Header } from '../../components/Header'
import { styles } from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Card } from '../../components/Card';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/core';
import firebase from '../../config/firebaseConfig';

export const Expenses = () => {
  const database = firebase.firestore();
  const navigation = useNavigation();
  const route = useRoute()
  const userId = route.params?.idUser
  const [expenses, setExpenses] = useState<any[]>([])

  const q = database.collection('Expense').where('userId', '==', userId)
  console.log(userId)

  useEffect(() => {
    q.onSnapshot((query) => {
      const list = [] as any[]
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id})
      })
      setExpenses(list)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleSection}>
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
      <FlatList
        keyExtractor={(index: any, item: any) => item.id}
        data={expenses}
        renderItem={({item}) => <Card color={theme.colors.expenses}
          item={item} key={item.id}
        />}
      />
      {route.params && (
        <TouchableOpacity style={styles.delete} onPress={() => navigation.navigate("NewExpense" as never, {idUser: route.params} as never)}>
          <FontAwesome name="plus" style={styles.iconButton} size={40}/>
        </TouchableOpacity>
      )}
    </View>
  )
}
