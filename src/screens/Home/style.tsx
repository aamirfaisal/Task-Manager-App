import { StyleSheet } from "react-native";
import { COLOR, TEXT_STYLE, commonStyles } from "../../enums/StyleGuide";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    ChooseActivity: {
        ...TEXT_STYLE.smallTitleMedium,
        paddingLeft: '5%',
        marginTop: '10%'
    },
    ListContainer: {
        marginTop: '4%',
        paddingBottom: '16%'
    },
    FlatListSectionStyling: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: COLOR.light,
       ...commonStyles.justifyView,
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        borderRadius: 12,
        marginBottom: '4%'
    },
    TodoInfo: {
        marginLeft: '3%',
        gap: 3
    },
    ImgStyling: {
        height: 40,
        width: 40
    },
    titleTextStyling: {
        ...TEXT_STYLE.bigTextMedium
    },
    SubTitleTextStyling: {
        fontSize: 14,
        color: 'lightgray'
    },
    todoIcon: {
        height: 20,
        width: 20
    },
    addIcon: {
        height: 25,
        width: 25
    },
    AddIconCricle: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.primary,
        borderRadius: 20,
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: '4%',
        right: '7%'
    },
    errorContainer: {
        flex: 1,
        ...commonStyles.center
    },
    noData: {
        ...TEXT_STYLE.bigTextMedium
    }

})
export default styles;