import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Recipe } from "../../../../utils/Models";
import uuid from "react-native-uuid";

import { RecipeTitleForOptions } from "./components/RecipeTitleForOptions";
import { RecipeOptionsNavButtons } from "./components/RecipeOptionsNavButtons";
import { RecipeCreateOption } from "./components/RecipeCreateOption";
import { RecipeProgressBar } from "./components/RecipeProgressBar";

import { RecipesContext } from "../../../../context/RecipesContext";
import { CreateNewRecipeContext } from "../../../../context/CreateNewRecipeContext";

export const NewRecipe = ({ navigation }) => {
    const {
        canPreview,
        meal,
        recipeName,
        recipePreperation,
        caloriesPerServing,
        imageUri,
        recipeGroceries,
    } = useContext(CreateNewRecipeContext);
    const { recipes, setRecipes } = useContext(RecipesContext);

    const saveRecipe = () => {
        if (canPreview) {
            const recipeToSave = new Recipe(
                uuid.v4(),
                meal,
                recipeName,
                recipePreperation,
                caloriesPerServing,
                imageUri,
                recipeGroceries
            );
            setRecipes([...recipes, recipeToSave]);
            navigation.navigate("Choose meal");
        }
    };
    return (
        <View style={styles.container}>
            <RecipeTitleForOptions />
            <RecipeProgressBar />
            <RecipeCreateOption />
            <RecipeOptionsNavButtons saveRecipe={saveRecipe} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
