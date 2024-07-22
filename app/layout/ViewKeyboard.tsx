import { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, View, ScrollView } from 'react-native';
import { useGeneralStyles } from "../hooks/useGeneralStyles";
import { useHeaderHeight } from '@react-navigation/elements';
import { usePlatform } from '../hooks/usePlatform';
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"

type ViewKeyboardProps = {
	children: React.ReactNode,
	style?: any,
	isSafeArea?: boolean
	viewStyles?: any,
	keyboardStyles?: any
}

export default function ViewKeyboard({
	children,
	viewStyles,
	keyboardStyles,
	isSafeArea = false
}: ViewKeyboardProps) {
	const heightHeader = useHeaderHeight();
	const gs = useGeneralStyles();
	const { isiOS } = usePlatform()
	const behavior = isiOS ? "padding" : "height";
	const insets = useSafeAreaInsets()

	return (
		<SafeAreaProvider>
			<View style={[gs.containerView, {
				paddingTop: isSafeArea ? insets.top : 0,
				...viewStyles
			}]}>
				<KeyboardAvoidingView
					behavior={behavior}
					style={{ flex: 1, ...keyboardStyles }}
					keyboardVerticalOffset={isiOS ? heightHeader : 0}
				>
					{children}
				</KeyboardAvoidingView>
			</View>
		</SafeAreaProvider>
	);
}
