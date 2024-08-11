import { usePlatform } from "../hooks/usePlatform";
import { useHeaderHeight } from '@react-navigation/elements';
import { KeyboardAvoidingView } from "react-native";

export function CustomKeyboard({ children }) {
	const heightHeader = useHeaderHeight()
	const { isiOS, isAndroid } = usePlatform()
	const behavior = isiOS ? "padding" : "height"
	return <KeyboardAvoidingView
		behavior={behavior}
		enabled
		style={{
			flex: 1,
			paddingTop: 0,
		}}
		keyboardVerticalOffset={
			isiOS ? heightHeader : 0}>
		{children}
	</KeyboardAvoidingView>
}