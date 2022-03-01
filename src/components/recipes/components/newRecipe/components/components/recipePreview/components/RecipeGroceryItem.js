import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../../../../../../../styling/index";

export const RecipeGroceryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerData}>
                <View>
                    <Text>{item.name}</Text>
                </View>

                <View style={styles.quantityContainer}>
                    <Text>{item.quantity}</Text>
                    <Text>{item.unit}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    containerData: {
        width: 290,
        flex: 1,
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        borderBottomWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.color.dark,
    },
    quantityContainer: {
        flexDirection: "row",
    },
    checkboxContainer: {
        flex: 1,
        alignItems: "center",
    },
});
