import React, {useState} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FormHeader } from '../../components/formHeader';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns'
import {Picker} from '@react-native-picker/picker';
import { categories } from '../../utils/categories';

export const NewExpense = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateInput, setDateInput] = useState('')
  const [category, setCategory] = useState()
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
        <Text style={styles.category}>Selecione uma categoria</Text>
        <Picker
          style={styles.select}
          selectedValue={category}
          onValueChange={(itemValue) =>
            setCategory(itemValue)
          }>
          {
            categories.map((cat) => {
              return <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
            })
          }
        </Picker>
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
