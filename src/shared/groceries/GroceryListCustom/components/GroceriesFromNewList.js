import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../../../styling/index";
import { ListItemOptionButton } from "./ListItemOptionButton";

export const GroceriesFromNewList = ({ listId, item }) => {
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.itemDataContainer}>
                <View style={styles.itemNameContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <View style={styles.itemQuantityContainer}>
                    <Text style={styles.quantity}>
                        <Text style={styles.quantity_number}>
                            {item.quantity}
                        </Text>{" "}
                        {item.unit}
                    </Text>
                </View>
                <ListItemOptionButton listId={listId} item={item} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.bg.dark,
        padding: theme.sizes.sm,
        margin: theme.sizes.sm,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemDataContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 5,
    },
    itemNameContainer: {
        flex: 1,
        justifyContent: "center",
    },
    itemName: {
        color: theme.colors.color.dark,
        textAlign: "left",
        fontSize: theme.sizes.md,
    },
    itemQuantityContainer: {
        marginRight: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    quantity: {
        color: theme.colors.color.dark,
        margin: 1,
        fontSize: theme.sizes.md,
    },
    quantity_number: {
        fontWeight: "bold",
    },
});
