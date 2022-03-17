import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { theme } from "../../styling/index";

export const HomeTab = () => {
    return (
        <ImageBackground
            source={require("./home_avocado.jpg")}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <View>
                <Text style={[styles.text, styles.header]}>
                    Create your recipes
                </Text>
                <Text style={[styles.text, styles.recipeText]}>
                    ...use recipes to send groceries directly to shopping list
                </Text>
            </View>

            <View>
                <Text style={[styles.text, styles.orText]}>or</Text>
            </View>

            <View>
                <Text style={[styles.text, styles.indivindualText]}>
                    create your indivindual shopping list for store visit...
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 32,
    },
    text: {
        color: theme.colors.text.color2,
        fontWeight: "bold",
        padding: 20,
        textAlign: "center",
    },
    recipeText: {
        fontSize: 18,
    },
    indivindualText: {
        fontSize: 18,
    },
    orText: {
        fontSize: 45,
    },
});
