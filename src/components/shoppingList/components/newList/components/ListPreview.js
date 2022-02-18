import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { theme } from "../../../../../styling/index";

export const ListPreview = ({ list, setListItems }) => {
    const removeFromListPreview = (id) => {
        const updatedList = list.filter((item) => {
            if (String(item.id) !== String(id)) return item;
        });
        setListItems(updatedList);
    };

    const renderNewList = ({ item }) => {
        // console.log(item);
        return (
            <View style={styles.listItemContainer}>
                <View style={styles.itemDataContainer}>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                    <View style={styles.itemQuantityContainer}>
                        <Text style={styles.data}>{item.quantity}</Text>
                        <Text style={styles.data}>{item.unit}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.deleteListItem}
                    onPress={() => {
                        removeFromListPreview(item.id);
                    }}
                >
                    <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.listPreviewContainer}>
            {list.length > 0 ? (
                <FlatList
                    data={list}
                    renderItem={renderNewList}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.noGroceriesToShow}>
                    <Text>No groceries to show try to add some!</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    listPreviewContainer: {
        flex: 3,
        padding: theme.sizes.sm,
    },
    listItemContainer: {
        borderRadius: 4,
        backgroundColor: theme.colors.bg.dark,
        padding: theme.sizes.sm,
        margin: theme.sizes.sm,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemDataContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flex: 5,
    },
    itemNameContainer: {
        flex: 1,
    },
    itemName: {
        color: theme.colors.color.light,
        textAlign: "left",
        fontWeight: "bold",
        fontSize: theme.sizes.md,
    },
    itemQuantityContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    data: {
        backgroundColor: theme.colors.bg.light,
        color: theme.colors.color.dark,
        borderRadius: 5,
        paddingLeft: theme.sizes.sm,
        paddingRight: theme.sizes.sm,
        margin: 1,
        fontSize: theme.sizes.md,
    },
    deleteListItem: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    removeText: {
        color: "red",
        fontSize: theme.sizes.sm,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: theme.colors.color.red,
        padding: 5,
    },
    noGroceriesToShow: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
