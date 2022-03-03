import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { RecipeHeader } from "./components/recipeHeader/RecipeHeader";
import { RecipeFooter } from "./components/recipeFooter/RecipeFooter";
import { RecipeGroceryItem } from "../newRecipe/components/components/recipePreview/components/RecipeGroceryItem";

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

    const renderGrocery = ({ item }) => {
        return <RecipeGroceryItem item={item} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={recipeGroceries}
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
                renderItem={renderGrocery}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
