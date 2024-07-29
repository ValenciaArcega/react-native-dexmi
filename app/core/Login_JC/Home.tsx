import SafeKeyboardScroll from "@/app/layout/SafeKeyboardScroll"
import { Alert, Dimensions, Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Dropdown } from "./Components/Dropdown";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomPressable } from "./Components/Pressable";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useState } from "react";
const s = styles()
export const Home = () => {
    const { top, bottom } = useSafeAreaInsets();
    const [selected, setSelected] = useState<{ label: string, value: string }>(null);
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const handlePress = () => {
        if (selected) {
            navigation.navigate("IniciarSesion", { selectedClub: selected });
        } else {
            Alert.alert("Error", "Selecciona un club");
        }
    };
    return <>
        <View style={{ marginTop: top, marginBottom: bottom }}>
            <Image
                source={require("@/assets/img/Login_JC/fondo.jpg")} style={{ width: "100%", height: 480 }} />
        </View>
        {Platform.OS === "ios" ? (
            <View style={s.container}>
                <View style={s.imgLogo}>
                    <Image source={require("@/assets/img/Dexmi.png")} style={{ width: 70, height: 100, }} />
                </View>
                <Text style={s.txtDescription}>Selecciona tu club para acceder a Dexmi Sports</Text>
                <Dropdown onSelect={(value) => setSelected(value)} />
                <CustomPressable title="Siguiente" onPress={handlePress} />
            </View>
        ) : (
            <View style={s.container}>
                <View style={s.imgLogo}>
                    <Image source={require("@/assets/img/Dexmi.png")} style={{ width: 50, height: 70, }} />
                </View>
                <Text style={s.txtDescription}>Selecciona tu club para acceder a Dexmi Sports</Text>
                <Dropdown onSelect={(value) => setSelected(value)} />
                <CustomPressable title="Siguiente" onPress={handlePress} />
            </View>
        )}
    </>
}

export function styles() {
    return StyleSheet.create({
        container: {
            marginTop: Platform.OS === "ios" ? -100 : -100,
            backgroundColor: "#f2f2f2",
            height: "100%",
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            padding: 15,
            alignItems: "center",
        },
        imgLogo: {
            alignItems: "center",
            justifyContent: "center",
            marginTop: Platform.OS === "ios" ? 20 : 16,
            backgroundColor: "black",
            padding: Platform.OS === "ios" ? 20 : 50,
            borderRadius: 100,
            width: Platform.OS === "ios" ? 140 : 90,
            height: Platform.OS === "ios" ? 140 : 90,
        },
        txtHeader: {
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 20,
            textAlign: "center"
        },
        txtDescription: {
            fontSize: Platform.OS === "ios" ? 16 : 15,
            textAlign: "center",
            marginTop: 16,
            fontWeight: "bold",
        },
        btnNext: {
            backgroundColor: "black",
            width: "100%",
            height: 50,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: Platform.OS === "ios" ? 25 : 10,
            paddingHorizontal: 20,
        },
        txtButton: {
            color: "white",
            fontSize: Platform.OS === "ios" ? 16 : 15,
            fontWeight: "bold",
        }
    })
}