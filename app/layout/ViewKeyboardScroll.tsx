import { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, View, ScrollView } from 'react-native';
import { useGeneralStyles } from "../hooks/useGeneralStyles";
import { useHeaderHeight } from '@react-navigation/elements';
import { usePlatform } from '../hooks/usePlatform';

export default function ViewKeyboardScroll({ children, style }: { children: React.ReactNode, style?: any }) {
	const heightHeader = useHeaderHeight();
	const gs = useGeneralStyles();
	const { isAndroid, isiOS } = usePlatform()
	const behavior = isiOS ? "padding" : "height";
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

	return (
		<View style={[gs.containerView, style, { flex: 1 }]}>
			<KeyboardAvoidingView
				behavior={behavior}
				style={{ flex: 1 }}
				keyboardVerticalOffset={isiOS ? heightHeader : 0}
			>
				<ScrollView
					keyboardDismissMode="on-drag"
					contentInsetAdjustmentBehavior="automatic"
					contentContainerStyle={[gs.scroll, { flexGrow: keyboardVisible ? 1 : 0 }]}
				>
					{children}
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
}
