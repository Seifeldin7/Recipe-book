import {Recipe} from './recipes.model';
import {  Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/shared.component';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
     //recipeSelected =new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe("tuna","https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1558_10.jpg","This is tuna",
        [new Ingredient("tuna",5),new Ingredient("onion",2)]),
        new Recipe("Burger","https://image.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-450w-705104968.jpg","Tasty Burger",
        [new Ingredient("meat",5),new Ingredient("onion",2)])
      ];
      constructor(private slservice:ShoppinglistService){};
    getRecipe (){
        return this.recipes;
    }
    setRecipe (recipes:Recipe[]){
         this.recipes =recipes;
    }
    getrecipe(id:number){
        return this.recipes[id];
    }
    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
    }
    updateRecipe(index:number,recipe:Recipe){
        this.recipes[index]=recipe;
    }
    deleterecipe(id:number){
        this.recipes.splice(id,1);
      }
    AddingredientstoShop(ingredients:Ingredient[]){
        this.slservice.addingredients(ingredients);
    }
}