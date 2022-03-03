import React from "react";
import { View, StyleSheet } from "react-native";
import { RecipeTopImage } from "./components/RecipeTopImage";
import { RecipePreperation } from "./components/RecipePreperation";

export const RecipeHeader = ({
    recipeName,
    caloriesPerServing,
    imageUri,
    recipePreperation,
}) => {
    return (
        <View style={styles.container}>
            <RecipeTopImage
                recipeName={recipeName}
                caloriesPerServing={caloriesPerServing}
                imageUri={imageUri}
            />
            <RecipePreperation recipePreperation={recipePreperation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
