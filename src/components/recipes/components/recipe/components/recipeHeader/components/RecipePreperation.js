import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../../../../../../styling";

export const RecipePreperation = ({ recipePreperation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{recipePreperation}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 5,
    },
    text: {
        width: "90%",
        padding: 10,
        backgroundColor: theme.colors.bg.light,
        fontSize: 12,
    },
});
