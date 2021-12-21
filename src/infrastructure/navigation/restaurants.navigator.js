import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurant/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurant/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};
export const RestaurantsNavigator = () => {
  return (
    // headerMode="none" use also that insist of screenOption    headerShown: false,
    <RestaurantStack.Navigator screenOptions={createScreenOptions}>
      <RestaurantStack.Screen name="Retaurant" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
