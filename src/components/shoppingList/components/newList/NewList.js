import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const NewList = ({ navigation }) => {
    const create = () => {
        console.log("Saglabāt listi");
        navigation.goBack();
    };
    return (
        <View style={{ flex: 1 }}>
            <Text>veidojam jaunu listi</Text>
            <TouchableOpacity onPress={create}>
                <Text>Create</Text>
            </TouchableOpacity>
        </View>
    );
};
