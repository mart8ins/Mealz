import React from "react";
import { Text, View } from "react-native";

export const Recipe = ({ route }) => {
    const { recipe } = route.params;
    console.log(recipe.recipeName);
    return (
        <View>
            <Text>NewRecipe</Text>
        </View>
    );
};
