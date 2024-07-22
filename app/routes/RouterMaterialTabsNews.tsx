import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Promotions } from '../core/news/Promotions';
import ViewKeyboard from '../layout/ViewKeyboard';

const materialTabs = createMaterialTopTabNavigator();

export function News() {
	return <ViewKeyboard isSafeArea={true}>
		<RouterMaterialTabsNews />
	</ViewKeyboard >
}

function RouterMaterialTabsNews() {
	return <materialTabs.Navigator style={{ marginTop: 0 }}>
		<materialTabs.Screen
			name="Promotions"
			options={{
				tabBarLabel: "Promociones",
			}}
			component={Promotions} />
		<materialTabs.Screen
			name="Eventos"
			component={Events} />
	</materialTabs.Navigator>
}

function Events() {
	return <>
	</>
}