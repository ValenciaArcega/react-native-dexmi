import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./core/Login"
import { LoginJC } from "./core/Login_JC/Login_JC"

const Stack = createNativeStackNavigator()

export default function Router() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Login"
				component={LoginJC} />
		</Stack.Navigator>
	)
}
