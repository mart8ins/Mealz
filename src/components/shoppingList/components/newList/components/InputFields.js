import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from "react-native";
import { theme } from "../../../../../styling/index";
import { UnitSelector } from "../../../../../../utils/UnitSelector";

export const InputFields = ({
    setListItemName,
    listItemName,
    setListItemQuantity,
    listItemQuantity,
    setListItemUnit,
    listItemUnit,
    addItemToList,
}) => {
    return (
        <View style={styles.inputFieldsContainer}>
            <TextInput
                style={styles.groceryNameInput}
                onChangeText={setListItemName}
                value={listItemName}
                placeholder="Grocery"
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
                    onPress={addItemToList}
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
