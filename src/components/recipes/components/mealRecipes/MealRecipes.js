import React from "react";
import { Text, View } from "react-native";

export const MealRecipes = ({ route }) => {
    return (
        <View>
            <Text>{route.params.mealType}</Text>
        </View>
    );
};
