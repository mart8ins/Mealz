import React, { useEffect, useContext } from "react";
import { ShopListContext } from "../../../../context/ShopListContext";
import { View, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import { theme } from "../../../../styling";

import { DateFormat } from "../../../../utils/DateFormat";

import { GroceriesListInputs } from "../../../../shared/groceries/GroceriesListInputs";
import { NewListTitle } from "./components/NewListTitle";

import { Grocery, ShoppingList } from "../../../../utils/Models";
import { GroceryListCustom } from "../../../../shared/groceries/GroceryListCustom/GroceryListCustom";

export const NewList = ({ navigation }) => {
    const {
        newShoppingList,
        setNewShoppingList,
        allShoppingLists,
        setAllShoppingLists,
        listTitle,
        setListTitle,
    } = useContext(ShopListContext);

    // gate date and set for ui in needed format
    useEffect(() => {
        if (!listTitle) {
            const date = DateFormat();
            setListTitle(String(date));
        }
    }, []);

    const addItemToList = (list) => {
        if (list.name && list.quantity && list.unit) {
            const item = new Grocery(
                uuid.v4(),
                list.name,
                list.quantity,
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
        if (listTitle && newShoppingList.length > 0) {
            const newList = new ShoppingList(
                uuid.v4(),
                listTitle,
                newShoppingList,
                false
            );
            setAllShoppingLists([newList, ...allShoppingLists]);
            setNewShoppingList([]);
            setListTitle(undefined);
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <NewListTitle
                listTitle={listTitle}
                setListTitle={setListTitle}
                list={newShoppingList}
                createList={createList}
            />
            <GroceriesListInputs addItemToList={addItemToList} />
            <GroceryListCustom
                listId={false}
                recipePreview={false}
                groceriesList={newShoppingList}
                setGroceriesList={setNewShoppingList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.background1,
    },
});
