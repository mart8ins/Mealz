import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { theme } from "../../../../../styling/index";

const LISTITEMS = [
    { id: 1, date: "04.02.2020", completed: false },
    { id: 2, date: "07.02.2020", completed: true },
    { id: 3, date: "09.02.2020", completed: true },
];

export const ShoppingListContainer = ({ navigation }) => {
    const [list, setList] = useState();

    const renderList = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}
                onPress={() =>
                    navigation.navigate("My list", { listId: item.id })
                }
            >
                <>
                    <View
                        style={[
                            styles.dateContainer,
                            item.completed
                                ? styles.statusCompleted
                                : styles.statusPending,
                        ]}
                    >
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                    <Text
                        style={[
                            styles.status,
                            item.completed
                                ? styles.statusCompleted
                                : styles.statusPending,
                        ]}
                    >
                        {item.completed ? "Finished" : "Open"}
                    </Text>
                </>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        setList(LISTITEMS);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={renderList}
                keyExtractor={(item) => item.id}
            />
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
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    dateContainer: {
        fontSize: theme.sizes.md,
        padding: theme.sizes.sm,
        borderRadius: 8,
        borderWidth: 2,
    },
    date: {
        color: "white",
        fontWeight: "bold",
    },
    status: {
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
});
