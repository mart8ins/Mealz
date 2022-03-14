import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { GroceriesListItems } from "./components/GroceriesListItems";

// ja ir listId, tatad skatās gatavu listi u jābūt checkboxam

export const GroceryListCustom = ({
    listId,
    recipePreview,
    groceriesList = [],
    setGroceriesList,
    allShoppingLists,
    setAllShoppingLists,
}) => {
    const renderItem = ({ item }) => {
        return (
            <View>
                <GroceriesListItems
                    item={item}
                    listId={listId}
                    recipePreview={recipePreview}
                    groceriesList={groceriesList}
                    setGroceriesList={setGroceriesList}
                    allShoppingLists={allShoppingLists}
                    setAllShoppingLists={setAllShoppingLists}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {groceriesList.length > 0 ? (
                <FlatList
                    data={groceriesList}
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
