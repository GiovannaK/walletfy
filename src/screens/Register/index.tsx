import React, {useEffect} from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { supabase } from '../../config/supabase';
import LoginImage from '../../../assets/loginImage.svg';
import horizontalLogo from '../../../assets/horizontal_logo.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from '../../global/styles/theme';
import { errorStyle } from '../../global/styles/error';
import {Controller, useForm} from 'react-hook-form'
import { EMAIL_REGEX } from '../../utils/regex';
import { useNavigation } from '@react-navigation/native';

type LoginTypes = {
  username: string,
  email: string,
  password: string,
}

export const Register = () => {
  const navigation = useNavigation();
  const {handleSubmit, control,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur'})

  const onSubmit = (data: LoginTypes) => console.log(data)

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
          <Controller
            control={control}
            name="username"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                placeholderTextColor={theme.colors.primary}
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Nome de usuário não pode estar vazio'
              },
              maxLength: {
                value: 200,
                message: 'Nome de usuário ter até 200 caracteres'
              }
            }}
          />
          <Text style={errorStyle.formError}>
            {errors.username?.message}
          </Text>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={theme.colors.primary}
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'E-mail não pode estar vazio'
              },
              pattern: {
                value: EMAIL_REGEX,
                message: 'E-mail inválido'
              }
            }}
          />
          <Text style={errorStyle.formError}>
            {errors.email?.message}
          </Text>
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                secureTextEntry
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={theme.colors.primary}
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Senha não pode estar vazia'
              },
              minLength: {
                value: 8,
                message: 'Senha deve ter pelo menos 8 caracteres'
              },
              maxLength: {
                value: 200,
                message: 'Senha deve ter até 200 caracteres'
              }
            }}
          />
          <Text style={errorStyle.formError}>
            {errors.password?.message}
          </Text>
          <TouchableOpacity style={styles.googleBtn}
            activeOpacity={0.7}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.googleBtnText}>
              Registrar-se
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => navigation.navigate("Login" as never)}
          >
            <Text style={styles.link}>
              Já tem uma conta?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
