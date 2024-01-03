import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo } from "react"
import {
  AccessibilityProps,
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Platform,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { type ContentStyle } from "@shopify/flash-list"
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import {
  Button,
  ButtonAccessoryProps,
  Card,
  EmptyState,
  Icon,
  ListView,
  Screen,
  Text,
  Toggle,
} from "../../components"
import { isRTL, translate } from "../../i18n"
import { useStores } from "../../models"
import { Episode } from "../../models/Episode"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { delay } from "../../utils/delay"
import { openLinkInBrowser } from "../../utils/openLinkInBrowser"
import { useSessionsContext } from "app/providers/data/SessionsProvider"
import { SessionFragment } from "app/graphql"

const ICON_SIZE = 14

const rnrImage1 = require("../../../assets/images/demo/rnr-image-1.png")
const rnrImage2 = require("../../../assets/images/demo/rnr-image-2.png")
const rnrImage3 = require("../../../assets/images/demo/rnr-image-3.png")
const rnrImages = [rnrImage1, rnrImage2, rnrImage3]

export const DiaryScreen: FC<DemoTabScreenProps<"Diary">> = observer(function DiaryScreen(_props) {
  const { episodeStore } = useStores()
  const { sessions, isLoading, refetch } = useSessionsContext()

  const [refreshing, setRefreshing] = React.useState(false)

  // simulate a longer refresh, if the refresh is too fast for UX
  async function manualRefresh() {
    setRefreshing(true)
    await refetch()
    setTimeout(() => {
      setRefreshing(false)
    }, 700)
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContentContainer}>
      <ListView<SessionFragment>
        contentContainerStyle={$listContentContainer}
        data={sessions.slice()}
        refreshing={refreshing}
        estimatedItemSize={177}
        onRefresh={manualRefresh}
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator />
          ) : (
            <EmptyState
              preset="generic"
              style={$emptyState}
              button={episodeStore.favoritesOnly ? "" : undefined}
              buttonOnPress={manualRefresh}
              imageStyle={$emptyStateImage}
              ImageProps={{ resizeMode: "contain" }}
            />
          )
        }
        renderItem={({ item }) => <SessionCard session={item} />}
        ListHeaderComponent={
          <View style={$heading}>
            <Text preset="heading" tx="screens.diary.title" />
          </View>
        }
      />
    </Screen>
  )
})

const SessionCard = observer(function SessionCard({ session }: { session: SessionFragment }) {
  const imageUri = useMemo<ImageSourcePropType>(() => {
    return rnrImages[Math.floor(Math.random() * rnrImages.length)]
  }, [])
  const vibeUri = session.vibes?.[0].asset

  console.log(vibeUri)

  const handlePressCard = () => {
    openLinkInBrowser(`/diary/entry/${session.id}`)
  }

  return (
    <Card
      style={$item}
      verticalAlignment="force-footer-bottom"
      onPress={handlePressCard}
      HeadingComponent={
        <View style={$metadata}>
          <Text style={$metadataText} size="xxs">
            {session.strain}
          </Text>
          <Text style={$metadataText} size="xxs">
            {session.method} / {session.amount} / {session.potency}
          </Text>
        </View>
      }
      content={`Notes: ${session.notes}\nVibes: ${session.vibes?.map((vibe) => vibe.name)}`}
      RightComponent={<Image src={vibeUri} source={imageUri} style={$itemThumbnail} />}
    />
  )
})

// #region Styles
const $screenContentContainer: ViewStyle = {
  flex: 1,
}

const $listContentContainer: ContentStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.lg,
}

const $heading: ViewStyle = {
  marginBottom: spacing.md,
}

const $item: ViewStyle = {
  padding: spacing.md,
  marginTop: spacing.md,
  minHeight: 120,
}

const $itemThumbnail: ImageStyle = {
  marginTop: spacing.sm,
  borderRadius: 50,
  alignSelf: "flex-start",
  height: 50,
  width: 50,
}

const $toggle: ViewStyle = {
  marginTop: spacing.md,
}

const $labelStyle: TextStyle = {
  textAlign: "left",
}

const $iconContainer: ViewStyle = {
  height: ICON_SIZE,
  width: ICON_SIZE,
  flexDirection: "row",
  marginEnd: spacing.sm,
}

const $metadata: TextStyle = {
  color: colors.textDim,
  marginTop: spacing.xs,
  flexDirection: "row",
}

const $metadataText: TextStyle = {
  color: colors.textDim,
  marginEnd: spacing.md,
  marginBottom: spacing.xs,
}

const $favoriteButton: ViewStyle = {
  borderRadius: 17,
  marginTop: spacing.md,
  justifyContent: "flex-start",
  backgroundColor: colors.palette.neutral300,
  borderColor: colors.palette.neutral300,
  paddingHorizontal: spacing.md,
  paddingTop: spacing.xxxs,
  paddingBottom: 0,
  minHeight: 32,
  alignSelf: "flex-start",
}

const $unFavoriteButton: ViewStyle = {
  borderColor: colors.palette.primary100,
  backgroundColor: colors.palette.primary100,
}

const $emptyState: ViewStyle = {
  marginTop: spacing.xxl,
}

const $emptyStateImage: ImageStyle = {
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}
// #endregion
