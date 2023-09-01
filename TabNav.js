import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import StoreScreen from "./pages/StoreScreen";
import SearchScreen from "./pages/SearchScreen";
import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";
import ProfileScreen from "./pages/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

export default function TabNav() {
  const consumerTabs = [
    { name: "Store", component: StoreScreen, icon: "shopping" },
    { name: "Search", component: SearchScreen, icon: "magnify" },
    { name: "Home", component: HomeScreen, icon: "home" },
    { name: "Cart", component: CartScreen, icon: "cart" },
    { name: "Profile", component: ProfileScreen, icon: "account" },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationType="shifting"
      sceneAnimationEnabled={false}
      activeColor="#007CC2"
      barStyle={{
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderTopColor: "lightgray",
      }}
    >
      {consumerTabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.name,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name={tab.icon} color={color} size={26} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
