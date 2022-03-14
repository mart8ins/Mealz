import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { GroceriesFromNewList } from "./components/GroceriesFromNewList";
import { GroceriesFromRecipe } from "./components/GroceriesFromRecipe";
import { ShopListContext } from "../../../context/ShopListContext";

export const GroceryListCustom = ({ listId }) => {
    const { newShoppingList } = useContext(ShopListContext);

    const renderItem = ({ item }) => {
        return (
            <View>
                {!item.recipe ? (
                    <GroceriesFromNewList listId={listId} item={item} />
                ) : (
                    <GroceriesFromRecipe listId={listId} item={item} />
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {newShoppingList.length > 0 ? (
                <FlatList
                    data={newShoppingList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.noGroceriesToShow}>
                    <Text>No groceries to show!</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 30,
    },
    noGroceriesToShow: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

// "checked": false,
//   "id": "81aabc53-48c5-4b00-9cc1-10056f3b0f22",
//   "meal": "Breakfast",
//   "name": "Olas",
//   "portions": 1,
//   "quantity": 2,
//   "recipe": "Pankots",
//   "unit": "pc",
