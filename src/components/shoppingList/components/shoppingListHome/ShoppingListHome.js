import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../../styling";
import { CreateListButton } from "../CreateListButton";
import { ShoppingListContainer } from "./components/ShoppingListContainer";

export const ShoppingListHome = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.buttonContainer}>
                <CreateListButton navigation={navigation} />
            </View>
            <ShoppingListContainer navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        alignSelf: "flex-end",
        padding: theme.sizes.sm,
    },
});
