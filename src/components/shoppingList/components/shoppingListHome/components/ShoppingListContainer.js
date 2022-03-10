import React, { useContext } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { theme } from "../../../../../styling/index";
import { ShopListContext } from "../../../../../context/ShopListContext";

export const ShoppingListContainer = ({ navigation }) => {
    // const { shoppingLists } = useContext(ShopListContext);
    const shoppingLists = []; // pagaidu
    const renderList = ({ item }) => {
        return (
            <TouchableOpacity
                style={[
                    styles.listItem,
                    item.completed
                        ? styles.statusCompleted
                        : styles.statusPending,
                ]}
                onPress={() =>
                    navigation.navigate("My list", { listId: item.listId })
                }
            >
                <>
                    <View style={[styles.dateContainer]}>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                    <Text
                        style={[
                            styles.statusCh,
                            item.completed
                                ? styles.statusCompleted
                                : styles.statusPending,
                        ]}
                    >
                        {item.completed ? "Completed" : "In process"}
                    </Text>
                </>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {shoppingLists.length > 0 ? (
                <FlatList
                    data={shoppingLists}
                    renderItem={renderList}
                    keyExtractor={(item) => item.listId}
                />
            ) : (
                <View style={styles.noListsToShow}>
                    <Text>No lists to show</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: theme.sizes.sm,
        flex: 1,
    },
    listItem: {
        backgroundColor: theme.colors.bg.dark,
        marginBottom: theme.sizes.md,
        padding: theme.sizes.sm,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
    },
    dateContainer: {
        fontSize: theme.sizes.md,
        borderRadius: 8,
        backgroundColor: theme.colors.bg.light,
    },
    date: {
        color: theme.colors.color.dark,
        fontWeight: "bold",
        fontSize: theme.sizes.md,
        margin: 0,
        padding: theme.sizes.sm,
    },
    statusCh: {
        fontSize: theme.sizes.md,
    },
    statusCompleted: {
        borderColor: theme.colors.color.green,
        color: theme.colors.color.green,
    },
    statusPending: {
        borderColor: theme.colors.color.red,
        color: theme.colors.color.red,
    },
    noListsToShow: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
