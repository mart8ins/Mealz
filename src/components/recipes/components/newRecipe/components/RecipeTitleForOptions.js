import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";
import { CreateNewRecipeContext } from "../../../../../context/CreateNewRecipeContext";

export const RecipeTitleForOptions = () => {
    const { optionScreen } = useContext(CreateNewRecipeContext);
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (optionScreen === 1) setTitle("Choose meal for recipe");
        if (optionScreen === 2) setTitle("Add recipe name");
        if (optionScreen === 3) setTitle("Add recipe preperation");
        if (optionScreen === 4) setTitle("Add calories per serving");
        if (optionScreen === 5) setTitle("Add image for recipe");
        if (optionScreen === 6) setTitle("Add ingredients for recipe");
        if (optionScreen === 7) setTitle("Preview your recipe before save");
    }, [optionScreen]);

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        backgroundColor: theme.colors.bg.dark,
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
    },
    title: {
        color: theme.colors.color.light,
    },
});
