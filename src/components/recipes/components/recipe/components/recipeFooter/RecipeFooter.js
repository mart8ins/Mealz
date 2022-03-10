import React from "react";
import { View, StyleSheet } from "react-native";
import { AddGroceriesFromRecipeBtns } from "./components/AddGroceriesFromRecipeBtns";
import { ChangePortionCountFromRecipe } from "./components/ChangePortionCountFromRecipe";

export const RecipeFooter = ({
    changeGroceriesInShoppingListPortions,
    sendGroceriesToShoppingList,
    newShoppingList,
    recipeData,
    recipeExistsInShoppingList,
    addedToShoppingListTimes,
}) => {
    return (
        <View style={styles.container}>
            <AddGroceriesFromRecipeBtns
                newShoppingList={newShoppingList}
                recipeExistsInShoppingList={recipeExistsInShoppingList}
                sendGroceriesToShoppingList={sendGroceriesToShoppingList}
            />

            {addedToShoppingListTimes > 0 && newShoppingList.length !== 0 && (
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
