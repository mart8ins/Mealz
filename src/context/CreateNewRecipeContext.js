import React, { createContext, useState, useEffect } from "react";

export const CreateNewRecipeContext = createContext();

export const CreateNewRecipeProvider = ({ children }) => {
    const [optionScreen, setOptionScreen] = useState(1);
    const [canPreview, setCanPreview] = useState(false);
    const [meal, setMeal] = useState(undefined);
    const [recipeName, setRecipeNameMeal] = useState("");
    const [recipePreperation, setRecipePreperation] = useState("");
    const [caloriesPerServing, setCaloriesPerServing] = useState(undefined);
    const [imageUri, setImageUri] = useState(undefined);
    const [recipeGroceries, setRecipeGroceries] = useState([]);

    const [finishYourRecipe, setFinishYourRecipe] = useState(false);

    const clearStates = () => {
        setOptionScreen(1);
        setCanPreview(false);
        setMeal(undefined);
        setRecipeNameMeal("");
        setRecipePreperation("");
        setCaloriesPerServing(undefined);
        setImageUri(undefined);
        setRecipeGroceries([]);
    };

    useEffect(() => {
        if (
            meal ||
            recipeName.length > 0 ||
            recipePreperation.length > 0 ||
            caloriesPerServing ||
            imageUri ||
            recipeGroceries.length > 0
        ) {
            setFinishYourRecipe(true);
        } else {
            setFinishYourRecipe(false);
        }
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

    return (
        <CreateNewRecipeContext.Provider
            value={{
                optionScreen,
                setOptionScreen,
                canPreview,
                setCanPreview,
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
                clearStates,
                finishYourRecipe,
            }}
        >
            {children}
        </CreateNewRecipeContext.Provider>
    );
};
