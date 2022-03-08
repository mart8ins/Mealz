import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";
import { CreateNewRecipeContext } from "../../../../../context/CreateNewRecipeContext";

export const RecipeProgressBar = () => {
    const {
        meal,
        recipeName,
        recipePreperation,
        caloriesPerServing,
        imageUri,
        recipeGroceries,
    } = useContext(CreateNewRecipeContext);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let track = 0;
        meal && track++;
        recipeName && track++;
        recipePreperation && track++;
        caloriesPerServing && track++;
        imageUri && track++;
        recipeGroceries.length > 0 && track++;
        setProgress(track);
    }, [
        meal,
        recipeName,
        recipePreperation,
        caloriesPerServing,
        imageUri,
        recipeGroceries,
    ]);

    return (
        <View>
            {progress === 6 ? (
                <Text style={[styles.ready, styles.statusFor]}>
                    Recipe ready for preview
                </Text>
            ) : (
                <Text style={[styles.progress, styles.statusFor]}>
                    Your recipe is ready for {progress}/6
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    statusFor: {
        textAlign: "center",
        fontWeight: "bold",
        padding: 5,
    },
    ready: {
        backgroundColor: theme.colors.bg.green,
        color: theme.colors.color.light,
    },
    progress: {
        backgroundColor: theme.colors.bg.orange,
        color: theme.colors.color.light,
    },
});
