import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../../../styling/index";

export const ChooseMeal = ({ meal, setMeal }) => {
    return (
        <View style={styles.container__meal__type}>
            <TouchableOpacity
                onPress={() => setMeal("Breakfast")}
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
                onPress={() => setMeal("Lunch")}
            >
                <Text style={styles.meal__type__name}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setMeal("Dinner")}
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
    container__meal__type: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    meal__type__touch: {
        padding: theme.sizes.sm,
        marginTop: theme.sizes.sm,
        borderRadius: theme.sizes.sm,
        backgroundColor: theme.colors.bg.dark,
    },
    meal__type__name: {
        color: theme.colors.color.light,
        fontWeight: "bold",
    },
    choosenMeal: {
        backgroundColor: theme.colors.bg.green,
    },
});
