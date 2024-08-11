import { useEffect, useState } from "react";
import { Keyboard, ScrollView } from "react-native";
import { usePlatform } from "../hooks/usePlatform";

export function CustomScroll({ children, style, adjustContent = true }: { children: React.ReactNode, style?: any, adjustContent?: boolean }) {
	const { isAndroid } = usePlatform()
	const [keyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		if (isAndroid) {
			const showListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
			const hideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

			return () => {
				showListener.remove();
				hideListener.remove();
			};
		}
	}, []);

	return <ScrollView
		keyboardDismissMode="on-drag"
		keyboardShouldPersistTaps='handled'
		// 👇 Avoid the large title covers the children
		contentInsetAdjustmentBehavior={adjustContent ? "automatic" : "never"}
		contentContainerStyle={{
			// flexGrow: 1,
			flexGrow: keyboardVisible ? 0 : 1,
			minHeight: "100%",
			...style
		}}>
		{children}
	</ScrollView>
}