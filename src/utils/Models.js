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
    constructor(listId, date, listItems, completed) {
        this.listId = listId;
        this.date = date;
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

// const recipe = {
//     recipeId: `1`,
//     meal: "Dinner",
//     name: "Tortilla",
//     image: "imageeeee",
//     preperation: "put everything together",
//     calPerServing: "100cal",
//     ingredients: [
//         {
//             id: "1",
//             name: "Maize",
//             quantity: "1",
//             unit: "pc",
//             recipe: "Tortilla",
//         },
//         {
//             id: "2",
//             name: "Pupiņas",
//             quantity: "100",
//             unit: "gr",
//             recipe: "Tortilla",
//         },
//         {
//             id: "3",
//             name: "Gurkis",
//             quantity: "1",
//             unit: "pc",
//             recipe: "Tortilla",
//         },
//     ],
// };
