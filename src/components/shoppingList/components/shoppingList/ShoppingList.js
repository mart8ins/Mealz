import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../../../styling";
import { ShopListContext } from "../../../../context/ShopListContext";
import { NewListTitle } from "../newList/components/NewListTitle";
import { GroceryListCustom } from "../../../../shared/groceries/GroceryListCustom/GroceryListCustom";

export const ShoppingList = ({ route, navigation }) => {
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const { listId } = route.params;
    const { allShoppingLists, setAllShoppingLists } =
        useContext(ShopListContext);
    const [listData, setListData] = useState({});

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            const list = allShoppingLists.filter((list) => {
                if (list.listId === listId) return list;
            });
            setListData(list[0]);
        }
        return () => {
            isMounted = false;
        };
    }, [route]);

    const deleteList = () => {
        if (deleteConfirm) {
            const listAfterDelete = allShoppingLists.filter((list) => {
                if (list.listId !== listId) return list;
            });
            setAllShoppingLists(listAfterDelete);
            navigation.goBack();
        }
        setDeleteConfirm(true);
    };

    return (
        <View style={styles.container}>
            <NewListTitle
                listTitle={listData.listTitle}
                deleteList={deleteList}
                deleteConfirm={deleteConfirm}
            />
            <View style={styles.listContainer}>
                <GroceryListCustom
                    listId={listData.listId}
                    recipePreview={false}
                    groceriesList={listData.listItems}
                    setGroceriesList={false}
                    allShoppingLists={allShoppingLists}
                    setAllShoppingLists={setAllShoppingLists}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.background1,
    },
    listContainer: {
        marginTop: 20,
        flex: 1,
    },
});
