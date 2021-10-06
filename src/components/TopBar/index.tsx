import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { categories } from '../../utils/categories';
import { Category } from '../Category';
import {styles} from './styles';

type Props = {
  route: any
}

export const TopBar = ({route}: Props) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
    >
      <Category route={route}/>
    </ScrollView>
  )
}
