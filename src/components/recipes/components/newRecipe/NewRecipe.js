import React from "react";
import { View, StyleSheet } from "react-native";

import { RecipeTitleForOptions } from "./components/RecipeTitleForOptions";
import { RecipeOptionsNavButtons } from "./components/RecipeOptionsNavButtons";
import { RecipeCreateOption } from "./components/RecipeCreateOption";
import { RecipeProgressBar } from "./components/RecipeProgressBar";

export const NewRecipe = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <RecipeTitleForOptions />
            <RecipeProgressBar />
            <RecipeCreateOption />
            <RecipeOptionsNavButtons navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
