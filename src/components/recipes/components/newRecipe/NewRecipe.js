import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { RecipeTitleForOptions } from "./components/RecipeTitleForOptions";
import { RecipeOptionsNavButtons } from "./components/RecipeOptionsNavButtons";
import { RecipeCreateOption } from "./components/RecipeCreateOption";
import { RecipeProgressBar } from "./components/RecipeProgressBar";

export const NewRecipe = () => {
    const [optionScreen, setOptionScreen] = useState(1);
    const [canPreview, setCanPreview] = useState(false);

    const [error, setError] = useState({
        message: "Cant save recipe beacuse all fields are not filled",
        status: false,
    });

    const [meal, setMeal] = useState(undefined);
    const [recipeName, setRecipeNameMeal] = useState("");
    const [recipePreperation, setRecipePreperation] = useState("");
    const [caloriesPerServing, setCaloriesPerServing] = useState(undefined);
    const [imageUri, setImageUri] = useState(undefined);
    const [recipeGroceries, setRecipeGroceries] = useState([]);

    const states = {
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
    };

    useEffect(() => {
        if (
            meal &&
            recipeName.length > 0 &&
            recipePreperation.length > 0 &&
            caloriesPerServing &&
            imageUri &&
            recipeGroceries.length > 0
        ) {
            return setCanPreview(true);
        }
        setCanPreview(false);
    }, [
        meal,
        recipeName,
        recipePreperation,
        caloriesPerServing,
        imageUri,
        recipeGroceries,
    ]);

    useEffect(() => {
        if (error.status === true) {
            alert("Plese check, there is missing data for recipe");
        }
    }, [error]);

    const saveRecipe = () => {
        console.log("save recepti");
    };
    return (
        <View style={styles.container}>
            <RecipeTitleForOptions optionScreen={optionScreen} />
            <RecipeProgressBar states={states} />
            <RecipeCreateOption
                states={states}
                optionScreen={optionScreen}
                canPreview={canPreview}
            />
            <RecipeOptionsNavButtons
                optionScreen={optionScreen}
                setOptionScreen={setOptionScreen}
                canPreview={canPreview}
                saveRecipe={saveRecipe}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// const recipe = {
//     id: `1`,
//     meal: "Dinner",
//     name: "Tortilla",
//     image: "imageeeee",
//     preperation: "put everything together",
//     calPerServing: "100cal",
//     ingredients: [
//         {
//             id: "1",
//             name: "Maize",
//             quantity: "1",
//             unit: "pc",
//             recipe: "Tortilla",
//         },
//         {
//             id: "2",
//             name: "Pupiņas",
//             quantity: "100",
//             unit: "gr",
//             recipe: "Tortilla",
//         },
//         {
//             id: "3",
//             name: "Gurkis",
//             quantity: "1",
//             unit: "pc",
//             recipe: "Tortilla",
//         },
//     ],
// };
