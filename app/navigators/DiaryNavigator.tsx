import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DiaryEntryScreen, WelcomeScreen } from "app/screens"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { AppStackScreenProps, AppStackParamList } from "./AppNavigator"
import { DemoTabParamList } from "./DemoNavigator"

export type DiaryNavigatorParamList = {
  Demo: undefined
  DiaryEntry: undefined
}

const Stack = createNativeStackNavigator<DiaryNavigatorParamList>()
export const DiaryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
    >
      <Stack.Screen name="DiaryEntry" component={DiaryEntryScreen} />
    </Stack.Navigator>
  )
}
