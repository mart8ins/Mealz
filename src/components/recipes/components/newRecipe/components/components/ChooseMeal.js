import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../../styling/index";

export const ChooseMeal = ({ meal, setMeal }) => {
    const updateRecipe = (type) => {
        setMeal(type);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => updateRecipe("Breakfast")}
                style={[
                    styles.meal__type__touch,
                    meal === "Breakfast" && styles.choosenMeal,
                ]}
            >
                <Text style={styles.meal__type__name}>Breakfast</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.meal__type__touch,
                    meal === "Lunch" && styles.choosenMeal,
                ]}
                onPress={() => updateRecipe("Lunch")}
            >
                <Text style={styles.meal__type__name}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => updateRecipe("Dinner")}
                style={[
                    styles.meal__type__touch,
                    meal === "Dinner" && styles.choosenMeal,
                ]}
            >
                <Text style={styles.meal__type__name}>Dinner</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 7,
        justifyContent: "center",
        alignItems: "center",
    },
    meal__type__touch: {
        margin: 10,
        backgroundColor: "red",
    },
    choosenMeal: {
        backgroundColor: "green",
    },
});
