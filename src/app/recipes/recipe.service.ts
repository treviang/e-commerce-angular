import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe("A test Recipe", "Simply a test", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
        new Recipe("A test Recipe", "Simply a test", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg")
      ];

    getRecipes() {
        // restituisce una copia dell'array
        return this.recipes.slice();
    }
}