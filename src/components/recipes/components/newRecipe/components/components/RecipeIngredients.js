import React from "react";
import uuid from "react-native-uuid";
import { GroceriesListInputs } from "../../../../../../shared/groceries/GroceriesListInputs";
import { GroceryListCustom } from "../../../../../../shared/groceries/GroceryListCustom/GroceryListCustom";
import { Grocery } from "../../../../../../utils/Models";

export const RecipeIngredients = ({
    recipeGroceries,
    setRecipeGroceries,
    recipeName,
    meal,
}) => {
    const addItemToList = (item) => {
        if (item.name && item.quantity && item.unit) {
            let n = Number(item.quantity);
            const gro = new Grocery(
                uuid.v4(),
                item.name,
                n,
                item.unit,
                recipeName,
                meal,
                false,
                1
            );
            setRecipeGroceries([...recipeGroceries, gro]);
        }
    };
    return (
        <>
            <GroceriesListInputs
                addItemToList={addItemToList}
                autoFocus={false}
            />
            <GroceryListCustom
                groceryList={recipeGroceries}
                updateListItems={setRecipeGroceries}
            />
        </>
    );
};
