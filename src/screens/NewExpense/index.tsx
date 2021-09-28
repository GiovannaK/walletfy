import React, {useState} from 'react'
import { Text, View, TextInput, Platform } from 'react-native'
import { FormHeader } from '../../components/formHeader';
import { styles } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

export const NewExpense = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>
      <FormHeader title="Novo Gasto"/>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título..."
          placeholderTextColor="#989898"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Valor - EX: 300.00"
          placeholderTextColor="#989898"
        />
        <TextInput
          style={styles.inputDate}
          keyboardType="numeric"
          placeholder="Data - DD/MM/YYYY"
          placeholderTextColor="#989898"

        />
      </View>
    </View>
  )
}
