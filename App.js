import { Router } from "@/app/routes/Router"
import Toast from 'react-native-toast-message'
import { toastConfig } from "@/app/components/Toast"
import { UserContext } from "@/app/context/UserContext"
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardAvoiderProvider } from "@/app/components/KeyboardScroll"

export default function App() {
  return (
    <NavigationContainer>
      <KeyboardAvoiderProvider>
        <UserContext>
          <GestureHandlerRootView>
            <Router />
            <Toast config={toastConfig} />
          </GestureHandlerRootView>
        </UserContext>
      </KeyboardAvoiderProvider>
    </NavigationContainer>
  )
}
