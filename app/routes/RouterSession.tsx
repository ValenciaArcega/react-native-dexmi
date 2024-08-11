import { Pressable } from "react-native";
import { appColors } from "../constants/colors";
import { DetailNew } from "../core/news/DetailNew";
import { RouterMaterialTabsNews } from "./RouterMaterialTabsNews";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

export function RouterSession() {
	const Stack = createNativeStackNavigator()

	return (
		<Stack.Navigator
			initialRouteName="News"
			screenOptions={{
				headerBackTitle: "Atrás",
				headerLargeTitle: true,
				headerShadowVisible: true,
				headerLargeTitleShadowVisible: true,
				headerTitleStyle: {
					fontSize: 22,
					color: appColors.p600,
				},
				headerLargeStyle: {
					backgroundColor: appColors.bgWhite,
				},
				headerStyle: {
					backgroundColor: appColors.bgWhite,
				},
			}}>
			<Stack.Screen
				name="News"
				component={RouterMaterialTabsNews}
				options={{ headerLargeTitle: false }} />
			<Stack.Screen
				name="DetailsNew"
				component={DetailNew}
				options={{
					title: "Detalles",
					headerRight: () => (
						<Pressable>
							<MaterialIcons name="insert-comment" size={24} color={appColors.p600} />
						</Pressable>
					)
				}}
			/>
		</Stack.Navigator>
	)
}