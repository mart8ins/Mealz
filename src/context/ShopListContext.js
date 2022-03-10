import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ShopListContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
    const [newShoppingList, setNewShoppingList] = useState([]);
    const [allShoppingLists, setAllShoppingLists] = useState([]);

    // SET CONTEXT FOR INITIAL RENDER
    const getShoppingListFromStorage = async () => {
        // await AsyncStorage.removeItem("shoppingLists");
        const store = await AsyncStorage.getItem("shoppingLists");
        if (store) {
            const shoppingListsParsed = JSON.parse(store);
            if (shoppingListsParsed.length > 0) {
                setAllShoppingLists(shoppingListsParsed);
            }
        }
    };
    useEffect(() => {
        getShoppingListFromStorage();
    }, []);

    // UPDATE STORAGE AFTER EVERY NEW SHOPPING LIST IS ADDED
    const updateShoppingListStorage = async () => {
        if (allShoppingLists.length > 0) {
            const store = JSON.stringify(allShoppingLists);
            await AsyncStorage.setItem("shoppingLists", store);
        }
    };
    useEffect(() => {
        updateShoppingListStorage();
    }, [allShoppingLists, setAllShoppingLists]);

    return (
        <ShopListContext.Provider
            value={{
                newShoppingList,
                setNewShoppingList,
                allShoppingLists,
                setAllShoppingLists,
            }}
        >
            {children}
        </ShopListContext.Provider>
    );
};
