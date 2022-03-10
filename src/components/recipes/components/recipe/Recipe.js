import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../../../../styling";
import { RecipeHeader } from "./components/recipeHeader/RecipeHeader";
import { RecipeFooter } from "./components/recipeFooter/RecipeFooter";
import { RecipesContext } from "../../../../context/RecipesContext";
import { ShopListContext } from "../../../../context/ShopListContext";

export const Recipe = ({ route }) => {
    const { recipeId } = route.params;
    const { recipes } = useContext(RecipesContext);
    const { newShoppingList, setNewShoppingList } = useContext(ShopListContext);
    const [recipeData, setRecipeData] = useState({});

    const [recipeExistsInShoppingList, setRecipeExistsInShoppingList] =
        useState(false);
    const [addedToShoppingListTimes, setAddedToShoppingListTimes] = useState(0);

    useEffect(() => {
        recipes.forEach((item) => {
            if (item.recipeId === recipeId) {
                setRecipeData(item);
            }
        });
    }, [recipeId]);

    const renderGroceriesForRecipe = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.containerData}>
                    <View>
                        <Text>{item.name}</Text>
                    </View>

                    <View style={styles.quantityContainer}>
                        <Text>{item.quantity}</Text>
                        <Text>{item.unit}</Text>
                    </View>
                </View>
            </View>
        );
    };

    const sendGroceriesToShoppingList = () => {
        setNewShoppingList([...newShoppingList, ...recipeData.recipeGroceries]);
    };

    const removeGroceriesFromShoppingList = (recipeName) => {
        const filtered = newShoppingList.filter((item) => {
            return item.recipe !== recipeName;
        });
        setNewShoppingList(filtered);
        setAddedToShoppingListTimes(0);
    };

    //  **************** CHANGE GROCERIES IN SHOPPING LIST
    const changeGroceriesInShoppingListPortions = (
        action,
        count,
        recipeName
    ) => {
        if (action === "-" && count === 1) {
            removeGroceriesFromShoppingList(recipeName);
        } else {
            const refs = [...newShoppingList];
            const groceries = recipeData.recipeGroceries;

            const maped = refs.map((item) => {
                let portionUpdate =
                    action === "+" ? item.portions + 1 : item.portions - 1;
                let newObj = {};
                newObj.checked = item.checked;
                newObj.id = item.id;
                newObj.meal = item.meal;
                newObj.name = item.name;
                newObj.quantity = item.quantity;
                newObj.recipe = item.recipe;
                newObj.unit = item.unit;
                for (let x = 0; x < groceries.length; x++) {
                    if (groceries[x].recipe === item.recipe) {
                        newObj.portions = portionUpdate;
                    } else {
                        newObj.portions = item.portions;
                    }
                }
                return newObj;
            });
            setNewShoppingList(maped);
        }
    };
    return (
        <View style={styles.container_top}>
            <FlatList
                style={{ width: "100%" }}
                data={recipeData.recipeGroceries}
                renderItem={renderGroceriesForRecipe}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => (
                    <RecipeHeader
                        recipeName={recipeData.recipeName}
                        caloriesPerServing={recipeData.caloriesPerServing}
                        imageUri={recipeData.imageUri}
                        recipePreperation={recipeData.recipePreperation}
                    />
                )}
                ListFooterComponent={() => (
                    <RecipeFooter
                        sendGroceriesToShoppingList={
                            sendGroceriesToShoppingList
                        }
                        changeGroceriesInShoppingListPortions={
                            changeGroceriesInShoppingListPortions
                        }
                        newShoppingList={newShoppingList}
                        recipeData={recipeData}
                        recipeExistsInShoppingList={recipeExistsInShoppingList}
                        setRecipeExistsInShoppingList={
                            setRecipeExistsInShoppingList
                        }
                        addedToShoppingListTimes={addedToShoppingListTimes}
                        setAddedToShoppingListTimes={
                            setAddedToShoppingListTimes
                        }
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container_top: {
        flex: 1,
    },
    container: {
        alignItems: "center",
    },
    containerData: {
        width: 290,
        flex: 1,
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        borderBottomWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.color.dark,
    },
    quantityContainer: {
        flexDirection: "row",
    },
    checkboxContainer: {
        flex: 1,
        alignItems: "center",
    },
});
