import { Ionicons } from "@expo/vector-icons"
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet"
import { ReactNode } from "react"

export type CustomLinearGradientProps = {
	children: ReactNode
	style?: object
	colors?: string[]
	horizontal?: boolean
}

export type BottomsheetBasicProps = {
	children: React.ReactNode
	snapPoints: string[]
	hasBackdrop?: boolean
	refBottomSheet?: React.RefObject<BottomSheet>
	isCloseOnDrag?: boolean
	backDropPress?: "close" | "none" | "collapse"
	style?: any
	onClose?: () => void
}
export type DropDownListProps = {
	data: object[];
	value: any;
	setValue: (value: any) => void;
	placeholder?: string,
	search?: boolean,
	valueField: string,
	labelField: string,
	iconName?: keyof typeof Ionicons.glyphMap,
	style?: object
}
