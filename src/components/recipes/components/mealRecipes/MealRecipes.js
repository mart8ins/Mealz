import React, { useState, useEffect, useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { RecipesContext } from "../../../../context/RecipesContext";
import { RecipeBoxView } from "./components/RecipeBoxView";

export const MealRecipes = ({ route, navigation }) => {
    const { recipes } = useContext(RecipesContext);
    const [recipesForMeal, setRecipesForMeal] = useState([]);

    useEffect(() => {
        const filtered = recipes.filter(
            (recipe) => recipe.meal === route.params.mealType
        );
        setRecipesForMeal(filtered);
    }, [route]);

    const renderMealRecipes = ({ item }) => {
        return <RecipeBoxView item={item} navigation={navigation} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={recipesForMeal}
                renderItem={renderMealRecipes}
                keyExtractor={(item) => item.recipeId}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
