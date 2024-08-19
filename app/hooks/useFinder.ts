import { useLayoutEffect, useState } from "react";
import { useNavigateApp } from "./useNavigateApp";

type FinderProps = {
	title?: string
	property?: string | number
}

export function useFinder({
	title = "Buscar",
	property
}: FinderProps) {
	const navigation = useNavigateApp()
	const [items, setItems] = useState([]);
	const [itemsBackup, setItemsBackup] = useState([]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				placeHolder: title,
				onChangeText: e => {
					const searchText = e.nativeEvent.text.toLowerCase();

					if (searchText === '') setItems(itemsBackup);
					else {
						// if (branches.length === 0) return
						const filteredData = itemsBackup.filter(n =>
							n?.[property].toLowerCase().includes(searchText)
						);
						setItems(filteredData);
					}
				},
			},
		})
	}, [navigation, items])

	return {
		items,
		setItems,
		setItemsBackup,
	}
}