import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { theme } from "../../../../../../styling/index";

export const CaloriesPerServing = ({
    caloriesPerServing,
    setCaloriesPerServing,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calories per serving</Text>
            <View
                style={[
                    styles.inputContainer,
                    caloriesPerServing && styles.validNameBorder,
                ]}
            >
                <TextInput
                    onChangeText={(v) => setCaloriesPerServing(v)}
                    style={styles.input}
                    placeholder="Cals"
                    keyboardType="phone-pad"
                    returnKeyType={"done"}
                    value={caloriesPerServing}
                    placeholderTextColor={"white"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        color: theme.colors.text.color2,
    },
    inputContainer: {
        margin: theme.sizes.md,
        borderBottomWidth: 1,
    },
    validNameBorder: {
        borderColor: theme.colors.color.green,
    },
    input: {
        padding: theme.sizes.md,
        fontSize: theme.sizes.md,
        textAlign: "center",
        color: theme.colors.text.color2,
    },
});
