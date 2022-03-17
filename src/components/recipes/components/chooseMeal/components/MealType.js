import React from "react";
import { Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../styling";

const meals = [
    { name: "Breakfast", id: "Breakfast" },
    { name: "Lunch", id: "Lunch" },
    { name: "Dinner", id: "Dinner" },
];

export const MealType = ({ navigation }) => {
    const renderMealTypes = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.typeContainer}
                onPress={() =>
                    navigation.navigate("Meal recipes", { mealType: item.id })
                }
            >
                <Text style={styles.typeName}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList
            data={meals}
            renderItem={renderMealTypes}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    typeContainer: {
        height: 130,
        backgroundColor: theme.colors.background.background2,
        borderRadius: 5,
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    typeName: {
        fontSize: theme.sizes.xl,
        fontWeight: "bold",
        color: theme.colors.text.color1,
    },
});
