import React, { useCallback } from "react"
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { Text } from "react-native"
import { useMatchMedia } from "@/app/hooks/useMatchMedia"
import { StyleSheet } from "react-native"
import { InterWeight } from "@/app/constants/fonts"

type BottomsheetBasicProps = {
	children: React.ReactNode
	snapPoints: string[]
	hasBackdrop?: boolean
	refBottomSheet?: React.RefObject<BottomSheet>
	isCloseOnDrag?: boolean
	backDropPress?: "close" | "none"
	style?: any
}

export function BottomsheetAuctionTracking({ children, refBottomSheet, snapPoints, hasBackdrop = true, isCloseOnDrag = false, backDropPress = "none", style }: BottomsheetBasicProps) {
	const styles = useStylesBottomSheet()

	const renderBackdrop = useCallback(function (props) {
		return <BottomSheetBackdrop
			pressBehavior={backDropPress}
			appearsOnIndex={0}
			disappearsOnIndex={-1} {...props} />
	}, [])

	return (
		<BottomSheet
			style={styles.bottomSheet}
			ref={refBottomSheet}
			index={0}
			backdropComponent={hasBackdrop ? renderBackdrop : null}
			snapPoints={snapPoints}
			handleIndicatorStyle={{ backgroundColor: '#c5c5c5', width: 48, height: 4, marginTop: 6 }}
			enablePanDownToClose={isCloseOnDrag}>
			<BottomSheetView style={[styles.contentContainer, { ...style }]}>
				{children}
			</BottomSheetView>
		</BottomSheet>
	)
}

export function useStylesBottomSheet() {
	return StyleSheet.create({
		bottomSheet: {
			borderRadius: 16,
		},
		contentContainer: {
			paddingHorizontal: 32,
			// backgroundColor: 'transparent',
			height: '100%',
		},
		txtHeader: {
			marginTop: 18,
			letterSpacing: -.5,
			fontSize: 24,
			fontFamily: InterWeight.w600,
		},
		txtDescription: {
			color: 'gray',
			marginTop: 4,
			fontSize: 18,
			lineHeight: 30,
		},
	})
}
