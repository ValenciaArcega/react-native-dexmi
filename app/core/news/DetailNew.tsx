import { AvoiderKeyboard } from "@/app/components/AvoiderKeyboard";
import { CustomGradient } from "@/app/components/Gradient";
import { appColors } from "@/app/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

export function DetailNew({ route }) {
	const { item, image } = route.params

	return <View className="flex-1">
		<AvoiderKeyboard>
			<Image source={{ uri: image }}
				style={{
					width: "100%",
					height: "40%",
				}} />
			<View style={{
				padding: 16,
				gap: 8,
			}} >
				<Text style={{
					fontSize: 20,
					fontWeight: "bold",
				}}>{item.message.title}</Text>
				<Text style={{
					marginVertical: 8,
					color: appColors.green700,
				}}>2 days ago</Text>
				<Text style={{
					lineHeight: 28,
					color: "#aaa",
					fontSize: 18,
				}}>{item.resume}</Text>
				<Pressable style={{
					height: 60,
					borderRadius: 14,
					overflow: "hidden",
				}}>
					<CustomGradient colors={[appColors.p400, appColors.p600]}>
						<MaterialCommunityIcons name="file-download" size={32} color={appColors.frWhite} />
						<Text style={{ fontSize: 19 }}>Descargar Documento</Text>
					</CustomGradient>
				</Pressable>
			</View>
		</AvoiderKeyboard>
	</View>
}
