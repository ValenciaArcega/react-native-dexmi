import { Ionicons } from "@expo/vector-icons"
import { appColors } from "@/app/constants/colors"
import { BaseToast } from "react-native-toast-message"

export function CustomToast({ props, height, iconName, colorIcon }) {
	return (
		<BaseToast
			{...props}
			text1NumberOfLines={1}
			text2NumberOfLines={2}
			text1Style={{
				fontSize: 18,
				fontWeight: "500",
			}}
			text2Style={{
				fontSize: 17,
				fontWeight: "400",
				color: "#999"
			}}
			contentContainerStyle={{
				paddingHorizontal: 8,
			}}
			renderLeadingIcon={() => <Ionicons name={iconName} size={30} color={colorIcon} />}
			style={{
				height: height,
				marginTop: "8%",
				borderLeftColor: colorIcon,
				borderLeftWidth: 8,
				alignItems: 'center',
				paddingVertical: 6,
				paddingLeft: 10,
			}}
		/>
	)
}

export const toastConfig = {
	successLarge: props => (
		<CustomToast
			props={props}
			height={86}
			iconName="checkmark-circle"
			colorIcon={appColors.secondaryGreen} />
	),
	successShort: props => (
		<CustomToast
			props={props}
			height={58}
			iconName="checkmark-circle"
			colorIcon={appColors.secondaryGreen} />
	),
	errorLarge: props => (
		<CustomToast
			props={props}
			height={86}
			iconName="alert-circle"
			colorIcon={appColors.secondaryRed} />
	),
	errorShort: props => (
		<CustomToast
			props={props}
			height={58}
			iconName="alert-circle"
			colorIcon={appColors.secondaryRed} />
	),
}
