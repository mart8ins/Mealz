import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../styling/index";
import { ShopListContext } from "../../context/ShopListContext";
import { CreateNewRecipeContext } from "../../context/CreateNewRecipeContext";

export const NewContentButton = ({ navigation, routeTo }) => {
    const { newShoppingList } = useContext(ShopListContext);
    const { finishYourRecipe } = useContext(CreateNewRecipeContext);

    const list = newShoppingList.length > 0;

    const shoppingListText =
        routeTo === "Create list" && list ? "Finish your list" : "New list";

    const recipeText =
        routeTo === "Create recipe"
            ? finishYourRecipe
                ? "Finish you recipe"
                : "New recipe"
            : null;

    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate(routeTo)}>
                    {routeTo === "Create list" && (
                        <Text
                            style={[
                                styles.buttonText,
                                routeTo === "Create list" &&
                                    list &&
                                    styles.pendingList,
                            ]}
                        >
                            {shoppingListText}
                        </Text>
                    )}
                    {routeTo === "Create recipe" && (
                        <Text
                            style={[
                                styles.buttonText,
                                routeTo === "Create recipe" &&
                                    finishYourRecipe &&
                                    styles.pendingRecipe,
                            ]}
                        >
                            {recipeText}
                        </Text>
                    )}
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
        backgroundColor: theme.colors.navigation.background1,
        borderRadius: 10,
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: theme.colors.text.color2,
        fontWeight: "bold",
        fontSize: theme.sizes.md,
    },
    pendingList: {
        color: theme.colors.color.green,
    },
    pendingRecipe: {
        color: theme.colors.color.green,
    },
});
