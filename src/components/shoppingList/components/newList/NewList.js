import React, { useState, useEffect, useContext } from "react";
import { ShoppingListContext } from "../../../../context/ShoppingListContext";
import { View, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import { DateFormat } from "../../../../../utils/DateFormat";

import { GrocerieListInputs } from "../../../../shared/grocerieListInputs/GrocerieListInputs";
import { NewListTitle } from "./components/NewListTitle";
import { ListPreview } from "./components/ListPreview";

export const NewList = ({ navigation }) => {
    const { listItems, setListItems, shoppingLists, setShoppingLists } =
        useContext(ShoppingListContext);

    const [date, setDate] = useState(undefined);

    // gate date and set for ui in needed format
    useEffect(() => {
        const date = DateFormat();
        setDate(String(date));
    }, []);

    const addItemToList = (list) => {
        if (list.name && list.quantity && list.unit) {
            const item = {
                id: uuid.v4(),
                name: list.name,
                quantity: list.quantity,
                unit: list.unit,
                recipe: undefined,
                meal: undefined,
                checked: false,
            };
            setListItems([...listItems, item]);
        }
    };

    const createList = () => {
        if (date && listItems.length > 0) {
            const newList = {
                listId: uuid.v4(),
                date,
                listItems,
                completed: false,
            };
            setShoppingLists([...shoppingLists, newList]);
            setListItems([]);
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <NewListTitle
                date={date}
                list={listItems}
                createList={createList}
            />
            <GrocerieListInputs addItemToList={addItemToList} />
            <ListPreview list={listItems} setListItems={setListItems} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
