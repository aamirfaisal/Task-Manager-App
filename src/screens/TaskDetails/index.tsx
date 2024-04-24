import { Image, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, commonStyles } from '../../enums/StyleGuide'
import { AddInfoModal, DeleteModal, Header, Label, Pressable, Scrollable } from '../../components'
import { IMAGES } from '../../assets'
import { useDispatch } from 'react-redux'
import { deleteUser, updateUser } from '../../redux/UserSlice'
import { styles } from './style'

const TaskDetails = (props: any) => {
    const { navigation, route } = props
    const { item, index } = route?.params
    const dispatch = useDispatch()

    const [visibleModal, setVisibleModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [title, setTitle] = useState(item?.title || '')
    const [description, setDescription] = useState(item?.description || '')

    const handleSave = () => {
        dispatch(updateUser({ index, title, description }))
        setVisibleModal(false)
        navigation.goBack()
    };

    const handleEdit = () => {
        setVisibleModal(true)
    };
    const closeModal = () => {
        setTitle('')
        setDescription('')
        setVisibleModal(false)
    }

    const handleDelete = () => {
        dispatch(deleteUser(index))
        setDeleteModal(false)
        navigation.goBack()
    }

    return (
        <View style={styles.Container}>
            <Scrollable>
                <Header title='Task Detail' isBack='true' />

                {/* todo buttons */}
                <View style={{ ...commonStyles.horizontalView, gap: 10, alignSelf: 'flex-end', marginRight: '5%', marginTop: '4%' }}>
                    <Pressable onPress={() => handleEdit()}>
                        <Image source={IMAGES.edit} resizeMode='contain' style={styles.todoIcon} tintColor={COLOR.purple_5} />
                    </Pressable>
                    <Pressable onPress={() => setDeleteModal(true)}>
                        <Image source={IMAGES.delete} resizeMode='contain' style={styles.todoIcon} tintColor={COLOR.primary} />
                    </Pressable>
                </View>

                <View style={styles.contentContainer}>
                    <Label style={styles.titleLabel}>Title</Label>
                    <Label>{item?.title}</Label>

                    <Label style={styles.titleLabel}>Description</Label>
                    <Label>{item?.description}</Label>
                </View>
            </Scrollable>

            {/* Add Task Model */}
            <AddInfoModal
                visible={visibleModal}
                onRequestClose={() => closeModal()}
                onClosePress={() => closeModal()}
                titleValue={title}
                onTitleChange={setTitle}
                descValue={description}
                onDescChange={setDescription}
                onSavePress={handleSave}
            />

            {/* Delete Task Model */}
            <DeleteModal
                visible={deleteModal}
                onRequestClose={() => setDeleteModal(false)}
                onCancelPress={() => setDeleteModal(false)}
                onConfirmPress={handleDelete}
            />

        </View>
    )
}

export default TaskDetails

