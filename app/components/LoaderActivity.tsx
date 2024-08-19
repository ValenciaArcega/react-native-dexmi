import { ActivityIndicator, View } from "react-native";
import { appColors } from "../constants/colors";

export function LoaderActivity() {
	return <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: appColors.bgWhite }}>
		<ActivityIndicator size="large" color={appColors.frBlack} />
	</View>
}
