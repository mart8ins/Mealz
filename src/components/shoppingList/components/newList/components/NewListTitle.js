import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";

export const NewListTitle = ({ date }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Shopping list for {date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        padding: theme.sizes.sm,
        margin: 0,
    },
    title: {
        fontSize: theme.sizes.md,
        padding: theme.sizes.sm,
        textAlign: "center",
        backgroundColor: theme.colors.bg.dark,
        color: theme.colors.color.light,
    },
});
