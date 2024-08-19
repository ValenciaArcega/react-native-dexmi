import { apiRequest, ApiResponse } from "@/app/API/GeneralAPI";
import { LoaderActivity } from "@/app/components/LoaderActivity";
import { HC_PROMOTIONS } from "@/app/constants/hardCode";
import { useNavigateApp } from "@/app/hooks/useNavigateApp";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export function Promotions() {
	const navigation = useNavigateApp()
	const [promociones, setPromociones] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getPromotions()
	}, [])

	const getPromotions = async function () {
		try {
			const response = await apiRequest<ApiResponse>("https://kube.vde-suite.com/mx/dexmi/v1/sports/notifications", "POST",
				{
					"Notifications": [
						{
							"user": "d29f894ad6c901bc3fac1ab078020264",
							"model": "news"
						}
					]
				},
				{ "Content-Type": "application/json" },
				{ "DEX-KEY-ENV": "6235a64b5b8a5392808d67eec08e4b11" },
			)
			setPromociones(response.listElementsDex);
		} catch (error) {
			console.log(error);
		}
		finally {
			setIsLoading(false);
		}
	}

	if (isLoading) {
		return <LoaderActivity />
	}

	return <View style={{
		backgroundColor: "pink",
		flex: 1,
	}}>
		<FlatList
			data={promociones}
			keyExtractor={(item) => item.message.title.toString()}
			style={{
				backgroundColor: "#f2f2f7",
				minWidth: "100%",
			}}
			/* ListEmptyComponent={() => (
				<Text style={{ fontSize: 22, marginTop: "50%", textAlign: "center", color: "gray", lineHeight: 36, paddingHorizontal: 16 }}> Aún no tienes una sucursal, da click al botón de <Text style={{ color: "black", fontSize: 32, }}>+</Text> para agregar una nueva.</Text>
			)} */
			renderItem={({ item, index }) => {
				return (
					<TouchableOpacity
						key={index}
						onPress={() => navigation.navigate("DetailsNew", item.message)}
						style={{
							width: "100%",
							marginVertical: 12,
							borderWidth: 1,
							borderColor: "#ccc",
							paddingVertical: 24,
							paddingHorizontal: 20,
							backgroundColor: "white",
						}}>
						{/*
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
						</View> */}

						<Image
							source={{ uri: item.message.image }}
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
							{item.message.title}</Text>
						<Text style={{
							fontSize: 17,
							color: "#aaa",
							lineHeight: 28,
						}}>
							{item.message.resume}</Text>
					</TouchableOpacity>
				)
			}}
		/>
	</View>
}
