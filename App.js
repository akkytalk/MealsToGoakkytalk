import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Text } from "./src/components/typography/text.component";
import { Ionicons } from "@expo/vector-icons";
import { RestuarantsContextProvider } from "./src/services/restuarants/restuarants.context";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurant: "md-restaurant",
  Maps: "md-map",
  Settings: "md-settings",
};
const SettingScreen = () => {
  return (
    <SafeArea>
      <Text variant="label">Setting</Text>
    </SafeArea>
  );
};

const MapsScreen = () => {
  return (
    <SafeArea>
      <Text variant="label">Maps</Text>
    </SafeArea>
  );
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              // tabBarOptions={{
              //   activeTintColor: "tomato",
              //   inactiveTintColor: "gray",
              // }}
            >
              <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
              <Tab.Screen name="Maps" component={MapsScreen} />
              <Tab.Screen name="Settings" component={SettingScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestuarantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
