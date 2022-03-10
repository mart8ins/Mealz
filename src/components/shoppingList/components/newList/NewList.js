import React, { useState, useEffect, useContext } from "react";
import { ShopListContext } from "../../../../context/ShopListContext";
import { View, StyleSheet } from "react-native";
import uuid from "react-native-uuid";

import { DateFormat } from "../../../../utils/DateFormat";

import { GroceriesListInputs } from "../../../../shared/groceries/GroceriesListInputs";
import { NewListTitle } from "./components/NewListTitle";

import { Grocery, ShoppingList } from "../../../../utils/Models";
import { GroceryListCustom } from "../../../../shared/groceries/GroceryListCustom";

export const NewList = ({ navigation }) => {
    const {
        newShoppingList,
        setNewShoppingList,
        allShoppingLists,
        setAllShoppingLists,
    } = useContext(ShopListContext);
    const [date, setDate] = useState(undefined);

    // gate date and set for ui in needed format
    useEffect(() => {
        const date = DateFormat();
        setDate(String(date));
    }, []);

    const addItemToList = (list) => {
        if (list.name && list.quantity && list.unit) {
            const item = new Grocery(
                uuid.v4(),
                list.name,
                Number(list.quantity),
                list.unit,
                undefined,
                undefined,
                false,
                undefined
            );
            setNewShoppingList([item, ...newShoppingList]);
        }
    };

    const createList = () => {
        if (date && newShoppingList.length > 0) {
            const newList = new ShoppingList(
                uuid.v4(),
                date,
                newShoppingList,
                false
            );
            setAllShoppingLists([newList, ...allShoppingLists]);
            setNewShoppingList([]);
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <NewListTitle
                date={date}
                list={newShoppingList}
                createList={createList}
            />
            <GroceriesListInputs
                addItemToList={addItemToList}
                autoFocus={true}
            />
            <GroceryListCustom
                groceryList={newShoppingList}
                setNewShoppingList={setNewShoppingList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
