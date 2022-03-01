import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { theme } from "../../../../../../styling/index";

export const RecipeName = ({ recipeName, setRecipeNameMeal }) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(v) => setRecipeNameMeal(v)}
                style={[
                    styles.input,
                    recipeName.length > 0 && styles.validNameBorder,
                ]}
                placeholder="Enter recipe name"
                blurOnSubmit={true}
                value={recipeName}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: theme.sizes.md,
    },
    validNameBorder: {
        borderColor: theme.colors.color.green,
    },
    input: {
        padding: theme.sizes.md,
        fontSize: theme.sizes.md,
        textAlign: "left",
        borderLeftWidth: 1,
        borderBottomWidth: 2,
    },
});
