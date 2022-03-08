import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../styling/index";
// import { ShoppingListContext } from "../../context/ShoppingListContext";

export const NewContentButton = ({ navigation, routeTo }) => {
    // const { listItems } = useContext(ShoppingListContext);
    // const list = listItems.length > 0;
    const buttonText =
        routeTo === "Create recipe"
            ? "New recipe"
            : routeTo === "Create list" && list
            ? "Finish you list"
            : "New list";

    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate(routeTo)}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        alignSelf: "flex-end",
        padding: theme.sizes.sm,
    },
    button: {
        backgroundColor: theme.colors.bg.dark,
        borderRadius: 10,
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: theme.colors.color.light,
        fontWeight: "bold",
        fontSize: theme.sizes.md,
    },
});
