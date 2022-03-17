import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../../styling/index";

const Stack = createNativeStackNavigator();

import { ChooseMeal } from "./components/chooseMeal/ChooseMeal";
import { NewRecipe } from "./components/newRecipe/NewRecipe";
import { Recipe } from "./components/recipe/Recipe";
import { MealRecipes } from "./components/mealRecipes/MealRecipes";

export const RecipesTab = () => {
    return (
        <Stack.Navigator
            initialRouteName="Choose meal"
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
            <Stack.Screen name="Choose meal" component={ChooseMeal} />
            <Stack.Screen name="Create recipe" component={NewRecipe} />
            <Stack.Screen name="Recipe" component={Recipe} />
            <Stack.Screen name="Meal recipes" component={MealRecipes} />
        </Stack.Navigator>
    );
};
