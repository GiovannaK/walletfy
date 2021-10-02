import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import horizontalLogo from '../../../assets/horizontal_logo.png';
import LoginImage from '../../../assets/loginImage.svg';
import { FontAwesome } from '@expo/vector-icons';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={horizontalLogo}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.border}>
        <LoginImage style={styles.svg}/>
        <TouchableOpacity style={styles.googleBtn} activeOpacity={0.7}>
          <View>
            <FontAwesome style={styles.icon} name="google" size={40}/>
          </View>
          <Text style={styles.googleBtnText}>
            Login com Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
