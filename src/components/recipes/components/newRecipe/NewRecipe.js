import React from "react";
import { View, StyleSheet } from "react-native";

import { RecipeTitleForOptions } from "./components/RecipeTitleForOptions";
import { RecipeOptionsNavButtons } from "./components/RecipeOptionsNavButtons";
import { RecipeCreateOption } from "./components/RecipeCreateOption";
import { RecipeProgressBar } from "./components/RecipeProgressBar";
import { theme } from "../../../../styling";

export const NewRecipe = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <RecipeProgressBar />
            <RecipeTitleForOptions />
            <RecipeCreateOption />
            <RecipeOptionsNavButtons navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.background1,
    },
});
