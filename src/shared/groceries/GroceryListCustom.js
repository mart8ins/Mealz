import React, { useContext } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { theme } from "../../styling/index";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { ShopListContext } from "../../context/ShopListContext";

export const GroceryListCustom = ({
    groceryList = [],
    listId,
    setListItems,
}) => {
    // const { shoppingLists, setShoppingLists } = useContext(ShopListContext);
    // const listToUpdate = [...shoppingLists];

    // RENDER FUNCTION FOR FLAT LIST
    const renderNewList = ({ item }) => {
        // REMOVE LIST ITEM FROM NOT SAVED LIST
        const removeFromListPreview = (id) => {
            const updatedList = groceryList.filter((item) => {
                if (String(item.id) !== String(id)) return item;
            });
            setListItems(updatedList);
        };
        // UPDATE LIST AS CHECKED IN FINISHED LIST
        const updateListCheckedOption = () => {
            let listIsCompleted = true;
            listToUpdate.forEach((list) => {
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
            setShoppingLists(listToUpdate);
        };

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
                </View>

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

    return (
        <View style={styles.container}>
            {groceryList.length > 0 ? (
                <FlatList
                    data={groceryList}
                    renderItem={renderNewList}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.noGroceriesToShow}>
                    <Text>No groceries to show!</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 30,
    },
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
    noGroceriesToShow: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
