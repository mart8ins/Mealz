import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { theme } from "../../../../../styling/index";

export const NewListTitle = ({
    listTitle,
    setListTitle,
    list,
    createList,
    deleteList,
    deleteConfirm,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleCont}>
                {deleteList && <Text style={styles.title}>{listTitle}</Text>}
                {createList && (
                    <TextInput
                        style={styles.title}
                        value={listTitle}
                        onChangeText={setListTitle}
                        placeholder={"Enter name for list..."}
                        autoFocus={true}
                    />
                )}
            </View>

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
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        // height: 40,
    },
    titleCont: {
        backgroundColor: theme.colors.bg.light,
        flex: 1,
    },
    title: {
        padding: theme.sizes.sm,
        fontSize: theme.sizes.md,
        color: "black",
        textAlign: "center",
    },
    createButton: {
        justifyContent: "center",
        alignItems: "center",
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
