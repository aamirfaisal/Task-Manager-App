import React from 'react'
import * as ui from '../screens'
import { SCREEN } from '../enums/AppEnums'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name={SCREEN.SPLASH} component={ui.Splash} />
            <Stack.Screen name={SCREEN.LOGIN} component={ui.Login} />
            <Stack.Screen name={SCREEN.REGISTER} component={ui.Register} />
            <Stack.Screen name={SCREEN.HOME} component={ui.Home} />
            <Stack.Screen name={SCREEN.TASK_DETAIL} component={ui.TaskDetails} />
        </Stack.Navigator>
    )
}

export default RootNavigator
