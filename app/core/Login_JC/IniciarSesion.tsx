import { isiOS } from "@/app/constants/platform";
import { useUser } from "@/app/hooks/useUser";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { apiRequest } from "@/app/API/GeneralAPI";
import { useSafeAreas } from "@/app/hooks/useSafeAreas";
import { CustomPressable } from "./Components/Pressable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

interface ApiResponse {
    success: boolean;
    message: string;
    listElementsDex: { id: string; name: string }[];
}
export const IniciarSesion = ({ route }) => {
    const { selectedClub } = route.params;
    const { top, bottom } = useSafeAreaInsets();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const { heightHeader } = useSafeAreas()
    const { setGlobalUser } = useUser()

    const onPressLogin = async () => {
        try {
            const response = await apiRequest<ApiResponse>(
                'https://kube.vde-suite.com/mx/dexmi/v1/sports/login',
                'POST',
                { Login: [{ user: email, password: password }] },
                {
                    'Content-Type': 'application/json',
                    'DEX-KEY-ENV': "6235a64b5b8a5392808d67eec08e4b11"
                },
                { 'DEX-CHANNEL': 'AppMovil' }
            );
            const json = await response.listElementsDex[0]
            const flag = json.success

            if (flag) {
                setGlobalUser({
                    ID_USUARIO: 99,
                    NOMBRE: "Juan Martinez",
                    EMAIL: "jmartinez@vde-suite.com",
                    ID_CLUB: "6235a64b5b8a5392808d67eec08e4b11",
                })
            }
        } catch (error) {
            Alert.alert("Error", "Ocurrio un error al iniciar sesión, revisa que tus credenciales sean correctas")
        }
    };
    return (
        <View style={{ marginTop: top, marginBottom: bottom, flex: 1 }}>
            <View style={s.containerHeader}>
                <View style={s.menuHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Image source={require("@/assets/img/Dexmi.png")} style={{ width: 40, height: 60, }} />
                </View>
                <Text style={s.txtHeader}>Iniciar Sesión</Text>
            </View>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, minHeight: "100%", paddingBottom: 20 }}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps='handled'>
                <KeyboardAvoidingView
                    behavior={isiOS ? "padding" : "height"}
                    keyboardVerticalOffset={isiOS ? heightHeader + 100 : 0}
                    style={{ flex: 1, justifyContent: "flex-end" }}
                >
                    <View style={s.containerMain}>
                        <View style={s.clubCard}>
                            <View style={s.imgClub}>
                                <Image source={require('@/assets/img/Login_JC/ame.png')} style={{ width: 60, height: 60, }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Text style={s.txtClub}>{selectedClub.label}</Text>
                            </View>
                        </View>
                        <View style={s.containerInput}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Correo electrónico</Text>
                            <TextInput
                                style={s.txtInput}
                                autoCapitalize="none"
                                placeholder="Ingresa tu correo electrónico"
                                onChangeText={(text) => setEmail(text)}
                                inputMode={"email"} />

                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Contraseña</Text>
                            <TextInput
                                style={s.txtInput}
                                autoCapitalize="none"
                                placeholder="Ingresa tu contraseña"
                                onChangeText={(text) => setPassword(text)}
                                inputMode={"text"} />
                        </View>
                        <CustomPressable title="Iniciar Sesión" onPress={() => onPressLogin()} />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

const s = StyleSheet.create({
    containerHeader: {
        backgroundColor: "black",
        justifyContent: "center",
        padding: 25,
    },
    menuHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        marginBottom: 20,
    },
    containerMain: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f2f2f2",
    },
    txtHeader: {
        marginTop: 30,
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    clubCard: {
        flexDirection: "row",
        borderRadius: 12,
        padding: 10,
        height: "auto",
        alignItems: "center",
        backgroundColor: "#e8e8e8",
    },
    imgClub: {
        alignItems: "center",
        justifyContent: "center",
    },
    txtClub: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    containerInput: {
        padding: 10,
        marginTop: 16,
        gap: 18,
    },
    txtInput: {
        width: "100%",
        height: 55,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    }
})
