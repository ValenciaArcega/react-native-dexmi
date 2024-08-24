import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useBottomTabStyles } from "../hooks/useBottomTabStyles"
import { appColors } from "../constants/colors"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { RouterNews } from "./RouterNews"
import { RouterMatches } from "./RouterMatches"
import { Text, TouchableOpacity, View } from "react-native"
import { useUser } from "../hooks/useUser"

const bStack = createBottomTabNavigator()

export function RouterBottom() {
	const bottomTabStyles = useBottomTabStyles()

	return (
		<bStack.Navigator
			initialRouteName="Noticias"
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
			<bStack.Screen
				name="Ajustes"
				component={Settings}
				options={{
					tabBarIcon: ({ color, focused }) =>
						<FontAwesome name="gears" size={30} color={color} />
				}} />
		</bStack.Navigator>
	)
}

function Settings() {
	const { setGlobalUser } = useUser()

	return (
		<View style={{ flex: 1, backgroundColor: appColors.bgWhite, justifyContent: "center", alignItems: "center", gap: 14, }}>
			<View style={{
				height: 132,
				width: 132,
				borderRadius: 300,
				backgroundColor: appColors.p400,
				borderWidth: 14,
				borderColor: appColors.p200,
				justifyContent: "center",
				alignItems: "center",
			}}>
				<Ionicons name="hammer" size={48} color={appColors.green800} />
			</View>
			<Text style={{
				fontSize: 22,
			}}>En desarrollo...🛠️</Text>

			<TouchableOpacity
				onPress={() => setGlobalUser(null)}
				style={{
					width: "70%",
					height: 62,
					borderRadius: 16,
					borderWidth: 2,
					borderColor: appColors.red200,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: appColors.red100,
					flexDirection: "row",
					gap: 7,
				}}>
				<Ionicons name="exit-outline" size={30} color={appColors.red700} />
				<Text style={{ fontSize: 19, color: appColors.red700 }}>
					Cerrar sesión</Text>
			</TouchableOpacity>
		</View>
	)
}
