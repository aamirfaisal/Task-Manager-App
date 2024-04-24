import { Image, Modal, StyleSheet, TextInput, View } from "react-native";
import React from 'react'
import { IMAGES } from "../../assets";
import Pressable from "../reuseables/Pressable";
import Label from "../reuseables/Label";
import { model } from "../../enums/Types";
import { COLOR, FONT } from "../../enums/StyleGuide";
import Button from "../reuseables/Button";

const AddInfoModal = (props: model) => {
    const { visible, onRequestClose, onClosePress, titleValue, onTitleChange, descValue, onDescChange, onSavePress } = props
    return (
        <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={onRequestClose} >
            <View style={styles.ModalInner}>
                <View style={styles.ModalServicesContainerStyling}>
                    <Pressable onPress={onClosePress}>
                        <Image source={IMAGES.circleCross} resizeMode='contain' style={styles.CrossIconStyling} />
                    </Pressable>
                    <Label style={styles.ModalTextStyling}>Title</Label>
                    <View style={styles.ModalTextInputSectionStyling}>
                        <TextInput
                            placeholder='Title Name'
                            placeholderTextColor={COLOR.gray}
                            value={titleValue}
                            onChangeText={x => onTitleChange && onTitleChange(x)}
                            style={styles.ModalTitleTextInputStyling} />
                    </View>
                    <Label style={styles.ModalTextStyling}>Description</Label>
                    <View style={styles.ModalDescriptionTextInputStyling}>
                        <TextInput
                            placeholder='Description'
                            placeholderTextColor={COLOR.gray}
                            multiline={true}
                            numberOfLines={5}
                            value={descValue}
                            onChangeText={x => onDescChange && onDescChange(x)}
                            style={styles.ModalTextInputStyling}
                        />
                    </View>

                    <Button title="Save" style={styles.savebutton} onPress={onSavePress} />

                </View>
            </View>
        </Modal >
    )
}

export default AddInfoModal

const styles = StyleSheet.create({
    ModalInner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLOR.black_5
    },
    ModalServicesContainerStyling: {
        width: '90%',
        backgroundColor: 'white',
        paddingVertical: '3%',
        alignSelf: 'center',
        borderRadius: 12
    },
    CrossIconStyling: {
        height: 20,
        width: 20,
        alignSelf: 'flex-end',
        marginRight: '3%'
    },
    ModalTextInputSectionStyling: {
        width: '90%',
        backgroundColor: COLOR.lightGray,
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: '3%'
    },
    ModalTextStyling: {
        fontSize: 18,
        color: COLOR.primary,
        fontFamily: FONT.medium,
        paddingLeft: '5%',
        marginTop: '5%'
    },
    ModalTextInputStyling: {
        color: 'black',
        fontSize: 16,
        marginLeft: '3%',
        textAlignVertical: 'top'
    },
    ModalTitleTextInputStyling: {
        color: 'black',
        fontSize: 16,
        marginLeft: '3%',
    },
    ModalDescriptionTextInputStyling: {
        height: 158,
        width: '90%',
        backgroundColor: COLOR.lightGray,
        borderRadius: 12,
        marginTop: '3%',
        alignSelf: 'center',
    },
    savebutton: {
        marginTop: '5%'
    }
})