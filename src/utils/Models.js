export class Grocery {
    constructor(id, name, quantity, unit, recipe, meal, checked, portions) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.recipe = recipe;
        this.meal = meal;
        this.checked = checked;
        this.portions = portions;
    }
}

export class ShoppingList {
    constructor(listId, listTitle, listItems, completed) {
        this.listId = listId;
        this.listTitle = listTitle;
        this.listItems = listItems;
        this.completed = completed;
    }
}

export class Recipe {
    constructor(
        recipeId,
        meal,
        recipeName,
        recipePreperation,
        caloriesPerServing,
        imageUri,
        recipeGroceries
    ) {
        this.recipeId = recipeId;
        this.meal = meal;
        this.recipeName = recipeName;
        this.recipePreperation = recipePreperation;
        this.caloriesPerServing = caloriesPerServing;
        this.imageUri = imageUri;
        this.recipeGroceries = recipeGroceries;
    }
}
