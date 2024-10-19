import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from "@expo/vector-icons";
import { appColors } from "../constants/colors";
import { DropDownListProps } from "@/app/types/componentProps";

const shadowDropdownList = {
	shadowColor: '#000',
	shadowOffset: {
		width: 0,
		height: 1,
	},
	shadowOpacity: 0.2,
	shadowRadius: 1.41,
	elevation: 2,
};

export default function Combobox({
	data,
	value,
	setValue,
	placeholder = "Selecciona una opción",
	search = false,
	valueField,
	labelField,
	iconName = "albums-outline",
	style,
}: DropDownListProps) {
	const mappedData = data.map(item => ({
		value: item[valueField],
		label: item[labelField]
	}));

	return (
		<Dropdown
			style={[styles.dropdown, { ...style }]}
			placeholderStyle={styles.placeholderStyle}
			selectedTextStyle={styles.selectedTextStyle}
			inputSearchStyle={styles.inputSearchStyle}
			itemTextStyle={styles.itemTextStyle}
			itemContainerStyle={styles.itemContainerStyle}
			iconStyle={styles.iconExpandStyle}
			containerStyle={styles.containerStyle}
			showsVerticalScrollIndicator={false}
			maxHeight={300}
			dropdownPosition="bottom"
			searchPlaceholder="Buscar..."
			renderLeftIcon={() => (
				<Ionicons
					style={styles.icon}
					color={appColors.p700}
					name={iconName} size={28} />
			)}
			data={mappedData}
			search={search}
			valueField="value"
			labelField="label"
			placeholder={placeholder}
			value={value}
			onChange={(item) => setValue(item.value)}
			renderItem={(item) => (
				<View style={[styles.item]}>
					<Text style={styles.textItem}>{item.label}</Text>
					{item.value === value && (
						<Ionicons name="checkmark" size={24} color={appColors.s500} />
					)}
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown: {
		height: 54,
		width: "100%",
		marginTop: 6,
		backgroundColor: appColors.bgInput,
		borderRadius: 12,
		// padding: 12,
		paddingHorizontal: 16,
		...shadowDropdownList,
	},
	containerStyle: {
		borderRadius: 12,
		color: 'black',
	},
	itemContainerStyle: {
		borderRadius: 12,
		color: '#000',
	},
	itemTextStyle: {
		color: 'black',
	},
	icon: {
		marginRight: 12,
	},
	item: {
		padding: 17,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: '#000',
	},
	textItem: {
		flex: 1,
		fontSize: 19,
		color: '#000',
	},
	placeholderStyle: {
		fontSize: 19,
		color: 'gray',
	},
	selectedTextStyle: {
		fontSize: 19,
		color: appColors.p800,
		lineHeight: 40,
	},
	iconExpandStyle: {
		width: 28,
		height: 28,
	},
	inputSearchStyle: {
		fontSize: 17,
		paddingHorizontal: 12,
		borderRadius: 12,
		color: '#000',
	},
});
