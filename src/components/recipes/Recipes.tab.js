import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { RecipesHome } from "./components/recipesHome/RecipesHome";
import { NewRecipe } from "./components/newRecipe/NewRecipe";
import { Recipe } from "./components/recipe/Recipe";
import { MealRecipes } from "./components/mealRecipes/MealRecipes";

export const RecipesTab = () => {
    return (
        <Stack.Navigator initialRouteName="All recipes">
            <Stack.Screen name="All recipes" component={RecipesHome} />
            <Stack.Screen name="Create recipe" component={NewRecipe} />
            <Stack.Screen name="Recipe" component={Recipe} />
            <Stack.Screen name="Meal recipes" component={MealRecipes} />
        </Stack.Navigator>
    );
};
