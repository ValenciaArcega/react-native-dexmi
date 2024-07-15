import { Platform } from "react-native";

export function usePlatform() {
	const isiOS = Platform.OS === "ios";
	const isAndroid = Platform.OS === "android";
	const isMacOS = Platform.OS === "macos";
	const isWindows = Platform.OS === "windows";
	const isWeb = Platform.OS === "web";

	return { isiOS, isAndroid, isMacOS, isWindows, isWeb };
}
