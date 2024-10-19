import { StyleSheet } from "react-native";

export function useBottomTabStyles() {
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
