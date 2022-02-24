import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { theme } from "../../../../../styling/index";

export const RecipeImage = ({ imageUri, setImageUri }) => {
    const getImage = async (option) => {
        let permision = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permision.granted === false) {
            alert("Permission to access media library is required!");
            return;
        }

        let pickedResult =
            option === "library"
                ? await ImagePicker.launchImageLibraryAsync()
                : await ImagePicker.launchCameraAsync();
        setImageUri(pickedResult.uri);
    };
    console.log(imageUri);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add image for recipe</Text>

            <View style={styles.optionContainer}>
                <Text style={styles.option} onPress={() => getImage("camera")}>
                    Camera
                </Text>
                <Text style={styles.option} onPress={() => getImage("library")}>
                    Library
                </Text>
            </View>
            {imageUri && (
                <View style={styles.imagePreview}>
                    <Image style={styles.image} source={{ uri: imageUri }} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    title: {
        color: theme.colors.color.dark,
        fontSize: theme.sizes.md,
        marginTop: theme.sizes.sm,
        fontWeight: "bold",
    },
    optionContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: theme.sizes.md,
    },
    option: {
        backgroundColor: theme.colors.bg.orange,
        color: theme.colors.color.light,
        padding: theme.sizes.sm,
    },
    imagePreview: {
        backgroundColor: "grey",
    },
    image: {
        width: 280,
        height: 280,
    },
});
