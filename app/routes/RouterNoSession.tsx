import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IniciarSesion } from '../core/Login_JC/IniciarSesion';
import { Home } from '../core/Login_JC/Home';
import { useUser } from '../hooks/useUser';

export function RouterNoSession() {
	const stack = createNativeStackNavigator()
	const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null)
	const [isValidating, setIsValidating] = useState<boolean>(true)
	const { setGlobalUser } = useUser()

	useEffect(() => {
		setGlobalUser(null)
		reviewAppStatus()
	}, [])

	const reviewAppStatus = async function () {
		const flag = Boolean(JSON.parse(await AsyncStorage.getItem("HAS_BEEN_INSTALLED")))

		if (flag) {
			setIsFirstTime(false)
			setIsValidating(false)
		} else {
			setIsFirstTime(true)
			await AsyncStorage.setItem("HAS_BEEN_INSTALLED", JSON.stringify(true))
			setIsValidating(false)
		}
	}

	return (
		!isValidating && <stack.Navigator initialRouteName={isFirstTime ? "Onboarding" : "Home"}>
			<stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false, animation: "fade" }} />
			<stack.Screen
				name="IniciarSesion"
				component={IniciarSesion}
				options={{ headerShown: false, animation: "fade" }} />
		</stack.Navigator>
	);
}
