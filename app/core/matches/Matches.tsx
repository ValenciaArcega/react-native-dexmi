import { appColors } from "@/app/constants/colors";
import { useFinder } from "@/app/hooks/useFinder";
import { CustomView } from "@/app/layout/CustomView";
import { LoaderActivity } from "@/app/components/LoaderActivity";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const HC_MATCHES = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?q=80&w=2373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Brujitas F.C. VSAlebrijes",
		location: "Bosques de Morelos, 54760 Cuautitlán Izcalli, Méx.",
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?q=80&w=2373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Pumas vs San Luis",
		location: "333 Post St Union Square",
	},
]

export function Matches() {
	const [isLoading, setIsLoading] = useState(true);
	const { items, setItems, setItemsBackup } = useFinder({ title: "Buscar", property: "title" });

	useFocusEffect(
		useCallback(() => {
			getMatches()
		}, [])
	);

	const getMatches = async function () {
		try {
			setItems(HC_MATCHES)
			setItemsBackup(HC_MATCHES)
		} finally {
			setIsLoading(false);
		}
	}

	if (isLoading) return <LoaderActivity />

	return <CustomView isSafeArea={true}>
		<FlatList
			data={items}
			keyExtractor={(item) => item.id.toString()}
			contentInsetAdjustmentBehavior="automatic"
			renderItem={({ item }) => (
				<TouchableOpacity style={{
					flexDirection: "row",
					backgroundColor: appColors.bgWhite,
					borderRadius: 12,
					padding: 10,
					marginTop: 18,
					height: 124,
					width: "92%",
					alignSelf: "center",
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 4,
					},
					shadowOpacity: 0.06,
					shadowRadius: 4,
					elevation: 5,
				}}>
					<Image
						source={{ uri: item.image }}
						style={{
							width: "30%",
							height: "100%",
							borderRadius: 12
						}} />
					<View style={{
						width: "70%",
						gap: 4,
						paddingTop: 10,
						paddingLeft: 10,
					}}>
						<Text style={{
							fontSize: 19,
							fontWeight: "bold",
						}}>{item.title}</Text>
						<Text style={{
							fontSize: 16,
							lineHeight: 22,
							color: appColors.p600,
						}}>{item.location}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	</CustomView>
}