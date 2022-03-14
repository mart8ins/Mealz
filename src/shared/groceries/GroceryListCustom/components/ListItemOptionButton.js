import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../styling/index";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ShopListContext } from "../../../../context/ShopListContext";

export const ListItemOptionButton = ({ listId, item }) => {
    const {
        newShoppingList,
        setNewShoppingList,
        allShoppingLists,
        setAllShoppingLists,
    } = useContext(ShopListContext);
    const listToUpdateChecked = [...allShoppingLists];

    // UPDATE LIST AS CHECKED IN FINISHED LIST
    const updateListCheckedOption = () => {
        let listIsCompleted = true;
        listToUpdateChecked.forEach((list) => {
            if (String(list.listId) === String(listId)) {
                list.listItems.forEach((itm) => {
                    if (String(itm.id) === String(item.id)) {
                        itm.checked = !itm.checked;
                    }
                    if (itm.checked !== true) {
                        listIsCompleted = false;
                    }
                });
                list.completed = listIsCompleted;
            }
        });
        setAllShoppingLists(listToUpdateChecked);
    };

    // REMOVE LIST ITEM FROM NOT SAVED LIST
    const removeFromListPreview = (id) => {
        const updatedList = newShoppingList.filter((item) => {
            if (String(item.id) !== String(id)) return item;
        });
        setNewShoppingList(updatedList);
    };

    return (
        <View>
            {listId ? (
                <BouncyCheckbox
                    size={35}
                    fillColor={theme.colors.bg.dark}
                    unfillColor={theme.colors.bg.light}
                    iconStyle={theme.colors.bg.dark}
                    isChecked={item.checked}
                    onPress={updateListCheckedOption}
                />
            ) : (
                <TouchableOpacity
                    style={styles.deleteListItem}
                    onPress={() => {
                        removeFromListPreview(item.id);
                    }}
                >
                    <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    deleteListItem: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    removeText: {
        color: "red",
        fontSize: theme.sizes.sm,
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        borderWidth: 1,
        padding: 8,
    },
});
