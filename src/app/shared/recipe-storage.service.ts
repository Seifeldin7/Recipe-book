import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from "@angular/http";
import {Recipe} from "../recipes/recipes.model";
import 'rxjs/Rx';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class recipeStorage{
constructor(private http:Http,private recipesl:RecipeService,private authsl:AuthService){}
storeRecipe(){
    const token =this.authsl.getToken();
    return this.http.put('https://recipes-ff579.firebaseio.com/recipes.json?auth='+token,this.recipesl.getRecipe());
}
getRecipe(){
    const token =this.authsl.getToken();
     this.http.get('https://recipes-ff579.firebaseio.com/recipes.json?auth='+token).map(
        (response:Response)=>{
            const recipes: Recipe[] =response.json();
            for(let recipe of recipes){
                if(!recipe['ingredients']){
                    recipe['ingredients']=[];
                }
            }
            return recipes;
        }
     )
     .subscribe(
         (recipes:Recipe[])=>{
             this.recipesl.setRecipe(recipes);
         }
     );
}
}