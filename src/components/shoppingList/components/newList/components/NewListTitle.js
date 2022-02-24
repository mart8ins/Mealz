import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../styling/index";

export const NewListTitle = ({
    date,
    list = [],
    createList,
    deleteList,
    deleteConfirm,
}) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Shopping list for {date}</Text>
            {list && list.length > 0 && (
                <TouchableOpacity
                    onPress={createList}
                    style={styles.createButton}
                >
                    <Text style={styles.createText}>Create</Text>
                </TouchableOpacity>
            )}
            {deleteList && (
                <TouchableOpacity
                    onPress={deleteList}
                    style={styles.createButton}
                >
                    <Text style={[styles.createText, styles.deleteListBtn]}>
                        {deleteConfirm ? "Confirm" : "Delete"}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        // margin: 0,
        display: "flex",
        flexDirection: "row",
    },
    title: {
        flex: 3,
        fontSize: theme.sizes.md,
        padding: theme.sizes.sm,
        textAlign: "center",
        backgroundColor: theme.colors.bg.dark,
        color: theme.colors.color.light,
    },
    createButton: {
        flex: 1,
    },
    createText: {
        padding: theme.sizes.sm,
        fontSize: theme.sizes.md,
        textAlign: "center",
        backgroundColor: "grey",
        color: theme.colors.color.light,
        backgroundColor: theme.colors.bg.green,
        fontWeight: "bold",
    },
    deleteListBtn: {
        color: theme.colors.color.light,
        backgroundColor: theme.colors.bg.red,
    },
});