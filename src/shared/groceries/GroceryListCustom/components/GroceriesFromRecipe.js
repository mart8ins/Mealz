import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../../../styling/index";

export const GroceriesFromRecipe = ({ item, listId }) => {
    return (
        <View>
            <View style={styles.listItemContainer}>
                <View style={styles.itemDataContainer}>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                    <View style={styles.itemQuantityContainer}>
                        <Text style={styles.quantity}>
                            <Text style={styles.quantity_number}>
                                {item.quantity * item.portions}
                            </Text>{" "}
                            {item.unit}
                        </Text>
                    </View>
                </View>
                <View style={styles.recipeInfoContainer}>
                    <Text style={styles.recipeTitle}>
                        From recipe:{" "}
                        <Text style={styles.recipeName}>{item.recipe}</Text>
                    </Text>
                    <Text style={[styles.recipeTitle]}>
                        For {item.portions} portions
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.bg.dark,
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
        justifyContent: "space-between",
    },
    recipeTitle: {
        fontSize: theme.sizes.sm,
    },
    recipeName: {
        fontWeight: "bold",
    },
});
