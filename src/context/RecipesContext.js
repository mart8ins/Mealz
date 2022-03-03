import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const RecipesContext = createContext();

export const RecipesContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        updateRecipes();
    }, [recipes, setRecipes]);

    // UPDATE STORAGE
    const updateRecipes = async () => {
        try {
            if (recipes.length > 0) {
                const store = await JSON.stringify(recipes);
                await AsyncStorage.setItem("recipes", store);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <RecipesContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipesContext.Provider>
    );
};
