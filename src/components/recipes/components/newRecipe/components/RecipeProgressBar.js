import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";

export const RecipeProgressBar = ({ states }) => {
    const [progress, setProgress] = useState(0);
    const [statesArray, setStatesArray] = useState([
        states.meal,
        states.recipeName,
        states.recipePreperation,
        states.caloriesPerServing,
        states.imageUri,
        states.recipeGroceries,
    ]);

    useEffect(() => {
        let track = 0;
        states.meal && track++;
        states.recipeName && track++;
        states.recipePreperation && track++;
        states.caloriesPerServing && track++;
        states.imageUri && track++;
        states.recipeGroceries.length > 0 && track++;
        setProgress(track);
    }, [states]);

    return (
        <View>
            {progress === 6 ? (
                <Text style={[styles.ready, styles.status]}>
                    Recipe ready for preview
                </Text>
            ) : (
                <Text style={[styles.progress, styles.status]}>
                    Your recipe is ready for {progress}/6
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    status: {
        textAlign: "center",
        fontWeight: "bold",
        padding: theme.sizes.sm,
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

// const statesArray = [
//     states.meal,
//     states.recipeName,
//     states.recipePreperation,
//     states.caloriesPerServing,
//     states.imageUri,
//     states.recipeGroceries,
// ];
