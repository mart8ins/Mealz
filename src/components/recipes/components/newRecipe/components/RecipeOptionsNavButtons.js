import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../styling/index";
import { Recipe } from "../../../../../utils/Models";
import uuid from "react-native-uuid";
import { CreateNewRecipeContext } from "../../../../../context/CreateNewRecipeContext";
import { RecipesContext } from "../../../../../context/RecipesContext";

export const RecipeOptionsNavButtons = ({ navigation }) => {
    const {
        optionScreen,
        setOptionScreen,
        canPreview,
        meal,
        recipeName,
        recipePreperation,
        caloriesPerServing,
        imageUri,
        recipeGroceries,
        clearStates,
    } = useContext(CreateNewRecipeContext);
    const { recipes, setRecipes } = useContext(RecipesContext);

    const saveRecipe = () => {
        if (canPreview) {
            const recipeToSave = new Recipe(
                uuid.v4(),
                meal,
                recipeName,
                recipePreperation,
                caloriesPerServing,
                imageUri,
                recipeGroceries
            );
            setRecipes([...recipes, recipeToSave]);
            clearStates();
            navigation.navigate("Choose meal");
        }
    };
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
                <TouchableOpacity onPress={saveRecipe}>
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
        backgroundColor: theme.colors.background.background5,
        borderRadius: 5,
    },
    btnText: {
        color: theme.colors.text.color1,
        padding: theme.sizes.sm,
    },
});
