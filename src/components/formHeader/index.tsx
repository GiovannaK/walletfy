import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles';
import horizontalLogo from '../../../assets/horizontal_logo.png';

type Props = {
  title: string;
}

export const FormHeader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={horizontalLogo}
        style={styles.image}
        resizeMode="stretch"
      />
    </View>
  )
}
