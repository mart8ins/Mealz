import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const RecipesContext = createContext();

export const RecipesContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getAllRecipes();
    }, []);
    const getAllRecipes = async () => {
        await AsyncStorage.removeItem("recipes");
        // const store = await AsyncStorage.getItem("recipes");
        // if (store !== null) {
        //     const recipesParsed = JSON.parse(store);
        //     if (recipesParsed.length > 0) {
        //         setRecipes(recipesParsed);
        //     }
        // }
    };
    useEffect(() => {
        updateRecipes();
    }, [recipes, setRecipes]);

    // UPDATE STORAGE
    const updateRecipes = async () => {
        if (recipes.length > 0) {
            const store = await JSON.stringify(recipes);
            await AsyncStorage.setItem("recipes", store);
        }
    };

    return (
        <RecipesContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipesContext.Provider>
    );
};
