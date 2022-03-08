import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../styling/index";
import { CreateNewRecipeContext } from "../../../../../context/CreateNewRecipeContext";

export const RecipeOptionsNavButtons = ({ saveRecipe }) => {
    const { optionScreen, setOptionScreen, canPreview } = useContext(
        CreateNewRecipeContext
    );
    return (
        <View style={styles.container}>
            {optionScreen > 1 && (
                <TouchableOpacity
                    onPress={() => {
                        if (optionScreen > 1) {
                            setOptionScreen(optionScreen - 1);
                        }
                    }}
                >
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>Back</Text>
                    </View>
                </TouchableOpacity>
            )}

            {optionScreen < 6 && (
                <TouchableOpacity
                    onPress={() => {
                        if (optionScreen < 6) {
                            setOptionScreen(optionScreen + 1);
                        }
                    }}
                >
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>Next</Text>
                    </View>
                </TouchableOpacity>
            )}

            {optionScreen === 6 && canPreview && optionScreen !== 7 && (
                <TouchableOpacity
                    onPress={() => {
                        if (optionScreen === 6) {
                            setOptionScreen(optionScreen + 1);
                        }
                    }}
                >
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>Preview</Text>
                    </View>
                </TouchableOpacity>
            )}

            {optionScreen === 7 && (
                <TouchableOpacity
                    onPress={() => {
                        saveRecipe();
                    }}
                >
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>Save</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1.2,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    btnContainer: {
        borderWidth: 1,
        borderRadius: 5,
    },
    btnText: {
        backgroundColor: theme.colors.bg.dark,
        color: theme.colors.color.light,
        padding: theme.sizes.sm,
    },
});
