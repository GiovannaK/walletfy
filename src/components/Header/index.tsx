import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'
import horizontalLogo from '../../../assets/horizontal_logo.png';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>
        Olá, user
      </Text>
      <Image
        source={horizontalLogo}
        style={styles.image}
        resizeMode="stretch"
      />
    </View>
  )
}
