import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../core/Login';

export function RouterNoSession() {
	const stack = createNativeStackNavigator()
	const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null)
	const [isValidating, setIsValidating] = useState<boolean>(true)

	useEffect(() => {
		(async function () {
			const flag = Boolean(JSON.parse(await AsyncStorage.getItem("FIRST_INSTALLATION")))

			if (flag) {
				setIsFirstTime(true)
				setIsValidating(false)
			} else {
				await AsyncStorage.setItem("FIRST_INSTALLATION", 'true')
				setIsValidating(false)
			}
		})()
	}, [])

	return (
		!isValidating && <stack.Navigator initialRouteName={isFirstTime ? "Login" : "Onboarding"}>
			<stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false, animation: "fade" }} />
		</stack.Navigator>
	);
}