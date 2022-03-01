import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";

export const RecipeProgressBar = ({ states }) => {
    const [progress, setProgress] = useState(0);

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
