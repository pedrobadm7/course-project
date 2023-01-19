import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

export class RecipeService {
  constructor() {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1280,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a simply a test',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1280,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
