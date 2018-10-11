import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected =new EventEmitter<Recipe>();
recipes: Recipe[]=[
  new Recipe("tuna","https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1558_10.jpg","This is tuna")
];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
}
}
