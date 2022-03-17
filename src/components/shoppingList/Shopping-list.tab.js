import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../../styling";

const Stack = createNativeStackNavigator();

import { ShoppingListHome } from "./components/shoppingListHome/ShoppingListHome";
import { NewList } from "./components/newList/NewList";
import { ShoppingList } from "./components/shoppingList/ShoppingList";

export const ShoppingListTab = () => {
    return (
        <Stack.Navigator
            initialRouteName="All lists"
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.navigation.background1,
                },
                headerTitleStyle: {
                    color: theme.colors.navigation.color2,
                },
                headerTintColor: theme.colors.navigation.color1,
            }}
        >
            <Stack.Screen name="All lists" component={ShoppingListHome} />
            <Stack.Screen name="Create list" component={NewList} />
            <Stack.Screen name="My list" component={ShoppingList} />
        </Stack.Navigator>
    );
};
