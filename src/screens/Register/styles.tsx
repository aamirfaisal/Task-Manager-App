import { StyleSheet } from 'react-native';
import { COLOR, HEIGHT, TEXT_STYLE, commonStyles } from '../../enums/StyleGuide';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  HeaderLabel: {
    ...TEXT_STYLE.largeTitleSemiBold,
    color: COLOR.primary,
    textAlign: 'center',
    marginTop: HEIGHT * .25
  },
  inputContainer: {
    marginTop: '13%',
  },
  loginButton: {
    marginTop: '10%'
  },
  registerButton: {
    alignItems: 'center',
    marginTop: '6%'
  },
  bottomContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    marginTop: '7%'
  },
  accountLabel: {
    ...TEXT_STYLE.bigText_2,
    color: COLOR.gray,
  },
  registerLabel: {
    ...TEXT_STYLE.bigTextMedium_2,
    color: COLOR.primary
  }
})
