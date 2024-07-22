import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useBottomTabStyles } from "../hooks/useBottomTabStyles"
import { appColors } from "../constants/colors"
import { Ionicons } from "@expo/vector-icons"
import { News } from "./RouterMaterialTabsNews"

const bStack = createBottomTabNavigator()

export function RouterSession() {
	const bottomTabStyles = useBottomTabStyles()

	return (
		<bStack.Navigator
			backBehavior="none"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarHideOnKeyboard: true,
				tabBarStyle: bottomTabStyles.tabBarStyle,
				tabBarActiveTintColor: appColors.mainColorShade,
				tabBarInactiveTintColor: "gray",
			}}
			initialRouteName="HomeTenedor">
			<bStack.Screen
				name="News"
				component={News}
				options={{
					tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "newspaper" : "newspaper-outline"} size={30} color={color} />
				}} />
		</bStack.Navigator>
	)
}