import React, { ReactNode } from 'react';
import { TextStyle, ViewStyle, KeyboardTypeOptions } from "react-native"

export interface textProps {
    children: React.ReactNode
    style?: any
}

export interface inputProps {
    placeholder: any,
    keyboardType?: KeyboardTypeOptions
    onChange?: Function
    value?: any
    addLeft?: ReactNode
    addRight?: ReactNode
    style?: ViewStyle
    secureText?: boolean
    onFocus?: () => void,
    onBlur?: () => void,
    textStyle?: TextStyle
    placeholderColor?: string
    multiline?: boolean
    onRightPress?: () => void
    onSubmitEditing?: () => void
    textAlignVertical?: any
}

export interface buttonProps {
    title: string
    style?: ViewStyle
    onPress?: () => void
    activeOpacity?: number
    disabled?: boolean
    textStyle?: Text
}

export interface pressable {
    children: React.ReactNode
    style?: any
    onPress?: () => void
    opacity?: number
}

export interface scrollProps {
    children?: React.ReactNode
    hasInput?: ReactNode
    horizontal?: boolean
    containerStyle?: ViewStyle
}

export interface headerProps {
    title: string
    onRightPress?: () => void
    isBack?: ReactNode
    isRight?: ReactNode
}

export interface model {
    visible: boolean
    onRequestClose: () => void
    onClosePress: () => void
    titleValue: any
    onTitleChange: Function
    descValue: any
    onDescChange: Function
    onSavePress: () => void
}

export interface deleteModel {
    visible: boolean
    onRequestClose: () => void
    onCancelPress: () => void
    onConfirmPress: () => void
}