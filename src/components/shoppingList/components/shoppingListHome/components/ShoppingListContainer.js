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
    const { allShoppingLists } = useContext(ShopListContext);
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
                    <View style={[styles.titleContainer]}>
                        <Text style={styles.title}>{item.listTitle}</Text>
                    </View>
                    <Text
                        style={[
                            styles.statusCh,
                            item.completed
                                ? styles.statusCompletedText
                                : styles.statusPendingText,
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
            {allShoppingLists.length > 0 ? (
                <FlatList
                    data={allShoppingLists}
                    renderItem={renderList}
                    keyExtractor={(item) => item.listId}
                />
            ) : (
                <View style={styles.noListsToShow}>
                    <Text style={styles.no_lists}>No lists to show</Text>
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
        marginBottom: theme.sizes.md,
        padding: theme.sizes.sm,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5,
    },
    titleContainer: {
        fontSize: theme.sizes.md,
    },
    title: {
        color: theme.colors.text.color2,
        fontWeight: "bold",
        fontSize: theme.sizes.md,
        margin: 0,
        padding: theme.sizes.sm,
    },
    statusCh: {
        fontSize: 12,
        fontWeight: "bold",
    },
    statusCompleted: {
        backgroundColor: theme.colors.background.background4,
    },
    statusPending: {
        backgroundColor: theme.colors.background.background3,
    },
    statusCompletedText: {
        color: theme.colors.text.color4,
    },
    statusPendingText: {
        color: theme.colors.color.red,
    },
    noListsToShow: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    no_lists: {
        color: theme.colors.text.color2,
    },
});
