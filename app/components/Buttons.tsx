
import { LinearGradient } from "expo-linear-gradient";
import { appColors } from "../constants/colors";
import { ReactNode } from "react";

export function BtnLinearRegularShade({ children, style }: { children: ReactNode, style?: any }) {
	return (
		<LinearGradient
			style={{
				height: "100%",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "row",
				gap: 6,
				...style,
			}}
			colors={[appColors.mainColorRegular, appColors.mainColorShade]}>
			{children}
		</LinearGradient>
	)
}