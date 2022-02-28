import React from "react";
import { View, StyleSheet } from "react-native";

import { ChooseMeal } from "./components/ChooseMeal";
import { RecipeName } from "./components/RecipeName";
import { RecipePreperation } from "./components/RecipePreperation";
import { CaloriesPerServing } from "./components/CaloriesPerServing";
import { RecipeImage } from "./components/RecipeImage";
import { RecipeIngredients } from "./components/RecipeIngredients";
import { RecipePreview } from "./components/RecipePreview";

export const RecipeCreateOption = ({
    optionScreen = 1,
    states,
    canPreview,
}) => {
    return (
        <View style={styles.container}>
            {optionScreen === 1 && (
                <ChooseMeal meal={states.meal} setMeal={states.setMeal} />
            )}
            {optionScreen === 2 && (
                <RecipeName
                    recipeName={states.recipeName}
                    setRecipeNameMeal={states.setRecipeNameMeal}
                />
            )}
            {optionScreen === 3 && (
                <RecipePreperation
                    recipePreperation={states.recipePreperation}
                    setRecipePreperation={states.setRecipePreperation}
                />
            )}
            {optionScreen === 4 && (
                <CaloriesPerServing
                    caloriesPerServing={states.caloriesPerServing}
                    setCaloriesPerServing={states.setCaloriesPerServing}
                />
            )}
            {optionScreen === 5 && (
                <RecipeImage
                    imageUri={states.imageUri}
                    setImageUri={states.setImageUri}
                />
            )}
            {optionScreen === 6 && (
                <RecipeIngredients
                    recipeGroceries={states.recipeGroceries}
                    setRecipeGroceries={states.setRecipeGroceries}
                />
            )}
            {optionScreen === 7 && canPreview && (
                <RecipePreview states={states} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 8,
    },
});
