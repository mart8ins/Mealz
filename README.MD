# About project

This is my first React Native/Expo project.

## Project description

You can add food recipes to app with needed data - meal type, recipe name and preperation description, calories per serving, image and list of all groceries needed for this recipe, also specifying amount for each grocery.

### Recipes

After recipe is created you gan go visit it and send all groceries from this recipe directly to shopping list. Initialy data (amount of groceries) is sent per one serving but you can increae or decrease it after recipe is sent to shopping list.

### Shopping list

Visiting shopping list you can see all data from recipes if there is one. You can add new groceries to shopping list regardless if there is already data from recipes. Each grocery in shopping list will also indicate if its imported from recipe. By default creating shopping list it will have title with current date but you can edit it before shopping list is created with whatever name you whant.

After shopping list is created it has status - _In process_. Inside shopping list you can fill checkbox for each item what is accomplished. If all items are checked shopping list change it status to _Completed_.
You can add new shopping lists as many as you wish.

## To run project in you iphone...

-   Fork and clone the project repository to your local device
-   Create account in expo.io
-   Install Expo Go app from app store
-   Add Expo cli in your terminal with command _yarn global add expo-cli_
-   In you local development run command _expo install_ to install all needed dependencies
-   After everything is installed run command _expo start_
-   Check if yor phone is on the same network as you development computer if it is you should see in Expo Go app running project
