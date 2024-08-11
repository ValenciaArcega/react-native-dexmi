import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

export function useNavigateApp() {
	const navigation: NavigationProp<ParamListBase> = useNavigation();

	return navigation
}