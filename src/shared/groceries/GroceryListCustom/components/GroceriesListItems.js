import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../../../styling/index";
import { ListItemOptionButton } from "./ListItemOptionButton";

export const GroceriesListItems = ({
    item,
    listId,
    recipePreview,
    groceriesList,
    setGroceriesList,
    allShoppingLists,
    setAllShoppingLists,
}) => {
    console.log(item);
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.itemDataContainer}>
                <View style={styles.itemNameContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <View style={styles.itemQuantityContainer}>
                    <Text style={styles.quantity}>
                        <Text style={styles.quantity_number}>
                            {item.portions
                                ? item.quantity * item.portions
                                : item.quantity}
                        </Text>{" "}
                        {item.unit}
                    </Text>
                </View>
                <ListItemOptionButton
                    listId={listId}
                    item={item}
                    groceriesList={groceriesList}
                    setGroceriesList={setGroceriesList}
                    allShoppingLists={allShoppingLists}
                    setAllShoppingLists={setAllShoppingLists}
                />
            </View>

            {!recipePreview && item.recipe && (
                <View style={styles.recipeInfoContainer}>
                    <Text style={styles.recipeTitle}>
                        From recipe:{" "}
                        <Text style={styles.recipeName}>{item.recipe}</Text>
                    </Text>
                    <Text style={[styles.recipeTitle]}>
                        For {item.portions} portions
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        borderRadius: 4,
        backgroundColor: theme.colors.background.background5,
        padding: theme.sizes.sm,
        margin: theme.sizes.sm,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    itemDataContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 5,
    },
    itemNameContainer: {
        flex: 1,
        justifyContent: "center",
    },
    itemName: {
        color: theme.colors.color.dark,
        textAlign: "left",
        fontSize: theme.sizes.md,
    },
    itemQuantityContainer: {
        marginRight: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    quantity: {
        color: theme.colors.color.dark,
        margin: 1,
        fontSize: theme.sizes.md,
    },
    quantity_number: {
        fontWeight: "bold",
    },
    recipeInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    recipeTitle: {
        fontSize: theme.sizes.sm,
    },
    recipeName: {
        fontWeight: "bold",
    },
});
