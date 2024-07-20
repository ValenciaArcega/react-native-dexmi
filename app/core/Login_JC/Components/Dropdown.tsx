import { apiRequest } from "@/app/API/GeneralAPI";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from 'react-native-element-dropdown';

interface Club {
    value: string;
    label: string;
    image: any;
}
interface ApiResponse {
    success: boolean;
    message: string;
    listElementsDex: { id: string; name: string }[];
}
//image: require('@/assets/img/Login_JC/ame.png')
export const Dropdown = () => {
    const [country, setCountry] = useState<string>();
    const [local_data, setLocal_data] = useState<Club[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiRequest<ApiResponse>(
                    'https://kube.vde-suite.com/mx/dexmi/v1/sports/company/get',
                    'GET',
                    {},
                    { 'DEX-KEY': 'DexRules' }
                );
                const data = response.listElementsDex.map((element) => {
                    return {
                        value: element.id,
                        label: element.name,
                        image: require('@/assets/img/Login_JC/ame.png')
                    };
                });
                console.log(data);
                setLocal_data(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <SelectCountry
            search
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            iconStyle={styles.iconStyle}
            maxHeight={200}
            value={country}
            data={local_data}
            valueField="value"
            labelField="label"
            imageField="image"
            placeholder="Selecciona el club"
            searchPlaceholder="Buscar..."
            onChange={(e) => {
                setCountry(e.value);
            }}
        />
    );
};

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 70,
        width: "100%",
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        paddingHorizontal: 16,
    },
    imageStyle: {
        width: 30,
        height: 30,
        borderRadius: 12,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 17,
        marginLeft: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});