import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../../styling";

export const RecipeFooter = ({ recipe, navigation }) => {
    // FUNCTIONS
    //  **************** SEND GROCERIES FROM RECIPE TO SHOPPING LIST
    const sendGroceriesToShoppingList = () => {
        console.log("Sending grocery list to shopping list");
    };

    //  **************** INCREASE GROCERIES IN SHOPPING LIST
    const increaseGroceriesInShoppingList = () => {
        console.log("Increase");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={sendGroceriesToShoppingList}
            >
                <Text style={styles.buttonText}>
                    Add to pending shopping list
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={sendGroceriesToShoppingList}
            >
                <Text style={styles.buttonText}>
                    Send groceries to new shopping list
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={increaseGroceriesInShoppingList}
            >
                <Text style={styles.buttonText}>Increase portion</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 35,
        padding: theme.sizes.md,
    },
    button: {
        backgroundColor: theme.colors.bg.dark,
        marginBottom: 10,
    },
    buttonText: {
        color: theme.colors.color.light,
        padding: theme.sizes.md,
        textAlign: "center",
    },
});

// Object {
//     "checked": false,
//     "id": "11b523f8-8eb0-4030-8aad-7b56552ee6f7",
//     "meal": "Breakfast",
//     "name": "Olas",
//     "quantity": "2",
//     "recipe": "Penkots",
//     "unit": "pc",
//   }
