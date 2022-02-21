import React from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { theme } from "../../../../../styling";

const meals = [
    { name: "Breakfast", id: "breakfast" },
    { name: "Lunch", id: "lunch" },
    { name: "Dinner", id: "dinner" },
];

export const MealType = ({ navigation }) => {
    console.log(navigation);
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
        backgroundColor: theme.colors.bg.dark,
        borderRadius: 5,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    typeName: {
        fontSize: theme.sizes.xl,
        fontWeight: "bold",
        color: theme.colors.color.light,
    },
});
