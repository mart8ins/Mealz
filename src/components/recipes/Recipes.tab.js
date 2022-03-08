import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { ChooseMeal } from "./components/chooseMeal/ChooseMeal";
import { NewRecipe } from "./components/newRecipe/NewRecipe";
import { Recipe } from "./components/recipe/Recipe";
import { MealRecipes } from "./components/mealRecipes/MealRecipes";

export const RecipesTab = () => {
    return (
        <Stack.Navigator initialRouteName="Choose meal">
            <Stack.Screen name="Choose meal" component={ChooseMeal} />
            <Stack.Screen name="Create recipe" component={NewRecipe} />
            <Stack.Screen name="Recipe" component={Recipe} />
            <Stack.Screen name="Meal recipes" component={MealRecipes} />
        </Stack.Navigator>
    );
};
