import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useBottomTabStyles } from "../hooks/useBottomTabStyles"
import { appColors } from "../constants/colors"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { RouterNews } from "./RouterNews"
import { RouterMatches } from "./RouterMatches"

const bStack = createBottomTabNavigator()

export function RouterBottom() {
	const bottomTabStyles = useBottomTabStyles()

	return (
		<bStack.Navigator
			initialRouteName="BottomNews"
			backBehavior="none"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: true,
				tabBarHideOnKeyboard: true,
				tabBarStyle: bottomTabStyles.tabBarStyle,
				tabBarActiveTintColor: appColors.p800,
				tabBarInactiveTintColor: "gray",
			}}>
			<bStack.Screen
				name="Noticias"
				component={RouterNews}
				options={{
					tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "newspaper" : "newspaper-outline"} size={30} color={color} />
				}} />
			<bStack.Screen
				name="Partidos"
				component={RouterMatches}
				options={{
					tabBarIcon: ({ color, focused }) =>
						<FontAwesome name="soccer-ball-o" size={30} color={color} />
				}} />
		</bStack.Navigator>
	)
}