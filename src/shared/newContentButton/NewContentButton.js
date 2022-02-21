import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../styling/index";

export const NewContentButton = ({ navigation, routeTo }) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate(routeTo)}>
                    <Text style={styles.buttonText}>New</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        alignSelf: "flex-end",
        padding: theme.sizes.sm,
    },
    button: {
        backgroundColor: theme.colors.bg.dark,
        borderRadius: 100,
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: theme.colors.color.light,
        fontWeight: "bold",
        fontSize: theme.sizes.md,
    },
});
