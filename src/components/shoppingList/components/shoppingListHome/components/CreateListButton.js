import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../styling/index";

export const CreateListButton = ({ navigation }) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Create list")}
            >
                <Text style={styles.buttonText}>New</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
        color: theme.colors.color.green,
        fontWeight: "bold",
        fontSize: theme.sizes.md,
    },
});
