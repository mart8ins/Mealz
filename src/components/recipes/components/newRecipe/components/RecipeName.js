import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";

export const RecipeName = ({ recipeName, setRecipeNameMeal }) => {
    return (
        <View
            style={[
                styles.container,
                recipeName.length > 0 && styles.validNameBorder,
            ]}
        >
            <TextInput
                onChangeText={(v) => setRecipeNameMeal(v)}
                style={styles.input}
                placeholder="Enter recipe name"
                blurOnSubmit={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: theme.sizes.md,
        borderBottomWidth: 1,
    },
    validNameBorder: {
        borderColor: theme.colors.color.green,
    },
    input: {
        padding: theme.sizes.md,
        fontSize: theme.sizes.md,
        textAlign: "left",
    },
});
