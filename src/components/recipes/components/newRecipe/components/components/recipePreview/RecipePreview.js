import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { RecipeData } from "./components/RecipeData";
import { RecipeGroceryItem } from "./components/RecipeGroceryItem";
import { CreateNewRecipeContext } from "../../../../../../../context/CreateNewRecipeContext";

export const RecipePreview = () => {
    const { recipeGroceries } = useContext(CreateNewRecipeContext);

    const renderGrocery = (grocery) => {
        return <RecipeGroceryItem item={grocery.item} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={recipeGroceries}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <RecipeData />}
                renderItem={renderGrocery}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 12,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
        width: "100%",
    },
});
