import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../../../styling";

export const AddGroceriesFromRecipeBtns = ({
    newShoppingList,
    recipeExistsInShoppingList,
    sendGroceriesToShoppingList,
}) => {
    return (
        <View>
            {newShoppingList.length === 0 && (
                <TouchableOpacity
                    style={styles.button}
                    onPress={sendGroceriesToShoppingList}
                >
                    <Text style={styles.buttonText}>
                        Send groceries to new shopping list
                    </Text>
                </TouchableOpacity>
            )}

            {newShoppingList.length > 0 &&
            recipeExistsInShoppingList === false ? (
                <TouchableOpacity
                    style={styles.button}
                    onPress={sendGroceriesToShoppingList}
                >
                    <Text style={styles.buttonText}>
                        Add to pending shopping list
                    </Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.bg.green,
        marginBottom: 10,
        alignSelf: "center",
        padding: theme.sizes.sm,
        borderRadius: 5,
    },
    buttonText: {
        alignSelf: "center",
        color: theme.colors.color.light,
        fontWeight: "bold",
        fontSize: 18,
    },
});
