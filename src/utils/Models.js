export class Grocery {
    constructor(id, name, quantity, unit, recipe, meal, checked) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.recipe = recipe;
        this.meal = meal;
        this.checked = checked;
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
        name,
        image,
        preperation,
        calPerServing,
        ingredients
    ) {
        this.recipeId = recipeId;
        this.meal = meal;
        this.name = name;
        this.preperation = preperation;
        this.calPerServing = calPerServing;
        this.image = image;
        this.ingredients = ingredients;
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