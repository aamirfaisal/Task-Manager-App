import { Dimensions, StyleSheet } from 'react-native'

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height

export const ACTIVE_OPACITY = 0.8
export const BACKDROP_OPACITY = 0.2

export const COLOR = {
    primary: '#9747FF',
    white: '#ffffff',
    dark: '#000000',
    lightGray: '#FAFAFA',
    light:'#EEEEEE',
    gray: '#BCBCBC',
    red: '#FF0000',
    gray_3: '#D9D9D9',
    black_5: '#000000aa',
    purple_5: 'rgba(151, 71, 255, 0.5)'
}

export const FONT = {
    regular: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    semiBold: 'Poppins-SemiBold',
    medium: 'Poppins-Medium',
}

export const TEXT_STYLE = StyleSheet.create({
    smallTitleMedium: {
        fontFamily: FONT.medium,
        fontSize: 20,
    },
    largeTitleSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 28,
    },
    bigText: {
        fontFamily: FONT.regular,
        fontSize: 18,
    },
    bigTextSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 18,
    },
    bigTextMedium: {
        fontFamily: FONT.medium,
        fontSize: 18,
    },
    bigTextBold: {
        fontFamily: FONT.bold,
        fontSize: 18,
    },
    bigTextBold_2: {
        fontFamily: FONT.bold,
        fontSize: 15,
    },
    bigTextMedium_2: {
        fontFamily: FONT.medium,
        fontSize: 15,
    },
    bigText_2: {
        fontFamily: FONT.regular,
        fontSize: 15,
    },
    text: {
        fontFamily: FONT.regular,
        fontSize: 13,
    },
    textSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 13,
    },
    textMedium: {
        fontFamily: FONT.medium,
        fontSize: 13,
    },
    textBold: {
        fontFamily: FONT.bold,
        fontSize: 13,
    },
    smallText: {
        fontFamily: FONT.regular,
        fontSize: 12,
    },
    smallTextSemiBold: {
        fontFamily: FONT.semiBold,
        fontSize: 12,
    },
    smallTextMedium: {
        fontFamily: FONT.medium,
        fontSize: 12,
    },
    smallTextBold: {
        fontFamily: FONT.bold,
        fontSize: 12,
    },
})

export const commonStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    horizontalView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontalView_m05: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '1%',
    },
    horizontalView_m1: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '1.5%',
    },
    justifyView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    justifyView_m05: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '.5%',
    },
    justifyView_m1: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '1%',
    },
    justifyView_m2: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2.5%',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
}) 
