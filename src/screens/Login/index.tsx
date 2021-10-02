import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import { styles } from './styles'
import horizontalLogo from '../../../assets/horizontal_logo.png';
import LoginImage from '../../../assets/loginImage.svg';
import { supabase } from '../../config/supabase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from '../../global/styles/theme';
import { errorStyle } from '../../global/styles/error';

export const Login = () => {

  return (
    <KeyboardAwareScrollView>
      <View
        style={styles.container}
      >
        <Image
          source={horizontalLogo}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.border}>
          <LoginImage style={styles.svg}/>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={theme.colors.primary}
          />
          <Text style={errorStyle.formError}>E-mail Inválido</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={theme.colors.primary}

          />
          <TouchableOpacity style={styles.googleBtn} activeOpacity={0.7}>
            <Text style={styles.googleBtnText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.link}>
              Não tem uma conta?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
