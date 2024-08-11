import { Platform, StyleSheet } from "react-native";
import { useMatchMedia } from "./useMatchMedia";

export function useBottomTabStyles() {
	const { isLargePhone, isMediumPhone } = useMatchMedia();

	return StyleSheet.create({
		tabBarStyle: {
			height: 92,
			backgroundColor: "white",
			borderTopWidth: 1,
			borderTopColor: "#aaa",
		},

		tabBarIconView: {
			alignItems: "center",
			justifyContent: "center",
		}
	})
}
