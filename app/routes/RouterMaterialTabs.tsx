import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { News } from '../core/news/News';
import { Text } from 'react-native';

const materialTabs = createMaterialTopTabNavigator();

export function RouterMaterialTabs() {
	return <materialTabs.Navigator style={{ marginTop: 64 }}>
		<materialTabs.Screen
			name="News"
			component={News} />
		<materialTabs.Screen
			name="Some"
			component={Some} />
	</materialTabs.Navigator>
}

function Some() {
	return <Text>Some</Text>
}