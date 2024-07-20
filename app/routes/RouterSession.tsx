import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useBottomTabStyles } from "../hooks/useBottomTabStyles"
import { appColors } from "../constants/colors"
import { Ionicons } from "@expo/vector-icons"
import { News } from "@/app/core/news/News"
import { RouterMaterialTabs } from "./RouterMaterialTabs"

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
				name="RouterMaterialTabs"
				component={RouterMaterialTabs}
				options={{
					tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "newspaper" : "newspaper-outline"} size={30} color={color} />
				}} />
			{/* <bStack.Screen
					name="RouterHubTenedor"
					component={RouterHub}
					options={{
						tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "grid" : "grid-outline"} size={28} color={color} />
					}} />
				<bStack.Screen
					name="RouterProfileTenedor"
					component={RouterProfile}
					options={{
						tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person-circle" : "person-circle-outline"} size={34} color={color} />
					}} /> */}
		</bStack.Navigator>
	)
}