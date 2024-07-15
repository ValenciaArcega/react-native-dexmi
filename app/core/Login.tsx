import SafeKeyboardScroll from "@/app/layout/SafeKeyboardScroll"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { appColors } from "../constants/colors"
import { useGeneralStyles } from "../hooks/useGeneralStyles"
import { BtnLinearRegularShade } from "../components/Buttons"

export default function Login() {
	const gs = useGeneralStyles()

	return <SafeKeyboardScroll style={{ backgroundColor: "#e6fcf5" }}>
		<View style={{
			margin: 32,
			flex: 1,
			alignItems: "center",
			backgroundColor: "white",
			borderRadius: 18, padding: 24,
		}}>
			<Image
				source={require("@/assets/img/bg-login.png")}
				style={{ height: "50%", resizeMode: "contain" }} />
			<Text style={{
				fontWeight: 700,
				fontSize: 38,
				marginTop: 20,
			}}>Inicia Sesión</Text>

			<TextInput
				style={[gs.input, { marginTop: 30, }]}
				placeholder="Ingresa tu correo electrónico" />
			<TextInput
				secureTextEntry
				style={[gs.input, { marginTop: 30, }]}
				placeholder="Ingresa tu contraseña" />

			<TouchableOpacity style={[gs.btnBase, { marginTop: 36 }]} >
				<BtnLinearRegularShade>
					<Text style={gs.btnBaseTxt}>Ingresar</Text>
				</BtnLinearRegularShade>
			</TouchableOpacity>
		</View>
	</SafeKeyboardScroll >
}
