import React, {useState} from 'react'
import { Text, View, TextInput, Platform, TouchableOpacity } from 'react-native'
import { FormHeader } from '../../components/formHeader';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns'


export const NewExpense = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateInput, setDateInput] = useState('')
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const formattedDate = format(date, 'dd/MM/yyyy')
    setDateInput(formattedDate)
    hideDatePicker();
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
        <View style={styles.dateContainer}>
          <TextInput
            style={styles.inputDate}
            placeholder="Data - DD/MM/YYYY"
            placeholderTextColor="#989898"
            value={dateInput}
          />
          <TouchableOpacity style={styles.iconWrapper} onPress={showDatePicker}>
            <FontAwesome name="calendar" size={40} style={styles.icon}/>
          </TouchableOpacity>
        </View>
      </View>
      <DateTimePickerModal
        onConfirm={handleConfirm}
        isVisible={isDatePickerVisible}
        mode="date"
        onCancel={hideDatePicker}
      />
    </View>
  )
}
