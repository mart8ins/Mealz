import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import { theme } from "../../../../styling/index";

import { ChooseMeal } from "./components/ChooseMeal";
import { RecipeName } from "./components/RecipeName";
import { RecipePreperation } from "./components/RecipePreperation";
import { CaloriesPerServing } from "./components/CaloriesPerServing";
import { RecipeImage } from "./components/RecipeImage";
import { RecipeIngredients } from "./components/RecipeIngredients";

export const NewRecipe = () => {
    const [meal, setMeal] = useState(undefined);
    const [recipeName, setRecipeNameMeal] = useState("");
    const [recipePreperation, setRecipePreperation] = useState("");
    const [caloriesPerServing, setCaloriesPerServing] = useState(undefined);
    const [imageUri, setImageUri] = useState(undefined);
    const [recipeGroceries, setRecipeGroceries] = useState([]);

    return (
        <KeyboardAvoidingView style={styles.container} behavior={"height"}>
            <ScrollView style={{ paddingBottom: 120 }}>
                <View>
                    <ChooseMeal setMeal={setMeal} meal={meal} />
                    <RecipeName
                        recipeName={recipeName}
                        setRecipeNameMeal={setRecipeNameMeal}
                    />

                    <RecipePreperation
                        recipePreperation={recipePreperation}
                        setRecipePreperation={setRecipePreperation}
                    />

                    <CaloriesPerServing
                        caloriesPerServing={caloriesPerServing}
                        setCaloriesPerServing={setCaloriesPerServing}
                    />

                    <RecipeImage
                        imageUri={imageUri}
                        setImageUri={setImageUri}
                    />

                    <RecipeIngredients
                        recipeGroceries={recipeGroceries}
                        setRecipeGroceries={setRecipeGroceries}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});

const recipe = {
    id: `1`,
    meal: "Dinner",
    name: "Tortilla",
    image: "imageeeee",
    preperation: "put everything together",
    calPerServing: "100cal",
    ingredients: [
        {
            id: "1",
            name: "Maize",
            quantity: "1",
            unit: "pc",
            recipe: "Tortilla",
        },
        {
            id: "2",
            name: "Pupiņas",
            quantity: "100",
            unit: "gr",
            recipe: "Tortilla",
        },
        {
            id: "3",
            name: "Gurkis",
            quantity: "1",
            unit: "pc",
            recipe: "Tortilla",
        },
    ],
};
