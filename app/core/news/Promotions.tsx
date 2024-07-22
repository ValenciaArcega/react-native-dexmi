import { usePlatform } from "@/app/hooks/usePlatform";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const promotions = [
	{
		idNew: 1,
		title: "¿Cómo registrar a tu equipo en otra liga?",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste aliquam, eum fugit aspernatur quibusdam dolorem vel, alias atque vitae optio delectus nostrum quia? Quam.",
		imgUrl: "https://images.unsplash.com/photo-1701872324304-fceed8b2785b?q=80&w=2650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	}
]
export function Promotions() {
	const { isAndroid } = usePlatform();

	return <View style={{
		backgroundColor: "pink",
		flex: 1,
	}}>
		<FlatList
			data={promotions}
			numColumns={2}
			columnWrapperStyle={{ justifyContent: 'space-between' }}
			keyExtractor={(item) => item.idNew.toString()}
			style={{
				// paddingTop: isAndroid ? 0 : 158,
				backgroundColor: "#fff",
				minWidth: "100%",
			}}
			/* ListEmptyComponent={() => (
				<Text style={{ fontSize: 22, marginTop: "50%", textAlign: "center", color: "gray", lineHeight: 36, paddingHorizontal: 16 }}> Aún no tienes una sucursal, da click al botón de <Text style={{ color: "black", fontSize: 32, }}>+</Text> para agregar una nueva.</Text>
			)} */
			renderItem={({ item, index }) => {
				/* const gradients = [
					['#90d9a1', "#d6ff7b"],
					['#faafff', "#7bc5ff"],
					['#b8afff', "#7b96ff"]
				];
				const selectedGradient = gradients[index % 3];
				<LinearGradient
					style={{
						width: "100%",
						height: "22%"
					}}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					colors={selectedGradient} /> */
				return (
					<TouchableOpacity
						key={item.idNew}
						onPress={() => getNewDetails_onPress(item.idNew)}
						style={{
							paddingVertical: 16,
							width: "100%",
							backgroundColor: "white",
							paddingHorizontal: 16,
						}}>
						<Image
							source={{ uri: item.imgUrl }}
							style={{
								width: "100%",
								height: 200,
								borderRadius: 12,
							}} />
						<Text style={{
							fontSize: 17,
							fontWeight: "bold",
							color: "#181818",
							marginTop: 12,
						}}>
							{item.title}</Text>
						<Text style={{
							fontSize: 17,
							color: "#aaa",
							marginTop: 8,
							lineHeight: 22,
						}}>
							{item.description}</Text>
					</TouchableOpacity>
				)
			}}
		/>
	</View>

	function getNewDetails_onPress(idNew: number) {

	}
}
