import { KeyboardAvoidingView, View } from "react-native";
import { usePlatform } from "../hooks/usePlatform";
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

type CustomViewProps = {
	isSafeArea?: boolean;
	style?: any;
	styleView?: any;
	children: React.ReactNode;
}
export function CustomView({ isSafeArea = false, style, styleView, children }: CustomViewProps) {
	const { isiOS } = usePlatform()
	const behavior = isiOS ? "padding" : "height"
	const insets = useSafeAreaInsets();
	const heightHeader = useHeaderHeight()

	if (!isSafeArea) return <View style={{ flex: 1, ...styleView }} >
		<KeyboardAvoidingView
			behavior={behavior}
			enabled
			style={{ flex: 1, ...style }}
			keyboardVerticalOffset={
				isiOS ? heightHeader : 0}>
			{children}
		</KeyboardAvoidingView>
	</View>

	return <SafeAreaProvider>
		<View style={{
			flex: 1,
			paddingTop: isSafeArea ? insets.top : 0,
			...styleView
		}}>
			<KeyboardAvoidingView
				behavior={behavior}
				enabled
				style={{ flex: 1, ...style }}
				keyboardVerticalOffset={
					isiOS ? heightHeader : 0}>
				{children}
			</KeyboardAvoidingView>
		</View>
	</SafeAreaProvider>
}