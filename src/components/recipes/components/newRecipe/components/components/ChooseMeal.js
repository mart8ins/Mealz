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
                <Text
                    style={[
                        styles.meal__type__name,
                        meal === "Breakfast" && styles.choosenMealName,
                    ]}
                >
                    Breakfast
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.meal__type__touch,
                    meal === "Lunch" && styles.choosenMeal,
                ]}
                onPress={() => updateRecipe("Lunch")}
            >
                <Text
                    style={[
                        styles.meal__type__name,
                        meal === "Lunch" && styles.choosenMealName,
                    ]}
                >
                    Lunch
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => updateRecipe("Dinner")}
                style={[
                    styles.meal__type__touch,
                    meal === "Dinner" && styles.choosenMeal,
                ]}
            >
                <Text
                    style={[
                        styles.meal__type__name,
                        meal === "Dinner" && styles.choosenMealName,
                    ]}
                >
                    Dinner
                </Text>
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
        margin: 30,
        backgroundColor: theme.colors.bg.light,
        width: 200,
    },
    meal__type__name: {
        color: theme.colors.color.dark,
        textAlign: "center",
        fontSize: theme.sizes.xl,
        padding: theme.sizes.sm,
    },
    choosenMeal: {
        backgroundColor: theme.colors.bg.green,
    },
    choosenMealName: {
        color: theme.colors.color.light,
    },
});
