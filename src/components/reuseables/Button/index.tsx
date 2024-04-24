import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { memo } from 'react'
import { ACTIVE_OPACITY, COLOR, TEXT_STYLE, commonStyles } from '../../../enums/StyleGuide'
import { buttonProps } from '../../../enums/Types'

const Button = (props: buttonProps) => {
    const { style, onPress, disabled, activeOpacity = ACTIVE_OPACITY, title, textStyle } = props
    return (
        <TouchableOpacity style={[styles.ButtonContainer, style]} onPress={onPress} activeOpacity={activeOpacity} disabled={disabled}>
            <Text style={[styles.ButtonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default memo(Button)

const styles = StyleSheet.create({
    ButtonContainer: {
        height: 55,
        width: '92%',
        alignSelf: 'center',
        backgroundColor: COLOR.primary,
        ...commonStyles.center,
        borderRadius: 12,
    },
    ButtonText: {
        ...TEXT_STYLE.bigTextBold_2,
        color: COLOR.white,
    },
})