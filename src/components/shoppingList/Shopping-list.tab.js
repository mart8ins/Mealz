import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// import { ShoppingListHome } from "./components/shoppingListHome/ShoppingListHome";
// import { NewList } from "./components/newList/NewList";
// import { ShoppingList } from "./components/shoppingList/ShoppingList";

export const ShoppingListTab = () => {
    return (
        <View>
            <Text>ShoppingListTab</Text>
        </View>
    );
    // <Stack.Navigator initialRouteName="All lists">
    /* <Stack.Screen name="All lists" component={ShoppingListHome} />
            <Stack.Screen name="Create list" component={NewList} />
            <Stack.Screen name="My list" component={ShoppingList} /> */
    // </Stack.Navigator>
    // );
};
