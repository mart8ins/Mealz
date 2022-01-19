import { StatusBar } from "expo-status-bar";

// NAVIGATIONS
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// ICONS
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// COMPONENTS
import { ShoppingListScreen } from "./src/components/shoppingList/Shopping-list.screen";
import { RecipesScreen } from "./src/components/recipes/Recipes.screen";
import { HomeScreen } from "./src/components/home/Home.screen";

import { SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Home"
                        screenOptions={{
                            tabBarActiveTintColor: "#B0B22B",
                            headerShown: false,
                        }}
                    >
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Ionicons
                                        name="ios-home"
                                        size={size}
                                        color={color}
                                    />
                                ),
                            }}
                        />

                        <Tab.Screen
                            name="Shopping list"
                            component={ShoppingListScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesome
                                        name="list-ul"
                                        size={size}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Recipes"
                            component={RecipesScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesome
                                        name="book"
                                        size={size}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
            <StatusBar status="auto" />
        </>
    );
}
