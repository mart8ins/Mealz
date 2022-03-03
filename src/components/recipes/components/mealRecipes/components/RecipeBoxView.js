import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { theme } from "../../../../../styling";

export const RecipeBoxView = ({ item, navigation }) => {
    const gotToDetails = () => {
        navigation.navigate("Recipe", { recipe: item });
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={gotToDetails}>
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

const styles = StyleSheet.create({
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
