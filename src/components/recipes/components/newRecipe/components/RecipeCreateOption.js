import React, { useContext } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";

import { ChooseMeal } from "./components/ChooseMeal";
import { RecipeName } from "./components/RecipeName";
import { RecipePreperation } from "./components/RecipePreperation";
import { CaloriesPerServing } from "./components/CaloriesPerServing";
import { RecipeImage } from "./components/RecipeImage";
import { RecipeIngredients } from "./components/RecipeIngredients";
import { RecipePreview } from "./components/recipePreview/RecipePreview";

import { CreateNewRecipeContext } from "../../../../../context/CreateNewRecipeContext";

export const RecipeCreateOption = () => {
    const {
        optionScreen,
        canPreview,
        meal,
        setMeal,
        recipeName,
        setRecipeNameMeal,
        recipePreperation,
        setRecipePreperation,
        caloriesPerServing,
        setCaloriesPerServing,
        imageUri,
        setImageUri,
        recipeGroceries,
        setRecipeGroceries,
    } = useContext(CreateNewRecipeContext);

    return (
        <View style={styles.container}>
            {optionScreen === 1 && <ChooseMeal meal={meal} setMeal={setMeal} />}
            {optionScreen === 2 && (
                <View style={{ flex: 1 }}>
                    <RecipeName
                        recipeName={recipeName}
                        setRecipeNameMeal={setRecipeNameMeal}
                    />
                </View>
            )}
            {optionScreen === 3 && (
                <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
                    <RecipePreperation
                        recipePreperation={recipePreperation}
                        setRecipePreperation={setRecipePreperation}
                    />
                </KeyboardAvoidingView>
            )}
            {optionScreen === 4 && (
                <CaloriesPerServing
                    caloriesPerServing={caloriesPerServing}
                    setCaloriesPerServing={setCaloriesPerServing}
                />
            )}
            {optionScreen === 5 && (
                <RecipeImage imageUri={imageUri} setImageUri={setImageUri} />
            )}
            {optionScreen === 6 && (
                <RecipeIngredients
                    recipeGroceries={recipeGroceries}
                    setRecipeGroceries={setRecipeGroceries}
                    recipeName={recipeName}
                    meal={meal}
                />
            )}
            {optionScreen === 7 && canPreview && <RecipePreview />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 12,
    },
});
