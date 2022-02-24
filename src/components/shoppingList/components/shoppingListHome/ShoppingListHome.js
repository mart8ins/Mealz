import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../../styling";
import { NewContentButton } from "../../../../shared/newContentButton/NewContentButton";
import { ShoppingListContainer } from "./components/ShoppingListContainer";

export const ShoppingListHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <NewContentButton navigation={navigation} routeTo={"Create list"} />
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