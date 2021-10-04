import React from 'react'
import { Image, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import { styles } from './styles'
import horizontalLogo from '../../../assets/horizontal_logo.png';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../config/firebaseConfig';

export const Header = () => {
  const navigation = useNavigation();
  const logout = () => {
    firebase.auth().signOut().then(() => {
      navigation.navigate("Login" as never)
    }).catch((error) => {
        ToastAndroid.show('Erro inesperado, Não foi possível fazer o logout',
        ToastAndroid.SHORT
      );
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>{logout()}}
      >
        <Text style={styles.greetings}>Sair</Text>
      </TouchableOpacity>
      <Image
        source={horizontalLogo}
        style={styles.image}
        resizeMode="stretch"
      />
    </View>
  )
}
