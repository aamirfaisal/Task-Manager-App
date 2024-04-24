import { View, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../../assets';
import { COLOR } from '../../enums/StyleGuide';
import { Button, Input, Label, Pressable } from '../../components';
import { styles } from './styles'
import { SCREEN } from '../../enums/AppEnums';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showErrorToast, showSuccessToast } from '../../utils/Toast';
import { isEmailValid, isStrongPassword } from '../../utils/Helper';

const Register = (props: any) => {
  const { navigation } = props
  const [registerForm, setRegisterForm] = useState<any>({})

  const handleFormChange = (key: any, value: any) => {
    setRegisterForm({ ...registerForm, [key]: value })
  }

  const registerUser = async () => {
    const { email, password, confirm } = registerForm
    if (isEmailValid(email) && isStrongPassword(password) && confirm == password) {
      try {
        await AsyncStorage.setItem('user_email', email)
        await AsyncStorage.setItem('user_password', password)
        console.log(email, password)
        showSuccessToast('Registration successful')
        navigation.navigate(SCREEN.LOGIN)
      } catch (error) {
        console.error('Error storing data:', error)
        showErrorToast('Registration failed')
      }
    } else {
      if (!email || !password || !confirm) {
        showErrorToast('Please fill all fields')
      } else if (!isEmailValid(email)) {
        showErrorToast('Please enter a valid email')
      } else if (password !== confirm) {
        showErrorToast('Passwords do not match')
      } else if (!isStrongPassword(password)) {
        showErrorToast('Password must be at least 6 characters with one uppercase, one digit, and one special character')
      }
    }

  }

  return (
    <ImageBackground source={IMAGES.authBackground} style={styles.backgroundImage}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Label style={styles.HeaderLabel}>Tasky</Label>

        <View style={styles.inputContainer}>
          <Input placeholder={'Enter email'}
            style={{ borderColor: registerForm.emailFocus ? COLOR.primary : COLOR.gray }}
            placeholderColor={registerForm.emailFocus ? COLOR.primary : COLOR.gray}
            keyboardType='email-address'
            onFocus={() => handleFormChange('emailFocus', true)}
            onBlur={() => handleFormChange('emailFocus', false)}
            value={registerForm.email}
            onChange={(x: any) => handleFormChange('email', x)}
          />

          <Input placeholder={'Enter Password'}
            style={{ borderColor: registerForm.passwordFocus ? COLOR.primary : COLOR.gray }}
            placeholderColor={registerForm.passwordFocus ? COLOR.primary : COLOR.gray}
            onFocus={() => handleFormChange('passwordFocus', true)}
            onBlur={() => handleFormChange('passwordFocus', false)}
            secureText={true}
            value={registerForm.password}
            onChange={(x: any) => handleFormChange('password', x)}
          />

          <Input placeholder={'Confirm Password'}
            style={{ borderColor: registerForm.confirmFocus ? COLOR.primary : COLOR.gray }}
            placeholderColor={registerForm.confirmFocus ? COLOR.primary : COLOR.gray}
            onFocus={() => handleFormChange('confirmFocus', true)}
            onBlur={() => handleFormChange('confirmFocus', false)}
            secureText={true}
            value={registerForm.confirm}
            onChange={(x: any) => handleFormChange('confirm', x)}
          />

        </View>

        <Button
          title='Register'
          onPress={() => registerUser()}
          style={styles.loginButton} />

        <View style={styles.bottomContainer}>
          <Label style={styles.accountLabel}>Already have an account?</Label>
          <Pressable onPress={() => navigation.navigate(SCREEN.LOGIN)}>
            <Label style={styles.registerLabel}>{' '}Login</Label>
          </Pressable>
        </View>

      </ScrollView>
    </ImageBackground>
  )
}

export default Register
