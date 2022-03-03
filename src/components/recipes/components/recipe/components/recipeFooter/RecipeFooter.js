import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ShoppingListContext } from "../../../../../../context/ShoppingListContext";

export const RecipeFooter = ({ recipe, navigation }) => {
    const { shoppingLists, setShoppingLists } = useContext(ShoppingListContext);
    const { recipeId, meal, recipeName, caloriesPerServing, recipeGroceries } =
        recipe;

    const sendGroceriesToShoppingList = () => {
        console.log("Sending grocery list to shopping list");
    };
    return (
        <View style={styles.container}>
            <Text>Delete</Text>
            <Text onPress={sendGroceriesToShoppingList}>
                Send groceries to shopping list
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 40,
    },
});
