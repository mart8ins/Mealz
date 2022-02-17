import React, { useState, useEffect } from "react";
import uuid from "react-native-uuid";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../styling/index";
import { DateFormat } from "../../../../../utils/DateFormat";
import { NewListTitle } from "./components/NewListTitle";
import { InputFields } from "./components/InputFields";
import { ListPreview } from "./components/ListPreview";

export const NewList = ({ navigation }) => {
    const [date, setDate] = useState(undefined);
    const [list, setList] = useState([]);
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
            };
            setList([...list, item]);
            setListItemName("");
            setListItemQuantity("");
            setListItemUnit("");
        }
    };

    useEffect(() => {
        console.log(list);
    }, [list]);

    // const create = () => {
    //     console.log("Saglabāt listi");
    //     navigation.goBack();
    // };

    return (
        <View style={styles.container}>
            <NewListTitle date={date} />

            <InputFields
                setListItemName={setListItemName}
                listItemName={listItemName}
                setListItemQuantity={setListItemQuantity}
                listItemQuantity={listItemQuantity}
                setListItemUnit={setListItemUnit}
                listItemUnit={listItemUnit}
                addItemToList={addItemToList}
            />

            <ListPreview list={list} />

            <TouchableOpacity onPress={addItemToList}>
                <Text>Create list</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
