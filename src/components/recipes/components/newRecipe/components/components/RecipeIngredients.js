import React from "react";
import uuid from "react-native-uuid";
import { GroceriesListInputs } from "../../../../../../shared/groceries/GroceriesListInputs";
import { GroceryListPreview } from "../../../../../../shared/groceries/GroceryListPreview";
import { Grocery } from "../../../../../../utils/Models";

export const RecipeIngredients = ({
    recipeGroceries,
    setRecipeGroceries,
    recipeName,
    meal,
}) => {
    const addItemToList = (item) => {
        if (item.name && item.quantity && item.unit) {
            const gro = new Grocery(
                uuid.v4(),
                item.name,
                item.quantity,
                item.unit,
                recipeName,
                meal,
                false
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
            <GroceryListPreview
                list={recipeGroceries}
                setListItems={setRecipeGroceries}
            />
        </>
    );
};
