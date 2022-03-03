import React from "react";
import uuid from "react-native-uuid";
import { GrocerieListInputs } from "../../../../../../shared/grocerieListInputs/GrocerieListInputs";
import { GroceryListPreview } from "../../../../../../shared/groceryListPreview/GroceryListPreview";
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
            <GrocerieListInputs
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
