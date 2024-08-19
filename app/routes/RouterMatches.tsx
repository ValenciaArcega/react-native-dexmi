import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Matches } from "../core/matches/Matches";
import { appColors } from "../constants/colors";

export function RouterMatches() {
	const Stack = createNativeStackNavigator();

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
				name="Matches"
				component={Matches}
				options={{ title: "Partidos" }} />
		</Stack.Navigator>
	);
}