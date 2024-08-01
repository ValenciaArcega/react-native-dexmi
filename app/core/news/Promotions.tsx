import { usePlatform } from "@/app/hooks/usePlatform";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const promotions = [
	{
		idNew: 1,
		userAvatar: "https://unavatar.io/github/mdo",
		userName: "Angel Valencia",
		title: "¿Registrar a tu equipo en otra liga?",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste aliquam, eum fugit aspernatur quibusdam dolorem vel, alias atque vitae optio delectus nostrum quia? Quam.",
		imgUrl: "https://images.unsplash.com/photo-1627834248396-e0892e56f83e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		timeAgo: "Hace 1 hora",
	},
	{
		idNew: 2,
		userAvatar: "https://unavatar.io/github/mdo",
		userName: "Edson Eduardo",
		title: "Contribuciones a la comunidad",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste aliquam, eum fugit aspernatur quibusdam dolorem vel, alias atque vitae optio delectus nostrum quia? Quam.",
		imgUrl: "https://images.unsplash.com/photo-1532262757596-f93a9d92f879?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		timeAgo: "Hace 2 horas",
	},
]

export function Promotions() {
	const { isAndroid } = usePlatform();

	return <View style={{
		backgroundColor: "pink",
		flex: 1,
	}}>
		<FlatList
			data={promotions}
			keyExtractor={(item) => item.idNew.toString()}
			style={{
				backgroundColor: "#f2f2f7",
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
							width: "100%",
							marginVertical: 12,
							borderWidth: 1,
							borderColor: "#ccc",
							paddingVertical: 24,
							paddingHorizontal: 20,
							backgroundColor: "white",
						}}>

						<Text style={{
							color: "#aaa",
							fontSize: 14,
							position: "absolute",
							top: 16,
							right: 16,
						}}>{item.timeAgo}</Text>

						<View style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 8,
						}}>
							<Image
								width={32}
								height={32}
								style={{
									borderRadius: 16,
								}}
								source={{ uri: item.userAvatar }} />
							<Text style={{
								fontSize: 16,
								color: "#181818",
							}}>{item.userName}</Text>
						</View>

						<Image
							source={{ uri: item.imgUrl }}
							style={{
								marginTop: 12,
								width: "100%",
								height: 200,
								borderRadius: 16,
							}} />
						<Text style={{
							fontSize: 19,
							fontWeight: "bold",
							color: "#181818",
							marginVertical: 16,
						}}>
							{item.title}</Text>
						<Text style={{
							fontSize: 17,
							color: "#aaa",
							lineHeight: 28,
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
