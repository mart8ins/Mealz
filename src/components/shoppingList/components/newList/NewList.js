import React, { useState, useEffect, useContext } from "react";
import { ShoppingListContext } from "../../../../context/ShoppingListContext";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../../styling/index";
import uuid from "react-native-uuid";
import { DateFormat } from "../../../../../utils/DateFormat";

import { NewListTitle } from "./components/NewListTitle";
import { InputFields } from "./components/InputFields";
import { ListPreview } from "./components/ListPreview";

export const NewList = ({ navigation }) => {
    const { listItems, setListItems, shoppingLists, setShoppingLists } =
        useContext(ShoppingListContext);

    const [date, setDate] = useState(undefined);
    // const [list, setList] = useState([]);
    const [listItemName, setListItemName] = useState("");
    const [listItemQuantity, setListItemQuantity] = useState("");
    const [listItemUnit, setListItemUnit] = useState("");

    // gate date and set for ui in needed format
    useEffect(() => {
        const date = DateFormat();
        setDate(String(date));
    }, []);

    const addItemToList = () => {
        if (listItemName && listItemQuantity && listItemUnit) {
            const item = {
                id: uuid.v4(),
                name: listItemName,
                quantity: listItemQuantity,
                unit: listItemUnit,
                recipe: undefined,
                meal: undefined,
                checked: false,
            };
            setListItems([...listItems, item]);
            setListItemName("");
            setListItemQuantity("");
            setListItemUnit("");
        }
    };

    const createList = async () => {
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

            <InputFields
                setListItemName={setListItemName}
                listItemName={listItemName}
                setListItemQuantity={setListItemQuantity}
                listItemQuantity={listItemQuantity}
                setListItemUnit={setListItemUnit}
                listItemUnit={listItemUnit}
                addItemToList={addItemToList}
            />

            <ListPreview list={listItems} setListItems={setListItems} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
