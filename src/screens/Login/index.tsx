import { View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../../assets';
import { COLOR } from '../../enums/StyleGuide';
import { Button, Input, Label, Pressable, Scrollable } from '../../components';
import { styles } from './styles'
import { SCREEN } from '../../enums/AppEnums';
import { showErrorToast, showSuccessToast } from '../../utils/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmailValid } from '../../utils/Helper';

const Login = (props: any) => {
  const { navigation } = props
  const [loginForm, setLoginForm] = useState<any>({})

  const handleFormChange = (key: any, value: any) => {
    setLoginForm({ ...loginForm, [key]: value })
  }

  const loginUser = async () => {
    const storedEmail = await AsyncStorage.getItem('user_email')
    const storedPassword = await AsyncStorage.getItem('user_password')
    const { email, password } = loginForm
    if (email === storedEmail && password === storedPassword) {
      showSuccessToast('Login Successfully')
      handleFormChange('email', '')
      handleFormChange('password', '')
      navigation.navigate(SCREEN.HOME)
    } else {
      if (!email || !password) {
        showErrorToast('Please fill all fields')
      } else if (email !== storedEmail || password !== storedPassword) {
        showErrorToast('Invailid Email or Password')
      } else if (!isEmailValid(email)) {
        showErrorToast('Please enter a valid email')
      }
    }
  }
  return (
    <ImageBackground source={IMAGES.authBackground} style={styles.backgroundImage}>
      <Scrollable hasInput>

        <Label style={styles.HeaderLabel}>Tasky</Label>

        <View style={styles.inputContainer}>
          <Input placeholder={'Enter email'}
            style={{ borderColor: loginForm.emailFocus ? COLOR.primary : COLOR.gray }}
            placeholderColor={loginForm.emailFocus ? COLOR.primary : COLOR.gray}
            keyboardType='email-address'
            onFocus={() => handleFormChange('emailFocus', true)}
            onBlur={() => handleFormChange('emailFocus', false)}
            value={loginForm.email}
            onChange={(x: any) => handleFormChange('email', x)} />

          <Input placeholder={'Enter Password'}
            style={{ borderColor: loginForm.passwordFocus ? COLOR.primary : COLOR.gray }}
            placeholderColor={loginForm.passwordFocus ? COLOR.primary : COLOR.gray}
            onFocus={() => handleFormChange('passwordFocus', true)}
            onBlur={() => handleFormChange('passwordFocus', false)}
            secureText={true}
            value={loginForm.password}
            onChange={(x: any) => handleFormChange('password', x)} />

        </View>

        <Button title='Login'
          style={styles.loginButton}
          onPress={() => loginUser()} />

        <View style={styles.bottomContainer}>
          <Label style={styles.accountLabel}>Don’t have an account?</Label>
          <Pressable onPress={() => navigation.navigate(SCREEN.REGISTER)}>
            <Label style={styles.registerLabel}>{' '}Register</Label>
          </Pressable>
        </View>

      </Scrollable>
    </ImageBackground>
  )
}

export default Login
