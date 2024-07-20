import { Platform, StyleSheet } from "react-native";
import { useMatchMedia } from "./useMatchMedia";

export function useBottomTabStyles() {
	const { isLargePhone, isMediumPhone } = useMatchMedia();

	return StyleSheet.create({
		tabBarStyle: {
			height: (isMediumPhone && Platform.OS === "ios") ? 94 : 64,
		},

		tabBarIconView: {
			alignItems: "center",
			justifyContent: "center",
		}
	})
}
