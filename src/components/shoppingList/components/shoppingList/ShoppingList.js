import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ShopListContext } from "../../../../context/ShopListContext";
import { NewListTitle } from "../newList/components/NewListTitle";
import { GroceryListCustom } from "../../../../shared/groceries/GroceryListCustom/GroceryListCustom";

export const ShoppingList = ({ route, navigation }) => {
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    const { listId } = route.params;
    // const { shoppingLists, setShoppingLists } = useContext(ShopListContext);
    const [listData, setListData] = useState({});

    // useEffect(() => {
    //     let isMounted = true;
    //     if (isMounted) {
    //         const list = shoppingLists.filter((list) => {
    //             if (list.listId === listId) return list;
    //         });
    //         setListData(list[0]);
    //     }
    //     return () => {
    //         isMounted = false;
    //     };
    // }, [route]);

    const deleteList = () => {
        // if (deleteConfirm) {
        //     const listAfterDelete = shoppingLists.filter((list) => {
        //         if (list.listId !== listId) return list;
        //     });
        //     setShoppingLists(listAfterDelete);
        //     navigation.goBack();
        // }
        // setDeleteConfirm(true);
    };

    return (
        <View style={styles.container}>
            <NewListTitle
                date={listData.date}
                deleteList={deleteList}
                deleteConfirm={deleteConfirm}
            />
            <View style={styles.listContainer}>
                <GroceryListCustom
                    groceryList={listData.listItems}
                    listId={listData.listId}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        marginTop: 20,
        flex: 1,
    },
});
