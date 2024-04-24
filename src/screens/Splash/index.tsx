import { ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { IMAGES } from '../../assets'
import { COLOR, FONT, commonStyles } from '../../enums/StyleGuide'
import { Label } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SCREEN } from '../../enums/AppEnums'

const Splash = (props: any) => {
    const { navigation } = props

    useEffect(() => {
        setTimeout(() => {
            checkLoginStatus()
        }, 1500);
    }, [])

    const checkLoginStatus = async () => {
        try {
            const userEmail = await AsyncStorage.getItem('user_email')
            const userPassword = await AsyncStorage.getItem('user_password')
            if (userEmail && userPassword) {
                navigation.replace(SCREEN.HOME)
            } else {
                navigation.replace(SCREEN.LOGIN)
            }
        } catch (error) {
            console.error('Error checking login status:', error)
        }
    };
    return (
        <ImageBackground source={IMAGES.authBackground} style={styles.backgroundImage}>
            <Label style={styles.HeaderLabel}>Tasky</Label>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        ...commonStyles.center
    },
    HeaderLabel: {
        fontSize: 32,
        fontFamily: FONT.bold,
        color: COLOR.primary,
    }
})