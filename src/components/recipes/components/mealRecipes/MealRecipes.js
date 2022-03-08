import React, { useState, useEffect, useContext } from "react";
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { RecipesContext } from "../../../../context/RecipesContext";
import { theme } from "../../../../styling/index";

export const MealRecipes = ({ route, navigation }) => {
    const { recipes } = useContext(RecipesContext);
    const [recipesForMeal, setRecipesForMeal] = useState([]);

    // FILTER RECIPES BY MEAL TYPE
    useEffect(() => {
        const filtered = recipes.filter(
            (recipe) => recipe.meal === route.params.mealType
        );
        setRecipesForMeal(filtered);
    }, [route]);

    const renderMealRecipes = ({ item }) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => {
                        navigation.navigate("Recipe", { recipe: item });
                    }}
                >
                    <Image
                        resizeMode={"cover"}
                        style={styles.image}
                        source={{ uri: item.imageUri }}
                    />
                    <Text style={styles.title}>{item.recipeName}</Text>
                    <Text style={styles.calories}>
                        Per portion{" "}
                        <Text style={styles.cal__number}>
                            {item.caloriesPerServing}
                        </Text>{" "}
                        kcal
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container_top}>
            <FlatList
                data={recipesForMeal}
                renderItem={renderMealRecipes}
                keyExtractor={(item) => item.recipeId}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container_top: {
        flex: 1,
    },
    container: {
        paddingTop: 20,
        alignItems: "center",
    },
    touchable: {
        width: "80%",
    },
    image: {
        height: 210,
        position: "relative",
    },
    title: {
        position: "absolute",
        top: 10,
        left: 10,
        padding: theme.sizes.sm,
        fontSize: theme.sizes.md,
        backgroundColor: theme.colors.bg.transparent,
        color: theme.colors.color.light,
    },
    calories: {
        position: "absolute",
        right: 10,
        bottom: 10,
        padding: theme.sizes.sm,
        fontSize: theme.sizes.sm,
        backgroundColor: theme.colors.bg.transparent,
        color: theme.colors.color.light,
    },
    cal__number: {
        fontWeight: "bold",
        fontSize: theme.sizes.md,
    },
});
