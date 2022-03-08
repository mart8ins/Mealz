// import React, { useState, createContext, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const ShoppingListContext = createContext();

// export const ShoppingContextProvider = ({ children }) => {
//     const [listItems, setListItems] = useState([]);
//     const [shoppingLists, setShoppingLists] = useState([]);

//     // SET CONTEXT FOR INITIAL RENDER
//     const getShoppingListFromStorage = async () => {
//         // await AsyncStorage.removeItem("shoppingLists");
//         // const store = await AsyncStorage.getItem("shoppingLists");
//         // if (store) {
//         //     const shoppingListsParsed = JSON.parse(store);
//         //     if (shoppingListsParsed.length > 0) {
//         //         setShoppingLists(shoppingListsParsed);
//         //     }
//         // }
//     };
//     useEffect(() => {
//         getShoppingListFromStorage();
//     }, []);

//     // UPDATE STORAGE AFTER EVERY NEW SHOPPING LIST IS ADDED
//     const updateShoppingListStorage = async () => {
//         if (shoppingLists.length > 0) {
//             const store = JSON.stringify(shoppingLists);
//             await AsyncStorage.setItem("shoppingLists", store);
//         }
//     };
//     useEffect(() => {
//         updateShoppingListStorage();
//     }, [shoppingLists, setShoppingLists]);

//     return (
//         <ShoppingListContext.Provider
//             value={{ listItems, setListItems, shoppingLists, setShoppingLists }}
//         >
//             {children}
//         </ShoppingListContext.Provider>
//     );
// };
