import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";
import { GrocerieListInputs } from "../../../../../shared/grocerieListInputs/GrocerieListInputs";

export const RecipeIngredients = ({ recipeGroceries, setRecipeGroceries }) => {
    const addItemToList = (item) => {
        if (item.name && item.quantity && item.unit) {
            setRecipeGroceries([...recipeGroceries, item]);
        }
    };

    console.log(recipeGroceries);
    return <GrocerieListInputs addItemToList={addItemToList} />;
};

const styles = StyleSheet.create({});
