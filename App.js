import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from 'expo-font'
import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createStackNavigator()

// const theme = {
//   ...defaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: "transparent"
//   }
// }

const App = () => {
  const [loaded] = useFonts({
    
  })

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
