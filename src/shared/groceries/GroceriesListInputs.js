import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from "react-native";
import { theme } from "../../styling/index";
import { UnitSelector } from "../../utils/UnitSelector";

export const GroceriesListInputs = ({ addItemToList }) => {
    const [listItemName, setListItemName] = useState("");
    const [listItemQuantity, setListItemQuantity] = useState("");
    const [listItemUnit, setListItemUnit] = useState("");
    const [listValidated, setListValidated] = useState(false);

    useEffect(() => {
        if (
            listItemName.length > 0 &&
            listItemQuantity.length > 0 &&
            listItemUnit
        ) {
            setListValidated(true);
        }
    }, [listItemName, listItemQuantity, listItemUnit]);

    const addToList = async () => {
        if (listValidated) {
            const item = {
                name: listItemName,
                quantity: Number(listItemQuantity),
                unit: listItemUnit,
            };

            await addItemToList(item);
            setListItemName("");
            setListItemQuantity("");
            setListItemUnit("");
            setListValidated(false);
        }
    };

    return (
        <View style={styles.inputFieldsContainer}>
            <TextInput
                style={[styles.groceryNameInput]}
                onChangeText={setListItemName}
                value={listItemName}
                placeholder="Grocery"
                keyboardType="ascii-capable"
                placeholderTextColor={"white"}
            />

            <View style={styles.amountContainer}>
                <TextInput
                    style={[styles.groceryNameInput, styles.groceryQuantity]}
                    onChangeText={setListItemQuantity}
                    value={listItemQuantity}
                    placeholder="Quantity"
                    keyboardType="numeric"
                    placeholderTextColor={"white"}
                />
                <UnitSelector
                    style={[styles.groceryNameInput, styles.groceryUnit]}
                    setListItemUnit={setListItemUnit}
                    listItemUnit={listItemUnit}
                />
                <TouchableOpacity
                    activeOpacity={false}
                    onPress={addToList}
                    style={[
                        styles.addListItemButtonViewActive,
                        !listValidated && styles.addListItemButtonViewInactive,
                    ]}
                >
                    <Text
                        style={[
                            styles.addListItemButtonTextActive,
                            !listValidated &&
                                styles.addListItemButtonTextInactive,
                        ]}
                    >
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
        paddingBottom: 115,
    },
    groceryNameInput: {
        borderBottomWidth: 1,
        borderColor: theme.colors.color.dark,
        height: 45,
        padding: 5,
        margin: 3,
        borderRadius: 5,
        textAlign: "center",
        color: theme.colors.text.color2,
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
        color: theme.colors.text.color2,
    },
    addListItemButtonViewActive: {
        borderRadius: theme.sizes.sm,
        padding: theme.sizes.sm,
        backgroundColor: theme.colors.background.background2,
    },
    addListItemButtonViewInactive: {
        backgroundColor: theme.colors.background.background1,
    },
    addListItemButtonTextActive: {
        color: theme.colors.text.color1,
        fontWeight: "bold",
    },
    addListItemButtonTextInactive: {
        color: theme.colors.background.background1,
    },
});
