import { StyleSheet } from "react-native";
import { COLOR, FONT, commonStyles } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
    Container: {
        ...commonStyles.mainContainer
    },
    titleLabel: {
        fontSize: 18,
        color: COLOR.primary,
        fontFamily: FONT.medium
    },
    contentContainer: {
        marginHorizontal: '5%',
        marginTop: '5%',
    },
    todoIcon: {
        height: 20,
        width: 20
    },
})