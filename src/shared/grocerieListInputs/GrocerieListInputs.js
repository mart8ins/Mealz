import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from "react-native";
import { theme } from "../../styling/index";
import { UnitSelector } from "../../../utils/UnitSelector";

export const GrocerieListInputs = ({ addItemToList }) => {
    const [listItemName, setListItemName] = useState("");
    const [listItemQuantity, setListItemQuantity] = useState("");
    const [listItemUnit, setListItemUnit] = useState("");

    const addToList = async () => {
        const item = {
            name: listItemName,
            quantity: listItemQuantity,
            unit: listItemUnit,
        };
        await addItemToList(item);
        setListItemName("");
        setListItemQuantity("");
        setListItemUnit("");
    };
    return (
        <View style={styles.inputFieldsContainer}>
            <TextInput
                style={[styles.groceryNameInput]}
                onChangeText={setListItemName}
                value={listItemName}
                placeholder="Grocery"
                keyboardType="ascii-capable"
            />

            <View style={styles.amountContainer}>
                <TextInput
                    style={[styles.groceryNameInput, styles.groceryQuantity]}
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
                    onPress={addToList}
                    style={styles.addListItemButtonView}
                >
                    <Text style={styles.addListItemButtonText}>
                        Add to list
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputFieldsContainer: {
        flex: 1,
        padding: theme.sizes.sm,
        width: "95%",
        alignSelf: "center",
        paddingBottom: 150,
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
        borderRadius: 6,
        padding: 8,
        backgroundColor: theme.colors.bg.orange,
    },
    addListItemButtonText: {
        color: theme.colors.color.light,
        fontWeight: "bold",
    },
});
