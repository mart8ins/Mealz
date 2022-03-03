import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

// NAVIGATIONS
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// ICONS
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// COMPONENTS
import { ShoppingListTab } from "./src/components/shoppingList/Shopping-list.tab";
import { RecipesTab } from "./src/components/recipes/Recipes.tab";
import { HomeTab } from "./src/components/home/Home.tab";

// THEME
import { theme } from "./src/styling/index";

// CONTEXT
import { ShoppingContextProvider } from "./src/context/ShoppingListContext";
import { RecipesContextProvider } from "./src/context/RecipesContext";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <RecipesContextProvider>
                <ShoppingContextProvider>
                    <SafeAreaView style={{ flex: 1 }}>
                        <NavigationContainer>
                            <Tab.Navigator
                                initialRouteName="Shopping list"
                                screenOptions={{
                                    tabBarActiveTintColor:
                                        theme.colors.color.navigation,
                                    headerShown: false,
                                }}
                            >
                                <Tab.Screen
                                    name="Home"
                                    component={HomeTab}
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
                                    component={ShoppingListTab}
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
                                    component={RecipesTab}
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
                </ShoppingContextProvider>
            </RecipesContextProvider>

            <StatusBar status="auto" />
        </>
    );
}
