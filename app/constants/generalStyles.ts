import { StyleSheet } from "react-native";
import { appColors } from "./colors";

export const gs = StyleSheet.create({
	containerView: {
		flex: 1,
		backgroundColor: appColors.bgWhite,
	},
	container: {
		flex: 1,
	},
	containerBg: {
		flex: 1,
		backgroundColor: appColors.bgWhite,
	},
	scroll: {
		overflow: "visible",
		minHeight: "100%",
		flexGrow: 1,
	}
})
