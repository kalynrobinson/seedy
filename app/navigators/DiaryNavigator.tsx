import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DiaryEntryScreen, WelcomeScreen } from "app/screens"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { AppStackScreenProps, AppStackParamList } from "./AppNavigator"
import { DemoTabParamList } from "./DemoNavigator"
import { DiaryScreen } from "app/screens/diary"

export type DiaryNavigatorParamList = {
  Diary: undefined
  DiaryEntry: undefined
}

const DiaryStack = createNativeStackNavigator<DiaryNavigatorParamList>()

export const DiaryNavigator = () => {
  return (
    <DiaryStack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
    >
      {/* <Stack.Screen name="DiaryEntry" component={DiaryEntryScreen} /> */}
      <DiaryStack.Screen name="Diary" component={DiaryScreen} />
    </DiaryStack.Navigator>
  )
}
