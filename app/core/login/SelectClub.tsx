import { Alert, Image, ImageBackground, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useNavigateApp } from "@/app/hooks/useNavigateApp";
import Combobox from "@/app/components/Combobox";
import { apiRequest } from "@/app/API/GeneralAPI";
import { Ionicons } from "@expo/vector-icons";
import { LoaderActivity } from "@/app/components/LoaderActivity";

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

export default function SelectClub() {
    const { navigateTo } = useNavigateApp()
    const [clubSelected, setClubSelected] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async function () {
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
            setClubSelected(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const goLogin_onPress = function () {
        if (clubSelected) navigateTo("IniciarSesion", {
            selectedClub: clubSelected
        })
        else Alert.alert("Error al avanzar", "Selecciona un club");
    }

    if (isLoading) return <LoaderActivity />

    return <ImageBackground
        source={require("@/assets/img/Login_JC/fondo.jpg")}
        resizeMode="cover"
        className="h-[70%] justify-end">
        <View className="h-[40%] mt-3 bg-white p-6 rounded-tl-[38] rounded-tr-[38]">
            <View style={s.imgLogo}>
                <Image className="w-16 h-24"
                    source={require("@/assets/img/Dexmi.png")} />
            </View>

            <Text className="text-lg mt-8">Selecciona tu club</Text>
            <Combobox
                data={clubSelected}
                labelField="label"
                valueField="value"
                value={clubSelected.value}
                setValue={setClubSelected}
                iconName="football" />
            <Pressable
                onPress={goLogin_onPress}
                className="mt-8 h-16 bg-black w-[100%] rounded-3xl items-center justify-center flex-row">
                <Text className="text-white text-2xl mr-2">Siguiente</Text>
                <Ionicons name="arrow-forward" size={24} color="white" />
            </Pressable>
        </View>
    </ImageBackground>
}

const HC_CLUBS = [
    { ID: 1, D_: "Club America", },
    { ID: 2, D_: "Club Cuervos", },
    { ID: 3, D_: "Club New Castle", },
]

const s = StyleSheet.create({
    imgLogo: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginTop: Platform.OS === "ios" ? 20 : 16,
        backgroundColor: "black",
        padding: Platform.OS === "ios" ? 20 : 50,
        borderRadius: 100,
        width: Platform.OS === "ios" ? 140 : 90,
        height: Platform.OS === "ios" ? 140 : 90,
    },
})
