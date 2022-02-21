import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { theme } from "../../../../../styling/index";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ShoppingListContext } from "../../../../../context/ShoppingListContext";

export const ListItems = ({ groceryList, listId }) => {
    const { shoppingLists, setShoppingLists } = useContext(ShoppingListContext);
    const listToUpdate = [...shoppingLists];

    const renderList = ({ item }) => {
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
            <View style={styles.container}>
                <View style={styles.dataContainer}>
                    <View style={styles.nameContainer}>
                        <Text>{item.name}</Text>
                    </View>

                    <View style={styles.quantityContainer}>
                        <Text>{item.quantity}</Text>
                        <Text>{item.unit}</Text>
                    </View>
                </View>

                <View style={styles.checkboxContainer}>
                    <BouncyCheckbox
                        size={35}
                        fillColor={theme.colors.bg.dark}
                        unfillColor={theme.colors.bg.light}
                        iconStyle={theme.colors.bg.dark}
                        isChecked={item.checked}
                        onPress={updateListCheckedOption}
                    />
                </View>
            </View>
        );
    };
    return (
        <FlatList
            data={groceryList}
            renderItem={renderList}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.color.dark,
    },
    dataContainer: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: 5,
    },
    nameContainer: {},
    quantityContainer: {
        flexDirection: "row",
        paddingRight: 10,
    },
    checkboxContainer: {
        flex: 1,
        alignItems: "center",
    },
});
