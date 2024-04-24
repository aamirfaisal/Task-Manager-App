import { Image, StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import Label from '../reuseables/Label'
import { COLOR, FONT, commonStyles } from '../../enums/StyleGuide'
import { headerProps } from '../../enums/Types'
import Pressable from '../reuseables/Pressable'
import { IMAGES } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const Header = (props: headerProps) => {
    const { title, onRightPress, isBack, isRight } = props
    const navigation = useNavigation()
    return (
        <View style={styles.HeaderContainer}>
            {isBack ?
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={IMAGES.Back} style={styles.backIcon} />
                </Pressable>
                : null}
            <Label style={styles.HeaderLabel}>{title}</Label>
            {isRight ?
                <Pressable onPress={onRightPress}>
                    <Image source={IMAGES.logout} style={styles.logoutIcon} />
                </Pressable>
                : <View style={{ width: '5%' }} />}
        </View >
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    HeaderContainer: {
        ...commonStyles.justifyView,
        marginTop: '5%',
        width: '92%',
        alignSelf: 'center',
        paddingHorizontal: '2%'
    },
    HeaderLabel: {
        fontFamily: FONT.semiBold,
        color: COLOR.dark,
        fontSize: 16
    },
    logoutIcon: {
        height: 30,
        width: 30
    },
    backIcon: {
        height: 20,
        width: 20
    }
})