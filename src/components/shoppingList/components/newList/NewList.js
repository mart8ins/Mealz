import React, { useState, useEffect } from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { theme } from "../../../../styling/index";
import { DateFormat } from "../../../../../utils/DateFormat";

import { UnitSelector } from "../../../../../utils/UnitSelector";

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
        const item = {
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
    };
    useEffect(() => {
        console.log(list);
    }, [list]);
    // const create = () => {
    //     console.log("Saglabāt listi");
    //     navigation.goBack();
    // };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Shopping list for {date}</Text>
            </View>

            <View style={styles.inputFieldsContainer}>
                <TextInput
                    style={styles.groceryNameInput}
                    onChangeText={setListItemName}
                    value={listItemName}
                    placeholder="Grocery"
                />
                <View style={styles.amountContainer}>
                    <TextInput
                        style={[
                            styles.groceryNameInput,
                            styles.groceryQuantity,
                        ]}
                        onChangeText={setListItemQuantity}
                        value={listItemQuantity}
                        placeholder="Quantity"
                        keyboardType="numeric"
                    />
                    <UnitSelector
                        style={[styles.groceryNameInput, styles.groceryUnit]}
                        setListItemUnit={setListItemUnit}
                        listItemUnit={listItemUnit}
                    />
                    <TouchableOpacity
                        onPress={addItemToList}
                        style={styles.addListItemButtonView}
                    >
                        <Text style={styles.addListItemButtonText}>
                            Add to list
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        padding: theme.sizes.sm,
        margin: 0,
    },
    title: {
        fontSize: theme.sizes.md,
        padding: theme.sizes.sm,
        textAlign: "center",
        backgroundColor: theme.colors.bg.dark,
        color: theme.colors.color.light,
    },
    inputFieldsContainer: {
        flex: 1,
        padding: theme.sizes.sm,
        width: "95%",
        alignSelf: "center",
    },
    groceryNameInput: {
        borderBottomWidth: 1,
        borderColor: theme.colors.color.dark,
        height: 45,
        padding: 5,
        margin: 3,
        borderRadius: 5,
        textAlign: "center",
    },
    amountContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    groceryQuantity: { width: 110, textAlign: "center" },
    groceryUnit: {
        width: 110,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 40,
        textAlign: "center",
    },
    addListItemButtonView: {
        backgroundColor: theme.colors.bg.light,
        borderRadius: 10,
        padding: 10,
    },
    addListItemButtonText: {
        color: theme.colors.color.dark,
        fontWeight: "bold",
    },
});
