import { Dimensions, StyleSheet } from "react-native"
import { InterWeight } from "../constants/fonts"
import { Platform } from "react-native"
import { appColors } from "../constants/colors"
import { useMatchMedia } from "./useMatchMedia"

export function useGeneralStyles() {
	const { isShortPhone } = useMatchMedia()
	const isiOS = Platform.OS === "ios"
	const isAndroid = Platform.OS === "android"
	const { height, width } = Dimensions.get('window')

	return StyleSheet.create({
		containerView: {
			flex: 1,
			backgroundColor: "#fff",
		},
		scroll: {
			overflow: "visible",
			minHeight: "100%",
			flexGrow: 1,
		},
		wrapperHeader: {
			justifyContent: "flex-end",
			paddingBottom: 10,
			height: isiOS ? 72 : 88,
			width: "100%",
			borderBottomColor: "rgba(220,220,220,0.48)",
			borderBottomWidth: 2,
			alignItems: "center",
			backgroundColor: "white",
		},
		titleForm: {
			letterSpacing: -.5,
			fontFamily: InterWeight.w500,
			fontSize: 20,
			color: "#181818",
		},
		formSignUp: {
			width: "88%",
			alignSelf: "center",
		},

		form: {
			width: "88%",
			alignSelf: "center",
		},

		labelInput: {
			fontSize: 17,
			marginTop: 32,
			fontFamily: InterWeight.w500,
			color: "#626262",
		},
		labelSecondary: {
			fontSize: 17,
			color: "gray",
		},
		wrapperInputIcon: {
			width: "100%",
			height: 64,
			marginTop: 6,
			paddingHorizontal: 12,
			paddingEnd: 16,
			borderRadius: 12,
			flexDirection: "row",
			alignItems: "center",
			columnGap: 10,
			backgroundColor: appColors.bgInput,
		},
		inputInsideWrapper: {
			height: "100%",
			width: "90%",
			fontSize: 19,
			color: "#181818",
		},
		input: {
			width: "100%",
			height: 56,
			fontSize: 19,
			borderRadius: 12,
			marginTop: 6,
			paddingHorizontal: 16,
			backgroundColor: appColors.bgInput,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.2,
			shadowRadius: 1.41,
			elevation: 2,
		},

		wrapperTooglePass: {
			width: "18%",
			alignItems: "center",
			justifyContent: "center"
		},
		txtErrorBelowInput: {
			height: 24,
			marginTop: 4,
			color: "#ff3c3c",
			fontFamily: InterWeight.w500,
			fontSize: 14,
			lineHeight: 24
		},

		btnBase: {
			height: 60,
			width: "100%",
			borderRadius: 18,
			overflow: "hidden",
			backgroundColor: appColors.p600,
			alignItems: "center",
			justifyContent: "center"
		},

		btnNext: {
			marginTop: isiOS ? 44 : 32,
			marginVertical: 32,
			height: 58,
			borderRadius: 18,
			overflow: "hidden",
			width: isShortPhone ? "60%" : "48%",
			gap: 4,
			alignSelf: "flex-end",
			flexDirection: "row",
		},
		btnBaseTxt: {
			fontSize: 22,
			color: "#fff",
		},
		btnBaseSecondary: {
			marginTop: 32,
			height: 60,
			backgroundColor: appColors.p200,
			borderRadius: 16,
			alignItems: "center",
			justifyContent: "center",
		},
		btnBaseSecondaryText: {
			fontSize: 19,
			fontFamily: InterWeight.w500,
			color: appColors.p600,
		},
		btnNavigateDetail: {
			minWidth: "60%",
			marginTop: 6,
			paddingHorizontal: 20,
			height: 60,
			backgroundColor: appColors.bgInput,
			borderRadius: 8,
			flexDirection: "row",
			gap: 14,
			alignItems: "center",
		},

		btnNavigateDetailIconArrowRight: {
			position: "absolute",
			right: 10
		},

		nestedWrapperSafeKeyboardScroll: {
			backgroundColor: "#fff",
			paddingTop: isShortPhone ? 40 : (isAndroid) ? 64 : 12,
			paddingHorizontal: 24,
		},

		wrapperTitleScreen: {
			backgroundColor: "#fff",
			paddingTop: isShortPhone ? 40 : 64,
			paddingHorizontal: 24,
		},

		titleScreen: {
			fontSize: 32,
			letterSpacing: -.8,
			fontFamily: InterWeight.w600,
		},

		btnFloatingCircle: {
			height: 64,
			width: 64,
			borderRadius: 50,
			backgroundColor: "#121212",
			position: "absolute",
			bottom: 16,
			right: 16,
			alignItems: "center",
			justifyContent: "center",
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			elevation: 10,
		},

		wrapperIconCalendar: {
			flexDirection: "row",
			alignItems: "center",
			height: 52,
			width: "100%",
			gap: isiOS ? 0 : 10,
		},
		txtCalendarDate: {
			fontFamily: InterWeight.w500,
			fontSize: 17,
			color: "#181818",
			backgroundColor: "#edf2ff",
			padding: 8,
			paddingHorizontal: 16,
			borderRadius: 8
		},
		overlay: {
			height: "100%",
			width: "100%",
			position: "absolute",
			top: 0,
			left: 0,
			backgroundColor: 'rgba(0,0,0,0.6)',
			alignItems: "center",
			justifyContent: "center",
			zIndex: 3,
		},
		wrapperMultimedia: {
			minHeight: 64,
			paddingVertical: 12,
			backgroundColor: appColors.bgInput,
			marginTop: 6,
			paddingLeft: 12,
			borderRadius: 12,
			flexDirection: "row",
			alignItems: "center",
			gap: 9,
			// width: "100%",
		},
		wrapperMultimediaTxt: {
			fontSize: 17,
			fontFamily: InterWeight.w500,
			color: appColors.p200,
		},
		wrapperMultimediaIcon: {
			fontSize: 28,
			color: appColors.p400,
		},
		separator: {
			borderBottomColor: "#eee",
			borderBottomWidth: 2,
			width: "100%",
			height: 4,
			marginVertical: 20
		},
		wrapperCalendar: {
			flexDirection: "row",
			alignItems: "center",
			height: 52,
			width: "100%",
			gap: isiOS ? 0 : 10,
		},
		txtDate: {
			fontFamily: InterWeight.w500,
			fontSize: 17,
			color: "#181818",
			backgroundColor: "#edf2ff",
			padding: 8,
			paddingHorizontal: 16,
			borderRadius: 8
		},
	})
}
