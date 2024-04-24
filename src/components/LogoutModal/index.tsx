import { Modal, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLOR, FONT, TEXT_STYLE, commonStyles } from '../../enums/StyleGuide'
import { deleteModel } from '../../enums/Types'
import Pressable from '../reuseables/Pressable'
import Label from '../reuseables/Label'

const LogoutModal = (props: deleteModel) => {
    const { visible, onRequestClose, onCancelPress, onConfirmPress } = props
    return (
        <Modal visible={visible} onRequestClose={onRequestClose} transparent={true} >
            <View style={styles.ModalContainer}>
                <View style={styles.ModalChildContainer}>
                    <Label style={styles.DeleteLabel}>Logout</Label>
                    <View style={styles.Border} />
                    <Label style={styles.AttemptDelete}>Are you sure you want to logout?</Label>
                    <View style={styles.BtnContainer}>
                        <Pressable style={[styles.ButtonContainer, { backgroundColor: COLOR.gray }]} onPress={onCancelPress}>
                            <Label style={styles.ButtonText}>Cancel</Label>
                        </Pressable>
                        <Pressable style={styles.ButtonContainer} onPress={onConfirmPress}>
                            <Label style={styles.ButtonText}>Logout</Label>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default LogoutModal

const styles = StyleSheet.create({
    ModalContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.black_5,
    },
    ModalChildContainer: {
        width: '90%',
        backgroundColor: COLOR.white,
        borderRadius: 20,
        paddingVertical: '5%'
    },
    DeleteLabel: {
        color: COLOR.primary,
        ...TEXT_STYLE.bigTextSemiBold,
        textAlign: 'center',
        paddingBottom: '4%'
    },
    AttemptDelete: {
        fontFamily: FONT.regular,
        fontSize: 14,
        fontWeight: '400',
        paddingTop: '4%',
        textAlign: 'center',
        color: COLOR.black_5
    },
    Border: {
        height: 1,
        backgroundColor: '#EEE',
        width: '90%',
        alignSelf: 'center'
    },
    BtnContainer: {
        ...commonStyles.justifyView,
        marginHorizontal: '7%',
        marginTop: '8%'
    },
    ButtonContainer: {
        height: 42,
        width: '45%',
        alignSelf: 'center',
        backgroundColor: COLOR.primary,
        ...commonStyles.center,
        borderRadius: 12,
    },
    ButtonText: {
        ...TEXT_STYLE.bigTextMedium_2,
        color: COLOR.white,
    },
})