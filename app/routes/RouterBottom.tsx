import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useBottomTabStyles } from "../hooks/useBottomTabStyles"
import { appColors } from "../constants/colors"
import { Ionicons } from "@expo/vector-icons"
import { RouterSession } from "./RouterSession"

const bStack = createBottomTabNavigator()

export function RouterBottom() {
	const bottomTabStyles = useBottomTabStyles()

	return (
		<bStack.Navigator
			initialRouteName="BottomNews"
			backBehavior="none"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarHideOnKeyboard: true,
				tabBarStyle: bottomTabStyles.tabBarStyle,
				tabBarActiveTintColor: appColors.mainColorShade,
				tabBarInactiveTintColor: "gray",
			}}>
			<bStack.Screen
				name="BottomNews"
				component={RouterSession}
				options={{
					tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "newspaper" : "newspaper-outline"} size={30} color={color} />
				}} />
		</bStack.Navigator>
	)
}