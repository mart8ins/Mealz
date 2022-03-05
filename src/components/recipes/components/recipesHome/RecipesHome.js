import React, { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NewContentButton } from "../../../../shared/buttons/NewContentButton";
import { MealType } from "./components/MealType";
import { theme } from "../../../../styling/index";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { RecipesContext } from "../../../../context/RecipesContext";

export const RecipesHome = ({ navigation }) => {
    const { recipes, setRecipes } = useContext(RecipesContext);

    const getAllRecipes = async () => {
        try {
            // await AsyncStorage.removeItem("recipes");
            const store = await AsyncStorage.getItem("recipes");
            if (store !== null) {
                const recipesParsed = JSON.parse(store);
                if (recipesParsed.length > 0) {
                    setRecipes(recipesParsed);
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <View style={styles.container}>
            <NewContentButton
                navigation={navigation}
                routeTo={"Create recipe"}
            />
            <MealType navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bg.light,
    },
});
