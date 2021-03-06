import React, { useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { FormHeader } from '../../components/formHeader';
import { styles } from './styles';
import firebase from '../../config/firebaseConfig';
import { parse } from 'date-fns'
import Checkbox from 'expo-checkbox';
import { theme } from '../../global/styles/theme';
import {Controller, useForm} from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AMOUNT_REGEX, DATE_REGEX } from '../../utils/regex';
import moment from 'moment';
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';

type ExpensesType = {
  title: string,
  date: string,
  amount: string,
  isMonthly: boolean,
  userId: string | undefined,
  month: number,
  year: number,
  key: number
}

export const NewEarning = () => {
  const database = firebase.firestore();
  const route = useRoute()
  const navigation = useNavigation();

  const {handleSubmit, control,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur'})

  const onSubmit = (data: ExpensesType) => {
    const getMonth = moment(data.date, 'DD/MM/YYYY').format('M')
    const getYear = Number(moment(data.date, 'DD/MM/YYYY').format('Y'))
    const removeZeroBeforeNumber = parseInt(getMonth, 10)
    const formattedDate = parse(data.date, 'dd/MM/yyyy', new Date())
    database.collection('Earning').add({
      title: data.title,
      amount: Number(data.amount),
      date: formattedDate,
      isMonthly: data.isMonthly || false,
      userId: route.params?.idUser.idUser,
      month: removeZeroBeforeNumber,
      key: removeZeroBeforeNumber,
      year: getYear,
    })
    navigation.navigate("Earnings" as never, {idUser: route.params?.idUser.idUser})
      ToastAndroid.show('Ganho adicionado com sucesso!',
      ToastAndroid.SHORT
    );
  }

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <FormHeader title="Novo Ganho"/>
        <View style={styles.form}>
          <Controller
            control={control}
            name="title"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={styles.input}
                placeholder="T??tulo"
                placeholderTextColor={theme.colors.primary}
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'T??tulo n??o pode estar vazio'
              },
            }}
          />
          <Text style={styles.error}>{errors.title?.message}</Text>
          <Controller
            control={control}
            name="amount"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Valor: Ex 300.00"
                placeholderTextColor={theme.colors.primary}
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Valor n??o pode estar vazio'
              },
              pattern: {
                value: AMOUNT_REGEX,
                message: 'Valor inv??lido'
              }
            }}
          />
          <Text style={styles.error}>{errors.amount?.message}</Text>
          <View style={styles.dateContainer}>
            <Controller
              control={control}
              name="date"
              render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Data: DD/MM/YYYY"
                  placeholderTextColor={theme.colors.primary}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: 'Data n??o pode estar vazia'
                },
                pattern: {
                  value: DATE_REGEX,
                  message: 'Data inv??lida'
                }
              }}
            />
          </View>
          <Text style={styles.error}>{errors.date?.message}</Text>
          <View style={styles.checkWrapper}>
            <Text style={styles.checkLabel}>Ganho Mensal</Text>
            <Controller
            control={control}
            name="isMonthly"
            render={({field: {onChange, value}}) => (
              <Checkbox
                style={styles.checkbox}
                value={value}
                onValueChange={value => onChange(value)}
                color={theme.colors.primary}
              />
            )}
          />
          </View>
          <Text style={styles.error}>{errors.isMonthly?.message}</Text>
          <TouchableOpacity
            style={styles.saveButton}
            activeOpacity={0.7}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
