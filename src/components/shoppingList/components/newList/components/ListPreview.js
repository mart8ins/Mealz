import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";

export const ListPreview = ({ list }) => {
    const renderNewList = ({ item }) => {
        return (
            <View style={styles.newListItem}>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.quantity}</Text>
                    <Text>{item.unit}</Text>
                </View>
                <Text>Delete</Text>
            </View>
        );
    };

    return (
        <View style={styles.newListContainer}>
            <FlatList
                data={list}
                renderItem={renderNewList}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    newListContainer: {
        flex: 3,
        padding: theme.sizes.lg,
        backgroundColor: "grey",
    },
    newListItem: {
        borderWidth: 1,
        borderColor: "red",
        padding: theme.sizes.sm,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
