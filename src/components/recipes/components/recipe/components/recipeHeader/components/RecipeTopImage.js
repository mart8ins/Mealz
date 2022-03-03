import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { theme } from "../../../../../../../styling";

export const RecipeTopImage = ({
    imageUri,
    recipeName,
    caloriesPerServing,
}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: imageUri }}
                resizeMode="cover"
            />
            <Text style={styles.recipeName}>{recipeName}</Text>
            <Text style={styles.calories}>
                <Text style={styles.calories_number}>{caloriesPerServing}</Text>{" "}
                kcal per serving
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "relative",
    },
    image: {
        width: "100%",
        height: 250,
    },
    recipeName: {
        position: "absolute",
        top: 5,
        left: 15,
        fontSize: theme.sizes.md,
        padding: theme.sizes.sm,
        backgroundColor: theme.colors.bg.transparent,
        color: theme.colors.color.light,
    },
    calories: {
        position: "absolute",
        bottom: 5,
        right: 5,
        padding: theme.sizes.sm,
        backgroundColor: theme.colors.bg.transparent,
        color: theme.colors.color.light,
        fontSize: theme.sizes.sm + 4,
    },
    calories_number: {
        fontWeight: "bold",
        fontSize: theme.sizes.md,
    },
});
