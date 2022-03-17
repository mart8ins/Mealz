import React from "react";
import { View, StyleSheet } from "react-native";
import { NewContentButton } from "../../../../shared/buttons/NewContentButton";
import { MealType } from "./components/MealType";
import { theme } from "../../../../styling/index";

export const ChooseMeal = ({ navigation }) => {
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
        backgroundColor: theme.colors.background.background1,
    },
});
