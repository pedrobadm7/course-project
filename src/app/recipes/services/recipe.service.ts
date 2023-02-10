import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1280,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [new Ingredient('Carne', 1), new Ingredient('Batata Frita', 20)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a simply a test',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1280,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [new Ingredient('Pão', 15), new Ingredient('Batata Baroa', 10)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
