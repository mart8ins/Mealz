import React from "react";
import { Text, TextInput, View, StyleSheet, Keyboard } from "react-native";
import { theme } from "../../../../../styling/index";

export const RecipePreperation = ({
    recipePreperation,
    setRecipePreperation,
}) => {
    return (
        <View
            style={[
                styles.container,
                recipePreperation.length > 0 && styles.validNameBorder,
            ]}
        >
            <TextInput
                onChangeText={(v) => setRecipePreperation(v)}
                style={styles.input}
                placeholder="Recipe preperation"
                multiline={true}
                // returnKeyType={"done"}
                onSubmitEditing={() => {
                    Keyboard.dismiss();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: theme.sizes.md,
        borderBottomWidth: 1,
    },
    validNameBorder: {
        borderColor: theme.colors.color.green,
    },
    input: {
        padding: theme.sizes.md,
        fontSize: theme.sizes.md,
        textAlign: "left",
    },
});
