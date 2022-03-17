import React from "react";
import { View, StyleSheet } from "react-native";
import { AddGroceriesFromRecipeBtns } from "./components/AddGroceriesFromRecipeBtns";
import { ChangePortionCountFromRecipe } from "./components/ChangePortionCountFromRecipe";

export const RecipeFooter = ({
    changeGroceriesInShoppingListPortions,
    sendGroceriesToShoppingList,
    recipeData,
    recipeExistsInShoppingList,
    addedToShoppingListTimes,
    newShoppingList,
}) => {
    return (
        <View style={styles.container}>
            <AddGroceriesFromRecipeBtns
                newShoppingList={newShoppingList}
                recipeExistsInShoppingList={recipeExistsInShoppingList}
                sendGroceriesToShoppingList={sendGroceriesToShoppingList}
            />

            {recipeExistsInShoppingList && (
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
        paddingBottom: 20,
    },
});
