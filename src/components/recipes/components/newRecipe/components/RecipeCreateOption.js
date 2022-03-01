import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";

import { ChooseMeal } from "./components/ChooseMeal";
import { RecipeName } from "./components/RecipeName";
import { RecipePreperation } from "./components/RecipePreperation";
import { CaloriesPerServing } from "./components/CaloriesPerServing";
import { RecipeImage } from "./components/RecipeImage";
import { RecipeIngredients } from "./components/RecipeIngredients";
import { RecipePreview } from "./components/recipePreview/RecipePreview";

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
                <View style={{ flex: 1 }}>
                    <RecipeName
                        recipeName={states.recipeName}
                        setRecipeNameMeal={states.setRecipeNameMeal}
                    />
                </View>
            )}
            {optionScreen === 3 && (
                <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
                    <RecipePreperation
                        recipePreperation={states.recipePreperation}
                        setRecipePreperation={states.setRecipePreperation}
                    />
                </KeyboardAvoidingView>
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
                    recipeName={states.recipeName}
                    meal={states.meal}
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
        flex: 12,
    },
});
