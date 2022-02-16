import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../../styling";
import { CreateListButton } from "./components/CreateListButton";
import { ShoppingListContainer } from "./components/ShoppingListContainer";

export const ShoppingListHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <CreateListButton navigation={navigation} />
            </View>
            <ShoppingListContainer navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.bg.light },
    buttonContainer: {
        display: "flex",
        alignSelf: "flex-end",
        padding: theme.sizes.sm,
    },
});
