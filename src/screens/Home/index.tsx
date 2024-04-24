import { View, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { IMAGES } from '../../assets'
import { AddInfoModal, DeleteModal, Header, Label, LogoutModal, Pressable, Scrollable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, updateUser } from '../../redux/UserSlice'
import { COLOR } from '../../enums/StyleGuide'
import { truncateText } from '../../utils/Helper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SCREEN } from '../../enums/AppEnums'

const Home = (props: any) => {
    const { navigation } = props
    const users = useSelector((state: any) => state.user)
    const dispatch = useDispatch()
    const [visibleModal, setVisibleModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [LogoutModel, setLogoutModel] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [deleteIndex, setDeleteIndex] = useState<any>(null)
    const [editIndex, setEditIndex] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSave = () => {
        if (isEditing) {
            dispatch(updateUser({ index: editIndex, title, description }))
        } else {
            dispatch(addUser({ title, description }))
        }
        setVisibleModal(false)
        setTitle('')
        setDescription('')
        setIsEditing(false)
    };

    const handleEdit = (index: any) => {
        if (index >= 0 && index < users.data.length) {
            const userToEdit = users?.data[index]
            setTitle(userToEdit?.title || '')
            setDescription(userToEdit?.description || '')
            setEditIndex(index)
            setIsEditing(true)
            setVisibleModal(true)
        }
    }

    const handleDelete = (index: any) => {
        setDeleteIndex(index)
        setDeleteModal(true)
    }

    const confirmDelete = () => {
        dispatch(deleteUser(deleteIndex))
        setDeleteModal(false)
    }

    const closeModal = () => {
        setTitle('')
        setDescription('')
        setVisibleModal(false)
    }

    const handleLogout = async () => {
        await AsyncStorage.removeItem('user_email');
        await AsyncStorage.removeItem('user_password');
        setLogoutModel(false)
        navigation.navigate(SCREEN.LOGIN);
    }

    return (
        <View style={styles.Container}>
            <Scrollable containerStyle={{ flex: 1 }}>
                <Header title='Create Task' isRight='true'
                    onRightPress={() => setLogoutModel(true)} />

                <Label style={styles.ChooseActivity}>Choose Activity</Label>

                {users?.data?.length > 0 ? (
                    <FlatList
                        data={users?.data}
                        contentContainerStyle={styles.ListContainer}
                        renderItem={({ item, index }) => (
                            <Pressable style={styles.FlatListSectionStyling} onPress={() => navigation.navigate(SCREEN.TASK_DETAIL, { item: item, index: index })}>
                                <View style={styles.TodoInfo}>
                                    <Label style={styles.titleTextStyling}>{truncateText(item?.title, 17)}</Label>
                                    <Label style={styles.SubTitleTextStyling}>{truncateText(item?.description, 32)}</Label>
                                </View>
                                <View style={{ gap: 10 }}>
                                    <Pressable onPress={() => handleEdit(index)}>
                                        <Image source={IMAGES.edit} resizeMode='contain' style={styles.todoIcon} tintColor={COLOR.purple_5} />
                                    </Pressable>
                                    <Pressable onPress={() => handleDelete(index)}>
                                        <Image source={IMAGES.delete} resizeMode='contain' style={styles.todoIcon} tintColor={COLOR.primary} />
                                    </Pressable>
                                </View>
                            </Pressable>
                        )}
                    />

                ) : (
                    <View style={styles.errorContainer}>
                        <Label style={styles.noData}>No Data found</Label>
                    </View>
                )}

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
                    onConfirmPress={confirmDelete}
                />

                {/* LogOut Model */}
                <LogoutModal
                    visible={LogoutModel}
                    onRequestClose={() => setLogoutModel(false)}
                    onCancelPress={() => setLogoutModel(false)}
                    onConfirmPress={handleLogout}
                />

            </Scrollable>
            <Pressable onPress={() => setVisibleModal(true)} style={styles.AddIconCricle}>
                <Image source={IMAGES.plus} resizeMode='contain' style={styles.addIcon} />
            </Pressable>
        </View >
    )
}

export default Home