import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles';
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import firebase from '../../config/firebaseConfig';
import {sum} from 'lodash';
import moment from 'moment';

type charts = {
  route: any
}

export const ChartComponent = ({route}: charts) => {
  const database = firebase.firestore();
  const screenWidth = Dimensions.get("window").width;
  const userId = route.params.idUser;
  const [expense, setExpense] = useState<any[]>([])
  const queryExpense = database.collection('Expense').where('userId', '==', userId).orderBy('month')


  useEffect(() => {
    queryExpense.onSnapshot((query) => {
      const list = [] as any[]
      query.forEach((doc) => {
        const getData = doc.data()
        list.push(getData)
      })
      setExpense(list)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ganhos - ano atual
      </Text>
      <LineChart
        data={{
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "jul", "ago", "set", "out", "nov", "dez"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ]
            }
          ]
        }}
        width={330} // from react-native
        height={170}
        yAxisLabel="R$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#00e257",
          backgroundGradientFrom: "#469237",
          backgroundGradientTo: "#348f8f",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
        />
        <Text style={styles.title}>
          Gastos - ano atual
        </Text>
        <LineChart
          data={{
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "jul", "ago", "set", "out", "nov", "dez"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ]
              }
            ]
          }}
          width={330} // from react-native
          height={170}
          yAxisLabel="R$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e20000",
            backgroundGradientFrom: "#b6212d",
            backgroundGradientTo: "#ff9a26",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
    </View>
  )
}
