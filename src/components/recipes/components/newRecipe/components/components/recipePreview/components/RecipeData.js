import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { theme } from "../../../../../../../../styling/index";

export const RecipeData = ({ data }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ position: "relative" }}>
                <Image
                    source={{ uri: data.imageUri }}
                    resizeMode="cover"
                    style={styles.image}
                />
                <Text style={[styles.textOnImage, styles.meal]}>
                    {data.meal}
                </Text>
                <Text style={[styles.textOnImage, styles.recipeName]}>
                    {data.recipeName}
                </Text>
                <Text style={[styles.textOnImage, styles.caloriesPerServing]}>
                    <Text style={styles.caloriesNumber}>
                        {data.caloriesPerServing}
                    </Text>{" "}
                    calories
                </Text>
            </View>

            <View style={styles.recipePreperation__container}>
                <Text style={styles.recipePreperation__title}>
                    How to make...
                </Text>
                <Text style={styles.recipePreperation__instructions}>
                    {data.recipePreperation}
                </Text>
            </View>

            <View style={styles.recipeGroceries__container}>
                <Text style={styles.recipeGroceries__title}>
                    Needed ingredients...
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350,
    },
    textOnImage: {
        position: "absolute",
        color: theme.colors.color.light,
        backgroundColor: theme.colors.bg.transparent,
        padding: theme.sizes.sm,
    },
    meal: {
        top: 15,
        left: 15,
        fontSize: theme.sizes.md,
    },
    recipeName: {
        bottom: 20,
        right: 15,
        fontSize: theme.sizes.lg,
    },
    caloriesPerServing: {
        top: 15,
        right: 15,
        fontSize: theme.sizes.md,
    },
    caloriesNumber: {
        fontWeight: "bold",
    },
    recipePreperation__container: {
        marginTop: 5,
        flex: 1,
        padding: theme.sizes.md,
        backgroundColor: theme.colors.bg.light,
    },
    recipePreperation__title: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    recipePreperation__instructions: {
        textAlign: "justify",
    },
    recipeGroceries__container: {
        padding: theme.sizes.md,
    },
    recipeGroceries__title: {
        fontWeight: "bold",
    },
});
