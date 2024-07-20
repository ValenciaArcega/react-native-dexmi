import { Router } from "@/app/routes/Router"
import Toast from 'react-native-toast-message'
import { toastConfig } from "@/app/components/Toast"
import { UserContext } from "@/app/context/UserContext"
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <NavigationContainer>
      <UserContext>
        <GestureHandlerRootView>
          <Router />
          <Toast config={toastConfig} />
        </GestureHandlerRootView>
      </UserContext>
    </NavigationContainer>
  )
}
