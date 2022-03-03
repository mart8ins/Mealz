import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ShoppingListContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
    const [listItems, setListItems] = useState([]);
    const [shoppingLists, setShoppingLists] = useState([]);

    useEffect(() => {
        updateShoppingListStorage();
    }, [shoppingLists, setShoppingLists]);

    // UPDATE STORAGE AFTER EVERY NEW SHOPPING LIST IS ADDED
    const updateShoppingListStorage = async () => {
        if (shoppingLists.length > 0) {
            const store = JSON.stringify(shoppingLists);
            await AsyncStorage.setItem("shoppingLists", store);
        }
    };

    return (
        <ShoppingListContext.Provider
            value={{ listItems, setListItems, shoppingLists, setShoppingLists }}
        >
            {children}
        </ShoppingListContext.Provider>
    );
};
