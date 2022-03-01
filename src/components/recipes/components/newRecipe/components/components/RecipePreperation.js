import React from "react";
import {
    TextInput,
    View,
    StyleSheet,
    Keyboard,
    KeyboardAvoidingView,
} from "react-native";
import { theme } from "../../../../../../styling/index";

export const RecipePreperation = ({
    recipePreperation,
    setRecipePreperation,
}) => {
    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    onChangeText={(v) => setRecipePreperation(v)}
                    style={[
                        styles.input,
                        recipePreperation.length > 0 && styles.validNameBorder,
                    ]}
                    keyboardType={"ascii-capable"}
                    placeholder="Recipe preperation"
                    multiline={true}
                    value={recipePreperation}
                    blurOnSubmit={true}
                    onSubmitEditing={() => {
                        Keyboard.dismiss();
                    }}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: theme.sizes.sm,
        paddingBottom: 40,
        flex: 1,
        justifyContent: "center",
        margin: theme.sizes.md,
        marginBottom: 30,
    },
    input: {
        padding: theme.sizes.md,
        fontSize: theme.sizes.md,
        textAlign: "left",
        marginBottom: 10,
        borderLeftWidth: 1,
        borderBottomWidth: 2,
    },
    validNameBorder: {
        borderColor: theme.colors.color.green,
    },
});
