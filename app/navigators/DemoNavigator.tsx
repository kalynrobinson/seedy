import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import { DemoCommunityScreen, DemoDebugScreen } from "../screens"
import { DemoPodcastListScreen } from "../screens/DemoPodcastListScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { DiaryScreen } from "app/screens/diary/DiaryScreen"
import { SessionsProvider } from "app/providers/data/SessionsProvider"

export type DemoTabParamList = {
  DemoCommunity: undefined
  DemoDebug: undefined
  DemoPodcastList: undefined
  Diary: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<DemoTabParamList>()

export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <SessionsProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [$tabBar, { height: bottom + 70 }],
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.text,
          tabBarLabelStyle: $tabBarLabel,
          tabBarItemStyle: $tabBarItem,
        }}
      >
        <Tab.Screen
          name="Diary"
          component={DiaryScreen}
          options={{
            tabBarLabel: "Log",
            tabBarIcon: ({ focused }) => (
              <Icon icon="components" color={focused ? colors.tint : undefined} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="DemoCommunity"
          component={DemoCommunityScreen}
          options={{
            tabBarLabel: translate("demoNavigator.communityTab"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="community" color={focused ? colors.tint : undefined} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="DemoPodcastList"
          component={DemoPodcastListScreen}
          options={{
            tabBarAccessibilityLabel: translate("demoNavigator.podcastListTab"),
            tabBarLabel: translate("demoNavigator.podcastListTab"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="podcast" color={focused ? colors.tint : undefined} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="DemoDebug"
          component={DemoDebugScreen}
          options={{
            tabBarLabel: translate("demoNavigator.debugTab"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="debug" color={focused ? colors.tint : undefined} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </SessionsProvider>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
}
