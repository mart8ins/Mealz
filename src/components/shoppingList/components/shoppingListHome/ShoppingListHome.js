import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../../styling";
import { NewContentButton } from "../../../../shared/buttons/NewContentButton";
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
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.background1,
    },
    buttonContainer: {
        display: "flex",
        alignSelf: "flex-end",
        padding: theme.sizes.sm,
    },
});
