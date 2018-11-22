import { Ingredient } from '../shared/shared.component';
import { Subject } from 'rxjs/Subject';

export class ShoppinglistService {
    startedediting=new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('onion', 1), new Ingredient('tuna', 5)
    ];
    oniadded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
    getIngredients(){
        return this.ingredients;
    }
    getIngredient(id:number){
        return this.ingredients[id];
    }
    addingredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
    }
    updateingredient(index:number,ingredient:Ingredient){
        this.ingredients[index]=ingredient;
    }
    removeingredient(id:number){
        this.ingredients.splice(id,1);
    }
}