import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { AddGroceriesFromRecipeBtns } from "./components/AddGroceriesFromRecipeBtns";
import { ChangePortionCountFromRecipe } from "./components/ChangePortionCountFromRecipe";

export const RecipeFooter = ({
    changeGroceriesInShoppingListPortions,
    sendGroceriesToShoppingList,
    newShoppingList,
    recipeData,
    recipeExistsInShoppingList,
    setRecipeExistsInShoppingList,
    addedToShoppingListTimes,
    setAddedToShoppingListTimes,
}) => {
    useEffect(() => {
        newShoppingList.forEach((grocery) => {
            if (grocery.recipe === recipeData.recipeName) {
                setRecipeExistsInShoppingList(true);
                setAddedToShoppingListTimes(grocery.portions);
            } else {
                setRecipeExistsInShoppingList(false);
            }
        });
    }, [newShoppingList]);

    return (
        <View style={styles.container}>
            {addedToShoppingListTimes === 0 && (
                <AddGroceriesFromRecipeBtns
                    newShoppingList={newShoppingList}
                    recipeExistsInShoppingList={recipeExistsInShoppingList}
                    sendGroceriesToShoppingList={sendGroceriesToShoppingList}
                />
            )}

            {addedToShoppingListTimes > 0 && (
                <ChangePortionCountFromRecipe
                    newShoppingList={newShoppingList}
                    changeGroceriesInShoppingListPortions={
                        changeGroceriesInShoppingListPortions
                    }
                    addedToShoppingListTimes={addedToShoppingListTimes}
                    recipeName={recipeData.recipeName}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
    },
});
