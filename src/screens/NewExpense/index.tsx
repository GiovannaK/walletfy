import React, {useState} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FormHeader } from '../../components/formHeader';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns'
import Checkbox from 'expo-checkbox';
import { theme } from '../../global/styles/theme';
import {Controller, useForm} from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AMOUNT_REGEX, DATE_REGEX } from '../../utils/regex';

type ExpensesType = {
  title: string,
  date: string,
  amount: string,
  isMonthly: boolean
}

export const NewExpense = () => {
  const {handleSubmit, control,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur'})

  const onSubmit = (data: ExpensesType) => {
    console.log(data)
  }

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <FormHeader title="Novo Gasto"/>
        <View style={styles.form}>
          <Controller
            control={control}
            name="title"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={styles.input}
                placeholder="Título"
                placeholderTextColor={theme.colors.primary}
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Título não pode estar vazio'
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
                message: 'Valor não pode estar vazio'
              },
              pattern: {
                value: AMOUNT_REGEX,
                message: 'Valor inválido'
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
                  message: 'Data não pode estar vazia'
                },
                pattern: {
                  value: DATE_REGEX,
                  message: 'Data inválida'
                }
              }}
            />
          </View>
          <Text style={styles.error}>{errors.date?.message}</Text>
          <View style={styles.checkWrapper}>
            <Text style={styles.checkLabel}>Gasto Mensal</Text>
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
