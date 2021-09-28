import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { categories } from '../../utils/categories';
import { Category } from '../Category';
import {styles} from './styles';

export const TopBar = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 25}}
    >
      <Category />
    </ScrollView>
  )
}
