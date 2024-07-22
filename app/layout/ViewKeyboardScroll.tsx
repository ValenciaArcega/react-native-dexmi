import { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, View, ScrollView } from 'react-native';
import { useGeneralStyles } from "../hooks/useGeneralStyles";
import { useHeaderHeight } from '@react-navigation/elements';
import { usePlatform } from '../hooks/usePlatform';
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"

type ViewKeyboardScrollProps = {
	children: React.ReactNode,
	style?: any,
	isSafeArea?: boolean
}

export default function ViewKeyboardScroll({
	children,
	style,
	isSafeArea = false
}: ViewKeyboardScrollProps) {
	const heightHeader = useHeaderHeight();
	const gs = useGeneralStyles();
	const { isAndroid, isiOS } = usePlatform()
	const behavior = isiOS ? "padding" : "height";
	const insets = useSafeAreaInsets()
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
		<SafeAreaProvider>
			<View style={[gs.containerView, {
				paddingTop: isSafeArea ? insets.top : 0,
				...style
			}]}>
				<KeyboardAvoidingView
					behavior={behavior}
					style={{ flex: 1 }}
					keyboardVerticalOffset={isiOS ? heightHeader : 0}
				>
					<ScrollView
						keyboardDismissMode="on-drag"
						contentInsetAdjustmentBehavior="automatic"
						contentContainerStyle={[gs.scroll, { flexGrow: keyboardVisible ? 1 : 0 }]}>
						{children}
					</ScrollView>
				</KeyboardAvoidingView>
			</View>
		</SafeAreaProvider>
	);
}
