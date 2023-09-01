import TabNav from "./TabNav";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "./pages/ProductScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNav"
          options={{
            headerBackTitleVisible: false,
            title: "My E-Commerce App",
          }}
          component={TabNav}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
