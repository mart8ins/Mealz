import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Storage } from "../../utils/Storage";

export const ShoppingListContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
    const [listItems, setListItems] = useState([]);
    const [shoppingLists, setShoppingLists] = useState([]);

    // UPDATE STORAGE AFTER EVERY NEW SHOPPING LIST IS ADDED
    const updateShoppingListStorage = async () => {
        const store = JSON.stringify(shoppingLists);
        await AsyncStorage.setItem("shoppingLists", store);
    };
    useEffect(() => {
        updateShoppingListStorage();
    }, [shoppingLists]);

    return (
        <ShoppingListContext.Provider
            value={{ listItems, setListItems, shoppingLists, setShoppingLists }}
        >
            {children}
        </ShoppingListContext.Provider>
    );
};
