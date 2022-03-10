import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../../../styling";

export const ChangePortionCountFromRecipe = ({
    newShoppingList,
    changeGroceriesInShoppingListPortions,
    addedToShoppingListTimes,
    recipeName,
}) => {
    return (
        <View style={styles.container}>
            {newShoppingList.length > 0 && (
                <View>
                    <Text>
                        Currently{" "}
                        <Text style={styles.count}>
                            {addedToShoppingListTimes}
                        </Text>{" "}
                        portion(s) in shopping list
                    </Text>
                </View>
            )}

            <View style={styles.countChangeBtnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => changeGroceriesInShoppingListPortions("+")}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        changeGroceriesInShoppingListPortions(
                            "-",
                            addedToShoppingListTimes,
                            recipeName
                        )
                    }
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
    },
    count: {
        fontWeight: "bold",
    },
    countChangeBtnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: theme.sizes.md,
    },

    button: {
        borderRadius: 5,
        backgroundColor: theme.colors.bg.dark,
    },
    buttonText: {
        flexDirection: "column",
        textAlign: "center",
        color: theme.colors.color.green,
        fontWeight: "bold",
        fontSize: 40,
        width: 50,
    },
});
