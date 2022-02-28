import React from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const UnitSelector = ({ style, listItemUnit, setListItemUnit }) => {
    return (
        <View style={style}>
            <RNPickerSelect
                onValueChange={setListItemUnit}
                placeholder={{ label: "Type" }}
                value={listItemUnit}
                items={[
                    { label: "ml", value: "ml" },
                    { label: "l", value: "l" },
                    { label: "kg", value: "kg" },
                    { label: "gm", value: "gm" },
                    { label: "pc", value: "pc" },
                ]}
            />
        </View>
    );
};
