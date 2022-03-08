import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../../../../styling";
import { RecipeHeader } from "./components/recipeHeader/RecipeHeader";
import { RecipeFooter } from "./components/recipeFooter/RecipeFooter";

export const Recipe = ({ route, navigation }) => {
    const {
        recipeId,
        meal,
        recipeName,
        recipePreperation,
        caloriesPerServing,
        imageUri,
        recipeGroceries,
    } = route.params.recipe;

    const renderGroceriesForRecipe = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.containerData}>
                    <View>
                        <Text>{item.name}</Text>
                    </View>

                    <View style={styles.quantityContainer}>
                        <Text>{item.quantity}</Text>
                        <Text>{item.unit}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container_top}>
            <FlatList
                style={{ width: "100%" }}
                data={recipeGroceries}
                renderItem={renderGroceriesForRecipe}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => (
                    <RecipeHeader
                        recipeName={recipeName}
                        caloriesPerServing={caloriesPerServing}
                        imageUri={imageUri}
                        recipePreperation={recipePreperation}
                    />
                )}
                ListFooterComponent={() => (
                    <RecipeFooter
                        navigation={navigation}
                        recipe={route.params.recipe}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container_top: {
        flex: 1,
    },
    container: {
        alignItems: "center",
    },
    containerData: {
        width: 290,
        flex: 1,
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        borderBottomWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.color.dark,
    },
    quantityContainer: {
        flexDirection: "row",
    },
    checkboxContainer: {
        flex: 1,
        alignItems: "center",
    },
});
