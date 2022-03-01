import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { RecipeData } from "./components/RecipeData";
import { RecipeGroceryItem } from "./components/RecipeGroceryItem";

export const RecipePreview = ({ states }) => {
    const renderGrocery = (grocery) => {
        return <RecipeGroceryItem item={grocery.item} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={states.recipeGroceries}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <RecipeData data={states} />}
                renderItem={renderGrocery}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flex: 12,
        justifyContent: "center",
        alignItems: "center",
        // margin: 5,
        paddingBottom: 30,
        width: "100%",
    },
});
