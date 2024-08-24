import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Promotions } from '../core/news/Promotions';
import { View } from 'react-native';

const materialTabs = createMaterialTopTabNavigator();

export function RouterMaterialTabsNews() {
	return <View style={{ flex: 1 }}>
		<materialTabs.Navigator style={{ marginTop: 0 }}>
			<materialTabs.Screen
				name="Promotions"
				options={{
					tabBarLabel: "Promociones",
					tabBarLabelStyle: {
						textTransform: "capitalize"
					}
				}}
				component={Promotions} />
			<materialTabs.Screen
				name="Eventos"
				options={{
					tabBarLabel: "Eventos",
					tabBarLabelStyle: {
						textTransform: "capitalize"
					}
				}}
				component={Events} />
		</materialTabs.Navigator>
	</View>
}

function Events() {
	return <>
	</>
}